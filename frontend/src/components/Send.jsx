import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import { Header } from "./Header";
import { Context } from "../context/UserContext";
import { sendFeelingData } from "../hooks/useFeelings";

const Tittle = styled.div`
  margin-top: 50px;
  font-family: "Courier New", Courier, monospace;
  font-size: 50px;
  font-weight: bold;
  padding-bottom: 40px;
  text-align: center;
`;

function Send() {
  const { feelingData, jwt } = useContext(Context);

  console.log("Renderizando");

  useEffect(() => {
    sendFeelingData(feelingData, jwt);
  }, []);

  return (
    <>
      <Header />
      <Tittle>Thanks for your response 😊</Tittle>
    </>
  );
}

export { Send };
