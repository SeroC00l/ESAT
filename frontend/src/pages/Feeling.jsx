import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Header } from "../components/Header";
import Happy from "../img/Happy.png";
import Angry from "../img/Angry.png";
import Neutral from "../img/Neutral.png";
import Worried from "../img/Worried.png";
import Sad from "../img/Sad.png";

const Emoji = styled.img``;

const Feelings = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  transform: translateY(-20%);
  gap: 40px;
`;

const FeelingStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Tittle = styled.div`
  margin-top: 50px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);

  h2 {
    font-family: "Courier New", Courier, monospace;
    font-size: 50px;
    font-weight: bold;
  }
`;

function Feeling() {
  return (
    <>
      <Header />
      <Tittle>
        <h2>How Are You Feeling Today?</h2>
      </Tittle>
      <Feelings>
        <FeelingStyle>
          <Emoji src={Happy} />
          <h3>Happy</h3>
        </FeelingStyle>
        <FeelingStyle>
          <Emoji src={Angry} />
          <Link to="/Feelings/Angry">Angry</Link>
        </FeelingStyle>
        <FeelingStyle>
          <Emoji src={Worried} />
          <h3>Worried</h3>
        </FeelingStyle>
        <FeelingStyle>
          <Emoji src={Neutral} />
          <h3>Neutral</h3>
        </FeelingStyle>
        <FeelingStyle>
          <Emoji src={Sad} />
          <h3>Sad</h3>
        </FeelingStyle>
      </Feelings>
    </>
  );
}

export { Feeling };
