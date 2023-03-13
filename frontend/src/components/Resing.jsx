import React from "react";
import styled, { keyframes } from "styled-components";
import { useParams, Link } from "react-router-dom";
import { Header } from "./Header";

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
  position: absolute;
  left: 22%;
`;

const Buttons = styled.div`
  display: flex;
  gap: 90px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  overflow: hidden;
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translateX(-50%);

  .ButtonStyle {
    width: 40px;
    text-decoration: none;
    text-align: center;
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

function Resing() {
  let emotion = useParams().emotion;
  return (
    <>
      <Header />
      <Tittle>Are you thinking on resigning?</Tittle>
      <Container>
        <Buttons>
          <Link className="ButtonStyle" to={`/Feelings/${emotion}/resing/why`}>
            Yes
          </Link>
          <Link className="ButtonStyle">Not</Link>
        </Buttons>
      </Container>
    </>
  );
}

export { Resing };
