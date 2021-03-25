import React from "react";

import { Container, ProfileInfo } from "./styles";

import lejourAbbrLogo from "../../assets/lejour-abbr-logo.png";

const navbar: React.FC = () => {
  return (
    <>
      <Container>
        <img src={lejourAbbrLogo}/>
        <ProfileInfo>
          <strong>Oi, Vinicius! :)</strong>
          <p>Vinicius Fernandes</p>
        </ProfileInfo>
      </Container>
    </>
  );
};

export default navbar;
