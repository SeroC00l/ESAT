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
  left: 45%;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  overflow: hidden;
  position: absolute;
  top: 70%;
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

const Input = styled.textarea`
  height: 200px;
  width: 500px;
  padding: 10px;
  border-radius: 4px;
  border: 2px solid #6b6b6b;
  font-size: 16px;
  box-sizing: border-box;
  overflow-y: auto;
  resize: none;
  vertical-align: top;
  position: absolute;
  top: 40%;
  left: 33%;

  &:focus {
    outline: none;
    border-color: #0077ff;
    box-shadow: 0 0 0 2px rgba(0, 119, 255, 0.3);
  }
`;

function Why() {
  let emotion = useParams().emotion;

  return (
    <>
      <Header />
      <Tittle>Why?</Tittle>
      <Input type="text-box" />
      <Container>
        <Link className="ButtonStyle" to={`/Feelings/${emotion}/send`}>
          send
        </Link>
      </Container>
    </>
  );
}

export { Why };
