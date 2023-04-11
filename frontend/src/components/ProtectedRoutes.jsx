import React, { useEffect, useContext } from "react";
import { Feelings } from "../pages/Feelings";
import { Feeling } from "./Feeling";
import { Message } from "./Message";
import { Send } from "./Send";
import { Resing } from "./Resing";
import { Dashboard } from "../pages/Dashboard";
import { Analytics } from "./Analytics";
import { Context } from "../context/UserContext";
import { Route, Routes, useNavigate } from "react-router-dom";

function ProtectedRoutes() {
  const { loggedIn } = useContext(Context);
  
  const navigate = useNavigate();

  useEffect(() => {
    if (!loggedIn) {
      // Si el usuario no ha iniciado sesión, redirigir a la página de inicio de sesión.
      navigate("/Login");
    }
  }, [loggedIn, navigate]);

  return (
    <Routes>
      <Route path="/Feelings" element={<Feelings />} />
      <Route path="/Feelings/:emotion" element={<Feeling />} />
      <Route path="/Feelings/:emotion/resing" element={<Resing />} />
      <Route path="/Feelings/:emotion/message" element={<Message />} />
      <Route path="/Feelings/:emotion/resing/message" element={<Message />} />
      <Route path="/Feelings/:emotion/send" element={<Send />} />
      <Route path="/Dashboard" element={<Dashboard />} />
      <Route path="/Dashboard/Analytics" element={<Analytics />} />
    </Routes>
  );
}

export { ProtectedRoutes };
