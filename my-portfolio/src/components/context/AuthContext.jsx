import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from "react";
import { useNavigate } from "react-router-dom";

// Tạo context
const AuthContext = createContext();

// Tạo provider cho context
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
      setUser(storedUsername); // Đặt trạng thái người dùng từ localStorage
    }
  }, []);

  const login = useCallback((username) => {
    localStorage.setItem("username", username);
    setUser(username);
  }, []);

  const logout = useCallback(() => {
    localStorage.removeItem("username");
    setUser(null);
    navigate("/login");
  }, [navigate]);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook để sử dụng context
export const useAuth = () => useContext(AuthContext);
