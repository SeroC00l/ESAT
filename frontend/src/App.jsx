import React from "react";
import { Login } from "./pages/Login";
import { Feeling } from "./pages/Feeling";
import { Angry } from "./components/Angry";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Feelings" element={<Feeling />} />
        <Route path="/Feelings/Angry" element={<Angry />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
