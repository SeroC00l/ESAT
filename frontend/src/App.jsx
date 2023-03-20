import React from "react";
import { Login } from "./pages/Login";
import { Feelings } from "./pages/Feelings";
import { Feeling } from "./components/Feeling";
import { Message } from "./components/Message";
import { Send } from "./components/Send";
import { Resing } from "./components/Resing";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { UserContextProvider } from "./context/UserContext";

function App() {
  return (
    <UserContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Feelings" element={<Feelings />} />
          <Route path="/Feelings/:emotion" element={<Feeling />} />
          <Route path="/Feelings/:emotion/resing" element={<Resing />} />
          <Route path="/Feelings/:emotion/message" element={<Message />} />
          <Route path="/Feelings/:emotion/resing/message" element={<Message />} />  
          <Route path="/Feelings/:emotion/send" element={<Send />} />
        </Routes>
      </BrowserRouter>
    </UserContextProvider>
  );
}

export default App;
