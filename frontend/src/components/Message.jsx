import React, { useContext } from "react";
import styled, { keyframes } from "styled-components";
import { useParams, Link } from "react-router-dom";
import { Header } from "./Header";
import { Context } from "../context/UserContext";

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
  text-align: center;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  overflow: hidden;

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

const MessageStyle = styled.textarea`
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

  &:focus {
    outline: none;
    border-color: #0077ff;
    box-shadow: 0 0 0 2px rgba(0, 119, 255, 0.3);
  }
`;

function Message() {
  const emotion = useParams().emotion;

  const {
    jwt,
    inputValue,
    setInputValue,
    feelingData,
    setFeelingData,
    resing,
    jobRelated,
  } = useContext(Context);

  const handleInputValueChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSendClick = () => {
    setFeelingData((prevData) => ({
      ...prevData,
      emotion,
      resing,
      jobRelated,
      message: inputValue,
    }));
  };

  const title =
    jobRelated && resing
      ? "Why?"
      : jobRelated && !resing
      ? "What do you dislike about your job?"
      : `what makes you feel ${emotion}?`;

  return (
    <>
      <Header />
      <Tittle>{title}</Tittle>
      <Container>
      <MessageStyle value={inputValue} onChange={handleInputValueChange} />
      
        <Link
          className="ButtonStyle"
          onClick={handleSendClick}
          to={`/Feelings/${emotion}/send`}
        >
          send
        </Link>
      </Container>
    </>
  );
}

export { Message };
