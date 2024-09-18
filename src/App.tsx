// React
import { useEffect, useContext } from "react";
// Routing
import { Routes, Route, useNavigate } from "react-router-dom";
// Contexts
import { AuthContext } from "./contexts/AuthContext";
// Views
import { Login } from "./views/Login";
import { PasswordRecovery } from "./views/PasswordRecovery";
import { Signup } from "./views/Signup";
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
      <Route path="/signup" element={<Signup />} />
      <Route path="/password-recovery" element={<PasswordRecovery />} />
      <Route path="/workout" element={currentUser ? <Workout /> : <Login />} />
    </Routes>
  );
}
