import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import { Header } from "./Header";
import { Context } from "../context/UserContext";
import { sendFeelingData } from "../hooks/useFeelings";

const ONE_DAY_IN_MS = 43200000; // 12 * 60 * 60 * 1000
                  //  86400000;  24 * 60 * 60 * 1000
// This component thanks the user for the feedback and send the data to the backend 
function Send() {
  // getting the data from the context
  const { feelingData, jwt, resing, setLoggedIn } = useContext(Context);
  // getting the data from the local storage
  const sentimentSentToday = localStorage.getItem("sentimentSentToday");
  // url for redirect the user to the airtech page 
  const urlAirtech = "https://airtechcommunications.bitrix24.es/stream/";
  // sending the data to the backend
  useEffect(() => {
    if (!sentimentSentToday) {
      // If there is no information in local storage, send the data and update the last sent date
      sendFeelingData(feelingData, jwt);
      localStorage.setItem("sentimentSentToday", Date.now());
      // Redirect the user to the airtech page after 3 seconds
      setTimeout(() => {
        setLoggedIn(false);
        window.location = urlAirtech;
      }, 3000);
    } else {
      // If there is information in local storage, check if the user has already sent a feeling today
      const lastSentDate = new Date(Number(sentimentSentToday));
      const currentDate = new Date();
      if (currentDate - lastSentDate >= ONE_DAY_IN_MS) {
        // If the user has not sent a feeling today, send the data and update the last sent date
        sendFeelingData(feelingData, jwt);
        localStorage.setItem("sentimentSentToday", Date.now());
      } else {
        // If the user has already sent a feeling today, alert the user and redirect to the airtech page
        alert("You can only submit one response per day.");
          window.location = urlAirtech;
          setLoggedIn(false);
      }
    }
  }, [feelingData, jwt, resing, sentimentSentToday, setLoggedIn]);
  // show the thanks message
  return (
    <>
      <Header />
      <Tittle>Thanks for your Feedback 😊</Tittle>
    </>
  );
}
// styles
const Tittle = styled.div`
  margin-top: 50px;
  font-family: "Courier New", Courier, monospace;
  font-size: 50px;
  font-weight: bold;
  padding-bottom: 40px;
  text-align: center;
`;
export { Send };
