import React from "react";

import { Container, Graph } from "./styles";

import { Pie } from "react-chartjs-2";
import { ChartOptions } from "chart.js";

interface Props {
  title: string;
  values: any[];
  labels: any[];
  backgroundColors: any[];
  hoverBackgroundColors: any[];
}

const Card: React.FC<Props> = ({
  title,
  values,
  labels,
  backgroundColors,
  hoverBackgroundColors,
}) => {
  const data = {
    labels: labels,
    datasets: [
      {
        data: values,
        backgroundColor: backgroundColors,
        hoverBackgroundColor: hoverBackgroundColors,
      },
    ],
  };

  let options: ChartOptions = {
    legend: {
      position: "bottom",
    },
  };

  return (
    <Container>
      <strong>{title}</strong>
      <Graph>
        <Pie data={data} options={options} />
      </Graph>
    </Container>
  );
};

export default Card;
