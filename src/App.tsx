import { Routes, Route, useNavigate } from "react-router-dom";
import { useEffect, useContext } from "react";
import { AuthContext } from "./context/auth-context";

import { Login } from "./views/Login";
import { SignUp } from "./views/SignUp";
import { Workout } from "./views/Workout";

export function App() {
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!currentUser) {
      navigate("/");
    }
  }, [currentUser]);

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/workout" element={currentUser ? <Workout /> : <Login />} />
    </Routes>
  );
}
