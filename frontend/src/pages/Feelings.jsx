import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Header } from "../components/Header";
import Happy from "../img/Happy.png";
import Angry from "../img/Angry.png";
import Neutral from "../img/Neutral.png";
import Worried from "../img/Worried.png";
import Sad from "../img/Sad.png";

const Emoji = styled.img`
  height: 100px;
`;

const FeelingsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: auto;
  position: absolute;
  transform: translateY(-20%);
  top: 50%;
  left: 25%;
  gap: 40px;

  .linkstyle {
    text-decoration: none;
  }
`;

const FeelingStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  span {
    font-family: "Courier New", Courier, monospace;
    font-weight: bold;
    font-size: 20px;
    color: black;
  }
`;

const Tittle = styled.div`
  margin-top: 50px;
  position: absolute;
  width: 1000px;
  left: 57%;
  transform: translateX(-50%);

  h2 {
    font-family: "Courier New", Courier, monospace;
    font-size: 50px;
    font-weight: bold;
  }
`;

function Feelings() {
  return (
    <>
      <Header />
      <Tittle>
        <h2>How Are You Feeling Today?</h2>
      </Tittle>
      <FeelingsContainer>
        <Link to="/Feelings/Happy" className="linkstyle">
          <FeelingStyle>
            <Emoji src={Happy} />
            <span>Happy</span>
          </FeelingStyle>
        </Link>
        <Link to="/Feelings/Angry" className="linkstyle">
          <FeelingStyle>
            <Emoji src={Angry} />
            <span>Angry</span>
          </FeelingStyle>
        </Link>
        <Link to="/Feelings/Neutral" className="linkstyle">
          <FeelingStyle>
            <Emoji src={Neutral} />
            <span>Neutral</span>
          </FeelingStyle>
        </Link>
        <Link to="/Feelings/Worried" className="linkstyle">
          <FeelingStyle>
            <Emoji src={Worried} />
            <span>Worried</span>
          </FeelingStyle>
        </Link>
        <Link to="/Feelings/Sad" className="linkstyle">
          <FeelingStyle>
            <Emoji src={Sad} />
            <span>Sad</span>
          </FeelingStyle>
        </Link>
      </FeelingsContainer>
    </>
  );
}

export { Feelings };
