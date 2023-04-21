import React, { useState, useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Header } from "../components/Header";
import styled, { keyframes } from "styled-components";
import { Context } from "../context/UserContext";
import { useUser } from "../hooks/useUser";

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
  margin-top: 50px;
  font-family: "Courier New", Courier, monospace;
  font-size: 50px;
  font-weight: bold;
  padding-bottom: 40px;
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

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { login } = useUser();
  const { error, showErrorModal, setError, setShowErrorModal, loggedIn } =
    useContext(Context);

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

  useEffect(() => {
    if (loggedIn) {
      navigate("/Feelings");
    }
  }, [loggedIn, navigate]);

  const handleCloseErrorModal = () => {
    setShowErrorModal(false);
    setError(null);
  };

  return (
    <div className="login">
      <Header />
      <LoginContainer>
        <Tittle>ESAT Platform</Tittle>
        <h2>Login</h2>
        <LoginForm>
          <Label>Email</Label>
          <Input type="text" value={email} onChange={handleUsernameChange} />
          <Label>Password</Label>
          <Input
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
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

export { Login };
