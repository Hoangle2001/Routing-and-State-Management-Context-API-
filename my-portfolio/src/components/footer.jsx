import React from "react";
import { useState, useEffect, useCallback } from "react";
import { useAuth } from "./context/AuthContext";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import Drawer from "./drawer";

const containerStyle = {
  width: "400px",
  height: "400px",
};

const center = {
  lat: -3.745,
  lng: -38.523,
};

const Footer = () => {
  const { user } = useAuth();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
      setFormData((prevData) => ({
        ...prevData,
        name: storedUsername,
      }));
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
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

      console.log("Data submitted successfully:", formData);
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error submitting data:", error);
    }
  };

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "YOUR_REAL_API_KEY",
    libraries: ["places"],
  });

  const onLoad = useCallback((map) => {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
  }, []);

  const onUnmount = useCallback((map) => {
    // setMap(null);
  }, []);

  return (
    <footer className="bg-blue-50 text-black p-8 flex justify-start animate-appear">
      <div className="container mr-auto w-1/2">
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

      <Drawer />
    </footer>
  );
};

export default Footer;
