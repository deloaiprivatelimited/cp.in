import React, { useState } from "react";
// import { publicAxios } from "../api/axios";
import { publicAxios } from "../../utils/axios";
const RegisterModal = ({ show, onClose }) => {
  const [form, setForm] = useState({
    name: "",
    username: "",
    gmail: "",
    password: "",
    otp: "",
    step: 1, // 1: initial, 2: OTP
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await publicAxios.post("/user/register", {
        name: form.name,
        username: form.username,
        gmail: form.gmail,
        password: form.password,
      });
      setForm({ ...form, step: 2 });
    } catch (err) {
      alert("Signup failed or User exists");
    }
    setLoading(false);
  };

  const handleVerify = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await publicAxios.post("/user/verify", {
        gmail: form.gmail,
        otp: form.otp,
      });
      alert("Signup successful! You can login.");
      onClose();
    } catch (err) {
      alert("Invalid OTP");
    }
    setLoading(false);
  };

  if (!show) return null;
  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-40 flex items-center justify-center">
      <div className="bg-white shadow-xl rounded-lg w-80 p-6">
        <h2 className="text-lg font-bold mb-4 text-center">
          {form.step === 1 ? "Sign Up" : "Verify OTP"}
        </h2>
        {form.step === 1 ? (
          <form onSubmit={handleRegister}>
            <input
              type="text"
              name="name"
              placeholder="Full name"
              className="w-full mb-2 px-3 py-2 border rounded"
              value={form.name}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="username"
              placeholder="Username"
              className="w-full mb-2 px-3 py-2 border rounded"
              value={form.username}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="gmail"
              placeholder="Email"
              className="w-full mb-2 px-3 py-2 border rounded"
              value={form.gmail}
              onChange={handleChange}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="w-full mb-3 px-3 py-2 border rounded"
              value={form.password}
              onChange={handleChange}
              required
            />
            <button
              className="bg-green-600 w-full py-2 rounded text-white font-bold mt-2"
              type="submit"
              disabled={loading}
            >
              {loading ? "Submitting..." : "Register"}
            </button>
          </form>
        ) : (
          <form onSubmit={handleVerify}>
            <input
              type="text"
              name="otp"
              placeholder="OTP Code"
              className="w-full mb-3 px-3 py-2 border rounded"
              value={form.otp}
              onChange={handleChange}
              required
            />
            <button
              className="bg-blue-600 w-full py-2 rounded text-white font-bold mt-2"
              type="submit"
              disabled={loading}
            >
              {loading ? "Checking..." : "Verify OTP"}
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

export default RegisterModal;
