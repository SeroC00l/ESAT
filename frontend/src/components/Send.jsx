import React from "react";
import styled from "styled-components";
import { Header } from "./Header";

const Tittle = styled.div`      
  margin-top: 50px;
  font-family: "Courier New", Courier, monospace;
  font-size: 50px;
  font-weight: bold;
  padding-bottom: 40px;
  position: absolute;
  left: 25%;
`;

function Send() {
  return (
    <>
      <Header />
      <Tittle>Thanks for your response 😊</Tittle>
    </>
  );
}

export { Send };
