import { useState , useEffect } from 'react';
import { X, Mail, Lock, User, ArrowLeft, Check, XCircle, Loader2 } from 'lucide-react';
import { publicAxios } from "../../utils/axios";
import { useAuth } from "./AuthContext";
import {showSuccess, showError, showInfo} from "../../utils/toast"

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialView?: ModalView;
}

type ModalView = 'login' | 'signup' | 'forgot' | 'verify' | 'reset';

// username rules: 3–20 chars; letters, numbers, dot, underscore, hyphen
const USERNAME_RE = /^[a-zA-Z0-9._-]{3,20}$/;

type UnameStatus = 'idle' | 'checking' | 'available' | 'unavailable' | 'invalid';

export default function AuthModal({ isOpen, onClose , initialView}: AuthModalProps) {
  const [view, setView] = useState<ModalView>(initialView ?? 'login');
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    gmail: '',
    password: '',
    confirmPassword: '',
    otp: '',
    newPassword: '',
  });
  const [loading, setLoading] = useState(false);

  // --- username availability UI state ---
  const [unameStatus, setUnameStatus] = useState<UnameStatus>('idle');
  const [unameMsg, setUnameMsg] = useState('');
  const [unameSuggestions, setUnameSuggestions] = useState<string[]>([]);

  const { login } = useAuth();

  useEffect(() => {
    if (isOpen && initialView) setView(initialView);
  }, [isOpen, initialView]);

  // Debounced username availability check
  useEffect(() => {
    if (!isOpen || view !== 'signup') return;

    const raw = formData.username.trim();
    // reset when empty
    if (!raw) {
      setUnameStatus('idle');
      setUnameMsg('');
      setUnameSuggestions([]);
      return;
    }

    // client-side validation first
    if (!USERNAME_RE.test(raw)) {
      setUnameStatus('invalid');
      setUnameMsg('Use 3–20 characters: letters, numbers, . _ -');
      setUnameSuggestions([]);
      return;
    }

    setUnameStatus('checking');
    setUnameMsg('Checking availability…');
    setUnameSuggestions([]);

    const t = setTimeout(async () => {
      try {
        const { data } = await publicAxios.get('/user/username-available', {
          params: { username: raw }
        });

        if (data?.success && data?.data?.available) {
          setUnameStatus('available');
          setUnameMsg('Great — username is available');
          setUnameSuggestions([]);
        } else {
          setUnameStatus('unavailable');
          setUnameMsg(data?.message || 'Username unavailable');
          setUnameSuggestions(data?.data?.suggestions || []);
        }
      } catch (e: any) {
        setUnameStatus('idle');
        setUnameMsg('Could not check username right now');
        setUnameSuggestions([]);
      }
    }, 400); // debounce

    return () => clearTimeout(t);
  }, [formData.username, isOpen, view]);

  if (!isOpen) return null;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const pickSuggestion = (s: string) => {
    setFormData(prev => ({ ...prev, username: s }));
    showInfo(`Using suggestion "${s}"`);
  };

  // LOGIN
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { data } = await publicAxios.post("/user/login", {
        gmail: formData.gmail,
        password: formData.password,
      });

      if (data?.success) {
        const token = data.data?.access_token;
        const user = data.data?.user;
        login(token, user);
        showSuccess('Login successful!');
        setTimeout(() => onClose(), 1200);
      } else {
        showError(data?.message || 'Login failed');
      }
    } catch (err: any) {
      showError(err?.response?.data?.message || 'Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  // SIGNUP
  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();

    // Guard: username must be valid & available (not checking)
    if (unameStatus === 'checking') {
      showInfo('Hold on — still checking username');
      return;
    }
    if (unameStatus === 'invalid') {
      showError('Invalid username format');
      return;
    }
    if (unameStatus === 'unavailable') {
      showError('That username is taken. Pick another');
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      showError('Passwords do not match');
      return;
    }

    setLoading(true);
    try {
      const { data } = await publicAxios.post("/user/register", {
        name: formData.name,
        username: formData.username.trim(),
        gmail: formData.gmail,
        password: formData.password,
      });

      if (data?.success) {
        showSuccess('OTP sent to your email!');
        setView('verify');
      } else {
        showError(data?.message || 'Registration failed');
      }
    } catch (err: any) {
      showError(err?.response?.data?.message || 'Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  // VERIFY OTP (SIGNUP)
  const handleVerify = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { data } = await publicAxios.post("/user/verify", {
        gmail: formData.gmail,
        otp: formData.otp,
      });

      if (data?.success) {
        showSuccess('Account verified! You can now login.');
        setTimeout(() => setView('login'), 1500);
      } else {
        showError(data?.message || 'Verification failed');
      }
    } catch (err: any) {
      showError(err?.response?.data?.message || 'Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  // FORGOT PASSWORD → SEND OTP
  const handleForgotPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { data } = await publicAxios.post("/user/forgot-password", {
        gmail: formData.gmail,
      });

      if (data?.success) {
        showSuccess('OTP sent to your email!');
        setView('reset');
      } else {
        showError(data?.message || 'Request failed');
      }
    } catch (err: any) {
      showError(err?.response?.data?.message || 'Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  // RESET PASSWORD (VERIFY OTP + NEW PASSWORD)
  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { data } = await publicAxios.post("/user/reset-password", {
        gmail: formData.gmail,
        otp: formData.otp,
        new_password: formData.newPassword,
      });

      if (data?.success) {
        showSuccess('Password reset successful!');
        setTimeout(() => setView('login'), 1500);
      } else {
        showError(data?.message || 'Reset failed');
      }
    } catch (err: any) {
      showError(err?.response?.data?.message || 'Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  // RESEND OTP (SIGNUP FLOW)
  const handleResendOTP = async () => {
    setLoading(true);
    try {
      const { data } = await publicAxios.post("/user/resend-otp", {
        gmail: formData.gmail,
      });

      if (data?.success) {
        const remaining = data?.data
          ? ` (hourly left: ${data.data.remaining_hourly}, daily left: ${data.data.remaining_daily})`
          : '';
        showSuccess(`New OTP sent${remaining}!`);
      } else {
        showError(data?.message || 'Failed to resend OTP');
      }
    } catch (err: any) {
      showError(err?.response?.data?.message || 'Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setFormData({
      name: '',
      username: '',
      gmail: '',
      password: '',
      confirmPassword: '',
      otp: '',
      newPassword: '',
    });
    setUnameStatus('idle');
    setUnameMsg('');
    setUnameSuggestions([]);
  };

  const switchView = (newView: ModalView) => {
    setView(newView);
    resetForm();
  };

  const disableSignup =
    loading ||
    view !== 'signup' ||
    unameStatus === 'invalid' ||
    unameStatus === 'unavailable' ||
    unameStatus === 'checking';

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 sm:p-6">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md relative overflow-hidden max-h-[90vh] overflow-y-auto">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#77dd77] to-[#5bc85b]" />

        <button
          onClick={onClose}
          className="absolute top-3 right-3 sm:top-4 sm:right-4 text-gray-400 hover:text-gray-600 transition-colors z-10"
        >
          <X size={20} className="sm:w-6 sm:h-6" />
        </button>

        <div className="p-6 sm:p-8">
          {view === 'login' && (
            <>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-1 sm:mb-2">Welcome Back</h2>
              <p className="text-sm sm:text-base text-gray-500 mb-5 sm:mb-6">Sign in to your account</p>

              <form onSubmit={handleLogin} className="space-y-3 sm:space-y-4">
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">Email</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                    <input
                      type="email"
                      name="gmail"
                      value={formData.gmail}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-3 sm:pr-4 py-2.5 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#77dd77] focus:border-transparent outline-none transition-all"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">Password</label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                    <input
                      type="password"
                      name="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-3 sm:pr-4 py-2.5 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#77dd77] focus:border-transparent outline-none transition-all"
                      placeholder="Enter your password"
                      required
                    />
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => switchView('forgot')}
                  className="text-xs sm:text-sm text-[#77dd77] hover:text-[#5bc85b] font-medium transition-colors"
                >
                  Forgot password?
                </button>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#77dd77] text-white font-semibold py-2.5 sm:py-3 text-sm sm:text-base rounded-lg hover:bg-[#5bc85b] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? 'Signing in...' : 'Sign In'}
                </button>
              </form>

              <div className="mt-5 sm:mt-6 text-center">
                <p className="text-sm sm:text-base text-gray-600">
                  Don't have an account{' '}
                  <button
                    onClick={() => switchView('signup')}
                    className="text-[#77dd77] hover:text-[#5bc85b] font-semibold transition-colors"
                  >
                    Sign Up
                  </button>
                </p>
              </div>
            </>
          )}

          {view === 'signup' && (
            <>
              <button
                onClick={() => switchView('login')}
                className="flex items-center text-gray-600 hover:text-gray-800 mb-3 sm:mb-4 transition-colors"
              >
                <ArrowLeft size={18} className="sm:w-5 sm:h-5 mr-2" />
                <span className="text-sm sm:text-base">Back to login</span>
              </button>

              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-1 sm:mb-2">Create Account</h2>
              <p className="text-sm sm:text-base text-gray-500 mb-5 sm:mb-6">Join CareerPrep today</p>

              <form onSubmit={handleSignup} className="space-y-3 sm:space-y-4">
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">Full Name</label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-3 sm:pr-4 py-2.5 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#77dd77] focus:border-transparent outline-none transition-all"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                </div>

                {/* Username with availability UI */}
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">Username</label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                    <input
                      type="text"
                      name="username"
                      value={formData.username}
                      onChange={handleInputChange}
                      className={`w-full pl-10 pr-10 py-2.5 sm:py-3 text-sm sm:text-base border rounded-lg outline-none transition-all
                        ${unameStatus === 'invalid' || unameStatus === 'unavailable'
                          ? 'border-red-300 focus:ring-2 focus:ring-red-300'
                          : 'border-gray-300 focus:ring-2 focus:ring-[#77dd77] focus:border-transparent'}`}
                      placeholder="Choose a username"
                      required
                      autoComplete="off"
                      spellCheck={false}
                    />
                    <div className="absolute right-3 top-1/2 -translate-y-1/2">
                      {unameStatus === 'checking' && <Loader2 className="animate-spin" size={18} />}
                      {unameStatus === 'available' && <Check className="text-green-500" size={18} />}
                      {(unameStatus === 'unavailable' || unameStatus === 'invalid') && <XCircle className="text-red-500" size={18} />}
                    </div>
                  </div>
                  {unameMsg && (
                    <p
                      className={`mt-1.5 text-xs sm:text-sm ${
                        unameStatus === 'available'
                          ? 'text-green-600'
                          : unameStatus === 'unavailable' || unameStatus === 'invalid'
                          ? 'text-red-600'
                          : 'text-gray-500'
                      }`}
                    >
                      {unameMsg}
                    </p>
                  )}

                  {unameSuggestions.length > 0 && (
                    <div className="mt-2 flex flex-wrap gap-2">
                      {unameSuggestions.map((s) => (
                        <button
                          key={s}
                          type="button"
                          onClick={() => pickSuggestion(s)}
                          className="px-2.5 py-1 text-xs sm:text-sm rounded-full border border-gray-300 hover:border-[#77dd77] hover:text-[#5bc85b] transition-colors"
                        >
                          {s}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">Email</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                    <input
                      type="email"
                      name="gmail"
                      value={formData.gmail}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-3 sm:pr-4 py-2.5 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#77dd77] focus:border-transparent outline-none transition-all"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">Password</label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                    <input
                      type="password"
                      name="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-3 sm:pr-4 py-2.5 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#77dd77] focus:border-transparent outline-none transition-all"
                      placeholder="Create a password"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">Confirm Password</label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                    <input
                      type="password"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-3 sm:pr-4 py-2.5 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#77dd77] focus:border-transparent outline-none transition-all"
                      placeholder="Confirm your password"
                      required
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={disableSignup}
                  className="w-full bg-[#77dd77] text-white font-semibold py-2.5 sm:py-3 text-sm sm:text-base rounded-lg hover:bg-[#5bc85b] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? 'Creating Account...' : (unameStatus === 'checking' ? 'Checking username…' : 'Sign Up')}
                </button>
              </form>
            </>
          )}

          {view === 'verify' && (
            <>
              <button
                onClick={() => switchView('signup')}
                className="flex items-center text-gray-600 hover:text-gray-800 mb-3 sm:mb-4 transition-colors"
              >
                <ArrowLeft size={18} className="sm:w-5 sm:h-5 mr-2" />
                <span className="text-sm sm:text-base">Back</span>
              </button>

              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-1 sm:mb-2">Verify Email</h2>
              <p className="text-xs sm:text-sm text-gray-500 mb-5 sm:mb-6 break-words">
                Enter the 6-digit code sent to <span className="font-medium">{formData.gmail}</span>
              </p>

              <form onSubmit={handleVerify} className="space-y-3 sm:space-y-4">
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">Verification Code</label>
                  <input
                    type="text"
                    name="otp"
                    value={formData.otp}
                    onChange={handleInputChange}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#77dd77] focus:border-transparent outline-none transition-all text-center text-xl sm:text-2xl tracking-widest"
                    placeholder="000000"
                    maxLength={6}
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#77dd77] text-white font-semibold py-2.5 sm:py-3 text-sm sm:text-base rounded-lg hover:bg-[#5bc85b] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? 'Verifying...' : 'Verify Email'}
                </button>

                <button
                  type="button"
                  onClick={handleResendOTP}
                  disabled={loading}
                  className="w-full text-sm sm:text-base text-[#77dd77] hover:text-[#5bc85b] font-medium transition-colors py-2"
                >
                  Resend Code
                </button>
              </form>
            </>
          )}

          {view === 'forgot' && (
            <>
              <button
                onClick={() => switchView('login')}
                className="flex items-center text-gray-600 hover:text-gray-800 mb-3 sm:mb-4 transition-colors"
              >
                <ArrowLeft size={18} className="sm:w-5 sm:h-5 mr-2" />
                <span className="text-sm sm:text-base">Back to login</span>
              </button>

              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-1 sm:mb-2">Forgot Password</h2>
              <p className="text-sm sm:text-base text-gray-500 mb-5 sm:mb-6">We'll send you a code to reset your password</p>

              <form onSubmit={handleForgotPassword} className="space-y-3 sm:space-y-4">
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">Email</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                    <input
                      type="email"
                      name="gmail"
                      value={formData.gmail}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-3 sm:pr-4 py-2.5 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#77dd77] focus:border-transparent outline-none transition-all"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#77dd77] text-white font-semibold py-2.5 sm:py-3 text-sm sm:text-base rounded-lg hover:bg-[#5bc85b] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? 'Sending Code...' : 'Send Reset Code'}
                </button>
              </form>
            </>
          )}

          {view === 'reset' && (
            <>
              <button
                onClick={() => switchView('forgot')}
                className="flex items-center text-gray-600 hover:text-gray-800 mb-3 sm:mb-4 transition-colors"
              >
                <ArrowLeft size={18} className="sm:w-5 sm:h-5 mr-2" />
                <span className="text-sm sm:text-base">Back</span>
              </button>

              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-1 sm:mb-2">Reset Password</h2>
              <p className="text-sm sm:text-base text-gray-500 mb-5 sm:mb-6">Enter the code and your new password</p>

              <form onSubmit={handleResetPassword} className="space-y-3 sm:space-y-4">
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">Verification Code</label>
                  <input
                    type="text"
                    name="otp"
                    value={formData.otp}
                    onChange={handleInputChange}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#77dd77] focus:border-transparent outline-none transition-all text-center text-lg sm:text-xl tracking-widest"
                    placeholder="000000"
                    maxLength={6}
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">New Password</label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                    <input
                      type="password"
                      name="newPassword"
                      value={formData.newPassword}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-3 sm:pr-4 py-2.5 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#77dd77] focus:border-transparent outline-none transition-all"
                      placeholder="Enter new password"
                      required
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#77dd77] text-white font-semibold py-2.5 sm:py-3 text-sm sm:text-base rounded-lg hover:bg-[#5bc85b] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? 'Resetting Password...' : 'Reset Password'}
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
