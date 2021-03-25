import React from "react";

import { Container, Header, Data } from "./styles";

import Card from "../Card";

const Main: React.FC = () => {
  return (
    <Container>
      <Header>
        <h1>Dashboard</h1>
      </Header>

      <Data>
        <Card
          title="Usuários por categoria"
          values={[300, 50]}
          labels={["Ativos", "Inativos"]}
          backgroundColors={["#FF6384", "#36A2EB"]}
          hoverBackgroundColors={["#FF6384", "#36A2EB"]}
        />
        <Card
          title="Fornecedores cadastrados"
          values={[250, 150]}
          labels={["Ativos", "Inativos"]}
          backgroundColors={["#FF6384", "#36A2EB"]}
          hoverBackgroundColors={["#FF6384", "#36A2EB"]}
        />
        <Card
          title="Negócios fechados por estado"
          values={[125, 50, 21]}
          labels={["São Paulo", "Rio de Janeiro", "Minas Gerais"]}
          backgroundColors={["#FF6384", "#36A2EB", "#FFCD56"]}
          hoverBackgroundColors={["#FF6384", "#36A2EB", "#FFCD56"]}
        />
      </Data>
    </Container>
  );
};

export default Main;
