import React from "react";

import { Container, ProfileInfo } from "./styles";

import lejourAbbrLogo from "../../assets/lejour-abbr-logo.png";

const navbar: React.FC = () => {
  return (
    <>
      <Container>
        <img src={lejourAbbrLogo}/>
        <ProfileInfo>
          <strong>Oi, Guilherme! :)</strong>
          <p>Guilherme e Marina</p>
        </ProfileInfo>
      </Container>
    </>
  );
};

export default navbar;
