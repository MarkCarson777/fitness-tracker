import { Routes, Route, useNavigate } from "react-router-dom";
import { useEffect, useContext } from "react";
import { AuthContext } from "./context/auth-context";

import { Login } from "./views/Login";
import { Workout } from "./views/Workout";

export function App() {
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();

  console.log("currentUser", currentUser);

  useEffect(() => {
    if (!currentUser) {
      navigate("/");
    } else {
      navigate("/workout");
    }
  }, [currentUser]);

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/workout" element={currentUser ? <Workout /> : <Login />} />
    </Routes>
  );
}
