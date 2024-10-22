import React, { useState } from "react";
import { useAuth } from "./context/AuthContext"; // Import hook để sử dụng AuthContext

const Footer = () => {
  const { user } = useAuth(); // Lấy tên người dùng từ context
  const [formData, setFormData] = useState({
    name: user || "", // Sử dụng tên người dùng từ context
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Xử lý gửi form ở đây
    console.log("Submitted Data:", formData);
    // Reset form after submission (optional)
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <footer className="bg-indigo-800 text-white p-8">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-4">Contact for me</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1" htmlFor="name">
              UserName
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="text-black border border-gray-300 p-2 rounded w-full"
              placeholder="Nhập tên của bạn"
            />
          </div>
          <div>
            <label className="block mb-1" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="border border-gray-300 p-2 rounded w-full"
              placeholder="Nhập email của bạn"
            />
          </div>
          <div>
            <label className="block mb-1" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="border border-gray-300 p-2 rounded w-full"
              placeholder="Nhập tin nhắn của bạn"
              rows="4"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white p-2 rounded hover:bg-indigo-700 transition"
          >
            Send
          </button>
        </form>
      </div>
    </footer>
  );
};

export default Footer;
