import React, { useState } from "react";
import { publicAxios } from "../../utils/axios";
import { useAuth } from "./AuthContext";
const LoginModal = ({ show, onClose ,onForgot}) => {
  const { login } = useAuth();
  const [form, setForm] = useState({ gmail: "", password: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await publicAxios.post("/user/login", form);
      login(res.data.access_token, res.data.user);
      onClose();
    } catch (err) {
      alert("Invalid credentials");
    } finally {
      setLoading(false);
    }
  };

  if (!show) return null;
  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-40 flex items-center justify-center">
      <div className="bg-white shadow-xl rounded-lg w-80 p-6">
        <h2 className="text-lg font-bold mb-4 text-center">Login</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="gmail"
            placeholder="Email"
            className="w-full mb-3 px-3 py-2 border rounded"
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
            className="bg-blue-600 w-full py-2 rounded text-white font-bold mt-2"
            type="submit"
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
          <button
  type="button"
  className="w-full mt-3 text-sm underline text-blue-600"
  onClick={onForgot}
>
  Forgot Password?
</button>

        </form>
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

export default LoginModal;
