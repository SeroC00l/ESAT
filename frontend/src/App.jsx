import React from "react";
import { Login } from "./pages/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UserContextProvider, Context } from "./context/UserContext";
import { ProtectedRoutes } from "./components/ProtectedRoutes";
function App() {
  return (
    <UserContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/Login" element={<Login />} />
          <Route path="/*" element={<ProtectedRoutes/>} />
        </Routes>
      </BrowserRouter>
    </UserContextProvider>
  );
}
export default App;
