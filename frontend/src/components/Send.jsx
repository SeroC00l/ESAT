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

const ONE_DAY_IN_MS = 86400000; // 24 * 60 * 60 * 1000

function Send() {
  const { feelingData, jwt, resing, setLoggedIn } = useContext(Context);
  const sentimentSentToday = localStorage.getItem("sentimentSentToday");
  const urlAirtech = "https://airtechone.com";

  useEffect(() => {
    if (!sentimentSentToday) {
      // Si no hay información en el almacenamiento local, el usuario aún no ha enviado un sentimiento hoy
      sendFeelingData(feelingData, jwt);
      localStorage.setItem("sentimentSentToday", Date.now());
      setTimeout(() => {
        window.location = urlAirtech;
        setLoggedIn(false);
      }, 5000);
    } else {
      // Si hay información en el almacenamiento local, verifique si el usuario ya envió un sentimiento hoy
      const lastSentDate = new Date(Number(sentimentSentToday));
      const currentDate = new Date();
      if (currentDate - lastSentDate >= ONE_DAY_IN_MS) {
        // Si el usuario no ha enviado un sentimiento hoy, permita que envíe otro y actualice la fecha del último envío
        sendFeelingData(feelingData, jwt);
        localStorage.setItem("sentimentSentToday", Date.now());
      } else {
        // Si el usuario ya envió un sentimiento hoy, no permita que envíe otro y vuelva a la página de inicio de sesión
        alert("You can only submit one response per day.");
          window.location = urlAirtech;
          setLoggedIn(false);
      }
    }
  }, [feelingData, jwt, resing, sentimentSentToday, setLoggedIn]);

  return (
    <>
      <Header />
      <Tittle>Thanks for your Feedback 😊</Tittle>
    </>
  );
}

export { Send };
