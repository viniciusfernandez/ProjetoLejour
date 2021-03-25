import React from "react";

import { Container } from "./styles";

import Navbar from "../../components/Navbar";
import Main from "../../components/Main";
import Footer from "../../components/Footer";

const Dashboard: React.FC = () => {
  return (
    <Container>
      <Navbar />
      <Main />
      <Footer />
    </Container>
  );
};

export default Dashboard;
