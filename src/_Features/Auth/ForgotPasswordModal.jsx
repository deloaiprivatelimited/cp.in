import React, { useState } from "react";
// import { publicAxios } from "../api/axios";
import { publicAxios } from "../../utils/axios";
const ForgotPasswordModal = ({ show, onClose }) => {
  const [form, setForm] = useState({ gmail: "", otp: "", newPassword: "", step: 1 });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleRequest = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await publicAxios.post("/user/forgot-password", { gmail: form.gmail });
      setForm({ ...form, step: 2 });
    } catch (err) {
      alert("Unable to send OTP (check email)");
    }
    setLoading(false);
  };

  const handleReset = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await publicAxios.post("/auth/reset-password", {
        gmail: form.gmail,
        otp: form.otp,
        new_password: form.newPassword,
      });
      alert("Password reset successfully!");
      onClose();
    } catch (err) {
      alert("Invalid OTP or error");
    }
    setLoading(false);
  };

  if (!show) return null;
  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-40 flex items-center justify-center">
      <div className="bg-white shadow-xl rounded-lg w-80 p-6">
        <h2 className="text-lg font-bold mb-4 text-center">
          {form.step === 1 ? "Forgot Password" : "Reset Password"}
        </h2>
        {form.step === 1 ? (
          <form onSubmit={handleRequest}>
            <input
              type="email"
              name="gmail"
              placeholder="Email"
              className="w-full mb-3 px-3 py-2 border rounded"
              value={form.gmail}
              onChange={handleChange}
              required
            />
            <button
              className="bg-purple-600 w-full py-2 rounded text-white font-bold mt-2"
              type="submit"
              disabled={loading}
            >
              {loading ? "Sending OTP..." : "Send OTP"}
            </button>
          </form>
        ) : (
          <form onSubmit={handleReset}>
            <input
              type="text"
              name="otp"
              placeholder="OTP"
              className="w-full mb-2 px-3 py-2 border rounded"
              value={form.otp}
              onChange={handleChange}
              required
            />
            <input
              type="password"
              name="newPassword"
              placeholder="New Password"
              className="w-full mb-3 px-3 py-2 border rounded"
              value={form.newPassword}
              onChange={handleChange}
              required
            />
            <button
              className="bg-green-600 w-full py-2 rounded text-white font-bold mt-2"
              type="submit"
              disabled={loading}
            >
              {loading ? "Resetting..." : "Reset Password"}
            </button>
          </form>
        )}
        <button
          className="w-full mt-4 text-gray-400 underline"
          onClick={onClose}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default ForgotPasswordModal;
