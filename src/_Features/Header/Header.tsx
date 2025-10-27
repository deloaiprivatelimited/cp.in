import { useState, useEffect, useRef } from "react";
import { User, Menu, X } from "lucide-react";
import { useAuth } from "../Auth/AuthContext";
import DarkLogo from "../../assets/darklogo.svg";
import WhiteLogo from "../../assets/whitelogo.svg";
import AuthModal from "../Auth/AuthModal"; // ✅ import your modal

type ModalView = 'login' | 'signup' | 'forgot' | 'verify' | 'reset';

export default function Header({ isWhiteBackground = false }) {
  const { user, logout } = useAuth();

  // ✅ single modal state + which screen to show first
  const [authOpen, setAuthOpen] = useState(false);
  const [authView, setAuthView] = useState<ModalView>('login');

  const [mobileOpen, setMobileOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement | null>(null);
  const mobilePanelRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setMobileOpen(false);
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (!mobileOpen) return;
      const t = e.target as Node;
      if (
        mobilePanelRef.current &&
        !mobilePanelRef.current.contains(t) &&
        menuButtonRef.current &&
        !menuButtonRef.current.contains(t)
      ) {
        setMobileOpen(false);
      }
    }
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, [mobileOpen]);

  const headerBase = isWhiteBackground
    ? "bg-white/90 text-slate-900 border-b border-slate-200 shadow-sm"
    : "text-slate-100 border-b border-white/10 bg-gradient-to-b from-slate-950 via-slate-900 to-black";
  const brandColor = "#77dd77";
  const linkBase = isWhiteBackground
    ? "text-gray-700 hover:text-[var(--brand)]"
    : "text-slate-300 hover:text-[var(--brand)]";
  const iconColor = isWhiteBackground ? "#374151" : "#e5e7eb";

  const NavLinks = ({ onNavigate }: { onNavigate?: () => void }) => (
    <>
      {["Home", "Practice", "Resources", "About"].map((label) => (
        <a
          key={label}
          href="#"
          className={`px-3 py-2 text-sm font-medium transition-colors ${linkBase}`}
          onClick={onNavigate}
        >
          {label}
        </a>
      ))}
    </>
  );

  const handleLogout = () => {
    logout();
    setMobileOpen(false);
  };

  // helpers to open modal in the right view
  const openLogin = () => { setAuthView('login'); setAuthOpen(true); };
  const openSignup = () => { setAuthView('signup'); setAuthOpen(true); };
  const openForgot = () => { setAuthView('forgot'); setAuthOpen(true); };

  return (
    <>
      <header
        className={`sticky top-0 z-50 ${headerBase}`}
        style={{ "--brand": brandColor } as React.CSSProperties}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <a href="#" className="flex items-center gap-2">
              <img
                src={isWhiteBackground ? DarkLogo : WhiteLogo}
                alt="CareerPrep"
                className="h-10 w-auto"
              />
            </a>

            <nav className="hidden md:flex items-center space-x-8">
              <NavLinks />
            </nav>

            {/* Desktop */}
            <div className="hidden md:flex items-center space-x-3">
              {user ? (
                <div className="flex items-center gap-2">
                  <User className="w-5 h-5" style={{ color: brandColor }} />
                  <span className="text-sm font-medium">
                    {user.gmail.split("@")[0]}
                  </span>
                  <button className="ml-3 text-xs underline" onClick={handleLogout}>
                    Logout
                  </button>
                </div>
              ) : (
                <>
                  <button
                    className="px-4 py-2 text-sm font-medium transition-colors"
                    style={{ color: iconColor }}
                    onClick={openLogin}
                  >
                    Login
                  </button>
                  <button
                    className="px-4 py-2 text-sm font-medium text-white rounded-lg transition-colors"
                    style={{ backgroundColor: brandColor }}
                    onClick={openSignup}
                  >
                    Sign Up
                  </button>
                </>
              )}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                ref={menuButtonRef}
                aria-label="Toggle navigation"
                aria-expanded={mobileOpen}
                onClick={() => setMobileOpen((v) => !v)}
                className="p-2"
                style={{ color: iconColor }}
              >
                {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile nav */}
        <div
          ref={mobilePanelRef}
          className={`md:hidden origin-top overflow-hidden transition-[max-height,opacity] duration-300 ${
            mobileOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div
            className={`px-4 pt-2 pb-4 border-t ${
              isWhiteBackground
                ? "bg-white/95 border-slate-200"
                : "bg-gradient-to-b from-slate-950 via-slate-900 to-black border-white/10"
            }`}
          >
            <nav className="flex flex-col">
              <NavLinks onNavigate={() => setMobileOpen(false)} />
            </nav>
            <div className="mt-3 border-t pt-3 border-inherit">
              {user ? (
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <User className="w-5 h-5" style={{ color: brandColor }} />
                    <span className="text-sm font-medium">
                      {user.gmail.split("@")[0]}
                    </span>
                  </div>
                  <button className="text-xs underline" onClick={handleLogout}>
                    Log out
                  </button>
                </div>
              ) : (
                <div className="flex items-center gap-3">
                  <button
                    className="flex-1 px-4 py-2 text-sm text-left"
                    onClick={() => {
                      openLogin();
                      setMobileOpen(false);
                    }}
                  >
                    Login
                  </button>
                  <button
                    className="flex-1 px-4 py-2 text-sm text-white rounded-lg text-center"
                    style={{ backgroundColor: brandColor }}
                    onClick={() => {
                      openSignup();
                      setMobileOpen(false);
                    }}
                  >
                    Sign Up
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* ✅ Mount the modal once here and drive it via state */}
      <AuthModal
        isOpen={authOpen}
        onClose={() => setAuthOpen(false)}
        initialView={authView}
      />
    </>
  );
}
