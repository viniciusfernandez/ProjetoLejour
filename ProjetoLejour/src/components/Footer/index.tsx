import React from "react";

import { Container } from "./styles";

import lejourAbbrLogo from "../../assets/lejour-abbr-logo-fundo-escuro.png";

const Footer: React.FC = () => {
  return (
    <Container>
      <img src={lejourAbbrLogo} />
      <p>Lejour - FIAP Challenge</p>
    </Container>
  );
};

export default Footer;
