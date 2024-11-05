import React from "react";
import { useState } from "react";
import { useAuth } from "./context/AuthContext"; // Import hook để sử dụng AuthContext
import { useNavigate } from "react-router-dom";

const LogInPage = () => {
  const { login } = useAuth(); // Lấy hàm login từ context
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("username", username);
    login(username); // Lưu tên người dùng vào trạng thái chung
    setUsername(""); // Reset ô nhập
    navigate("/");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-indigo-600">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold mb-4 text-black">Log In</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1" htmlFor="username">
              Username
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="text-black border border-gray-300 p-2 rounded w-full"
              placeholder="Enter your username"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white p-2 rounded hover:bg-indigo-700 transition"
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default LogInPage;
