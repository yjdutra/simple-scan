import { StatusBar } from "expo-status-bar";
import React from "react";

import { Container, Text } from "./styles";

const AppForm: React.FC = () => {
  return (
    <Container>
      <Text>Form!</Text>
      <StatusBar style="light" />
    </Container>
  );
};

export default AppForm;
