import { StatusBar } from "expo-status-bar";
import React from "react";

import { Container, Text } from "./styles";

import  Header  from "../../components/Header";

const Scan: React.FC = () => {
  return (
    <Container>
      <Header title="Scan" />
      <Text>Scan!</Text>
      <StatusBar style="light" />
    </Container>
  );
};

export default Scan;
