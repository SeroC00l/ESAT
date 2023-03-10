import React from "react";
import styled, { keyframes } from "styled-components";
import logoAirtech from "../img/airtech.png";

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
`;

const Logo = styled.img`
  height: 100px;
`;

function Header() {
  return (
    <HeaderContainer>
      <Logo src={logoAirtech} />
      <h2></h2>
    </HeaderContainer>
  );
}

export { Header };
