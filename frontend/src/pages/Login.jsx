import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Header } from "../components/Header";
import styled, { keyframes } from "styled-components";

const gradient = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  transform: translateY(-20%);
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;

  .LoginButton {
    text-decoration: none;
    margin-top: 20px;
    padding: 10px 20px;
    background: linear-gradient(-45deg, #00bfff, #0080ff, #5cdced, #c246ef);
    background-size: 400% 400%;
    animation: ${gradient} 15s ease infinite;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
`;

const Label = styled.label`
  margin-top: 10px;
`;

const Input = styled.input`
  margin-top: 5px;
  padding: 10px;
  border-radius: 5px;
  border: none;
  background-color: #f2f2f2;
  width: 250px;
`;

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    console.log("Username:", username);
    console.log("Password:", password);
  };

  return (
    <>
      <Header />
      <LoginContainer>
        <h2>Login</h2>
        <LoginForm onSubmit={handleSubmit}>
          <Label>Username</Label>
          <Input type="text" value={username} onChange={handleUsernameChange} />
          <Label>Password</Label>
          <Input
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
          <Link to="/Feelings" className="LoginButton">
            Login
          </Link>
        </LoginForm>
      </LoginContainer>
    </>
  );
}

export { Login };
