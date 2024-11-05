import React from "react";
import { useAuth } from "./context/AuthContext";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user } = useAuth();

  // Nếu không có người dùng (chưa đăng nhập), điều hướng đến trang login
  if (!user) {
    return <Navigate to="/login" />;
  }

  // Nếu có người dùng, hiển thị component con (trang Home hoặc trang khác)
  return children;
};

export default PrivateRoute;
