import React, { useEffect, useContext } from "react";
import { Feelings } from "../pages/Feelings";
import { Feeling } from "./Feeling";
import { Message } from "./Message";
import { Send } from "./Send";
import { Resing } from "./Resing";
import { Dashboard } from "../pages/Dashboard";
import { Context } from "../context/UserContext";
import { Route, Routes, useNavigate } from "react-router-dom";

// This component will protect the routes, the user will not be able to access to the protected routes if is not logged in 
function ProtectedRoutes() {
  // getting the logged in value from the context
  const { loggedIn } = useContext(Context);
  const navigate = useNavigate();
  // if the user is not logged in, redirect to the login page
  useEffect(() => {
    if (!loggedIn) {
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
    </Routes>
  );
}
export { ProtectedRoutes };
