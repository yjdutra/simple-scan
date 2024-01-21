import { StatusBar } from 'expo-status-bar';
import React from 'react';

import { Container, Text } from "./styles";

export default function AppList() {
  return (
    <Container>
      <Text>List!</Text>
      <StatusBar style="light" />
    </Container>
  );
}
