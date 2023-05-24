import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate("");
  const { loading, userInfo, error } = useSelector((state) => state.auth);
  useEffect(() => {
    if (userInfo?.isAdmin !== "admin") {
      setTimeout(() => {
        navigate("/");
      }, 1000);
    }
  }, [userInfo?.isAdmin, navigate]);
  return <>{children}</>;
};

export default ProtectedRoute;
