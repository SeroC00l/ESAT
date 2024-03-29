import React, { useContext } from "react";
import styled, { keyframes } from "styled-components";
import { useParams, Link } from "react-router-dom";
import { Header } from "./Header";
import { Context } from "../context/UserContext";

// This component will be render if the user is having this moood bacause of the job and ask if the user is thinking on resing
function Resing() {
  // getting the emotion from the url
  const emotion = useParams().emotion;
  // getting the data from the context
  const { setFeelingData, resing, setResing } =
    useContext(Context);
  // function for save the data in the context
  const handleSendClick = () => {
    setFeelingData((prevData) => ({
      ...prevData,
      resing,
    }));
  };
  return (
    <>
      <Header />
      <Tittle>Are you thinking on resigning?</Tittle>
      <Container>
        <Buttons>
          <Link
            className="ButtonStyle"
            to={`/Feelings/${emotion}/resing/message`}
            onClick={() => {
              handleSendClick();
              setResing(true);
            }}
          >
            Yes
          </Link>
          <Link
            to={`/Feelings/${emotion}/resing/message`}
            className="ButtonStyle"
            onClick={() => {
              handleSendClick();
              setResing(false);
            }}
          >
            No
          </Link>
        </Buttons>
      </Container>
    </>
  );
}
// styles
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
  padding-bottom: 60px;
  text-align: center;
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
export { Resing };
