import React from "react";
import styled, { keyframes } from "styled-components";
import logoAirtech from "../img/airtech.png";
import { Link } from "react-router-dom";
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

const HeaderContainer = styled.div`
  height: 120px;
  width: 100vw;
  background: linear-gradient(-45deg, #00bfff, #0080ff, #5cdced, #c246ef);
  background-size: 400% 400%;
  animation: ${gradient} 15s ease infinite;
  display: flex;
  align-items: center;
  justify-content: center;

  & h2 {
    color: azure;
  }

  & a {
    display: flex;
    justify-content: flex-end;
    text-decoration: none;
    color: #fff;
    font-size: 20px;
  }
`;

const Logo = styled.img`
  height: 100px;
  user-select: none;
`;

const Container = styled.div`
  display: flex;
  position: absolute;
  right: 20px;
  height: 35px;
`;

function Header() {
  const { isLogged, logout } = useUser();
  
  const handleClick = (e) => {
    e.preventDefault();
    logout();
  };

  return (
    <HeaderContainer>
      <Logo src={logoAirtech} />
      <h2></h2>
      <Container>
        {isLogged ? (
          <Link to="/Login" onClick={handleClick}>
            Log out
          </Link>
        ) : (
          <Link to="/Login">Login</Link>
        )}
      </Container>
    </HeaderContainer>
  );
}

export { Header };
