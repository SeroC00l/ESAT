import React, { useState, useEffect } from "react";
import { Header } from "../components/Header";
import styled from "styled-components";
import axios from "axios";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

const Title = styled.div`
  margin-top: 20px;
  font-family: "Courier New", Courier, monospace;
  font-size: 50px;
  font-weight: bold;
  padding-bottom: 40px;
  text-align: center;
`;

const Dona = styled.div`
  height: 400px;
  width: 400px;
`;

function Analytics() {
  const [feelings, setFeelings] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/feelings")
      .then((res) => setFeelings(res.data))
      .catch((err) => console.error(err));
  }, []);

  ChartJS.register(ArcElement, Tooltip, Legend);

  const emotions = feelings.reduce((acc, val) => {
    acc[val.emotion] = (acc[val.emotion] || 0) + 1;
    return acc;
  }, {});

  const total = Object.values(emotions).reduce((acc, val) => acc + val, 0);
  const percentages = Object.keys(emotions).reduce((acc, key) => {
    acc[key] = Math.round((emotions[key] / total) * 100);
    return acc;
  }, {});

  const data = {
    labels: Object.keys(percentages),
    datasets: [
      {
        data: Object.values(percentages),
        backgroundColor: [
          "#ff0000",
          "#a0ee3a",
          "#ff7b1d",
          "#fffb00",
          "#07a90f",
        ],
        hoverBackgroundColor: [
          "#ff000080",
          "#a0ee3a80",
          "#ff7b1d80",
          "#fffb0080",
          "#07a90f80",
        ],
      },
    ],
  };

  return (
    <>
      <Header />
      <Title>Analytics</Title>
      <Dona>
        <Doughnut data={data}></Doughnut>
      </Dona>
    </>
  );
}

export { Analytics };
