import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectUser } from "../features/userSlice";

const PrivateRoutes = ({ children }) => {
  // Changed "privateRoutes" to "PrivateRoutes"
  const user = useSelector(selectUser);
  return user ? children : <Navigate to="/getting-started" />;
};

export default PrivateRoutes;
