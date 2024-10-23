import React, { useState, useEffect } from "react";
import { useAuth } from "./context/AuthContext";

const Footer = () => {
  const { user } = useAuth();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    // Lấy tên người dùng từ localStorage và thiết lập vào state
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
      setFormData((prevData) => ({
        ...prevData,
        name: storedUsername, // Thiết lập tên người dùng vào ô username
      }));
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Giả sử bạn có một API để gửi dữ liệu
    try {
      const response = await fetch("https://example.com/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      // Xử lý phản hồi nếu cần
      console.log("Data submitted successfully:", formData);

      // Reset form after submission (optional)
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error submitting data:", error);
    }
  };

  return (
    <footer className="bg-indigo-800 text-white p-8 animate-appear">
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
