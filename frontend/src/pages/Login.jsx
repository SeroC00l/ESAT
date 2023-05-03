import React, { useState, useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Header } from "../components/Header";
import styled, { keyframes } from "styled-components";
import { Context } from "../context/UserContext";
import { useUser } from "../hooks/useUser";

function Login() {
  // state for login form
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  // getting login function from useUser hook
  const { login } = useUser();
  // getting error and showErrorModal from context
  const { error, showErrorModal, setError, setShowErrorModal, loggedIn } =
    useContext(Context);
  // handlers for login form
  const handleUsernameChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password);
  };
  // if user is logged in, redirect to Feelings page
  useEffect(() => {
    if (loggedIn) {
      navigate("/Feelings");
    }
  }, [loggedIn, navigate]);
  // if error, show modal
  const handleCloseErrorModal = () => {
    setShowErrorModal(false);
    setError(null);
  };
  function handleKeyPress(e) {
    if (e.charCode === 13) {
      handleSubmit(e);
    }
  }
  return (
    <div className="login">
      <Header />
      <Tittle>ESAT Platform</Tittle>
      <LoginContainer>
        <h2>Login</h2>
        <LoginForm>
          <Label>Email</Label>
          <Input type="text" value={email} onChange={handleUsernameChange} />
          <Label>Password</Label>
          <Input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            onKeyPress={handleKeyPress}
          />
          <p className="forgot-password">Password Reset</p>
          <Link onClick={handleSubmit}>Login</Link>
        </LoginForm>
      </LoginContainer>
      {error && showErrorModal && (
        <Modal onClick={handleCloseErrorModal}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <p>{error}</p>
            <button className="closeModal" onClick={handleCloseErrorModal}>
              X
            </button>
          </ModalContent>
        </Modal>
      )}
    </div>
  );
}

// STYLED COMPONENTS

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

const Tittle = styled.div`
  font-family: "Courier New", Courier, monospace;
  font-size: 50px;
  font-weight: bold;
  margin: 50px auto;
  width: max-content;
`;

const LoginContainer = styled.div`
  user-select: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: max-content;
  margin: 0 auto;
  padding: 30px;
  border: 1px solid #3a3434;
  border-radius: 50px;
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  a {
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
  .forgot-password {
    margin-top: 10px;
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
  box-shadow: 5px #dd0f0f;
  background-color: #f2f2f2;
  width: 250px;
`;

const Modal = styled.div`
  overflow: hidden;
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 200px;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  :hover {
    outline: 2px solid #ff000070;
    border-radius: 5px;
  }
`;

const ModalContent = styled.div`
  background-color: #d2838370;
  padding: 15px;
  width: 200px;
  border-radius: 5px;
  user-select: none;
  overflow: hidden;

  .closeModal {
    position: absolute;
    top: 7px;
    right: 10px;
    color: #333;
    height: 35px;
    width: 35px;
    border: none;
    text-align: center;
    overflow: hidden;
    background-color: #ec5b5b60;
    border-radius: 50%;
    padding: 10px;
    box-shadow: inset 2px 2px 10px rgba(186, 41, 41, 0.5);
    cursor: pointer;
    color: rgba(186, 41, 41);
    font-weight: bold;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  }
`;

export { Login };
