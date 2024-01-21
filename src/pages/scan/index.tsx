import { StatusBar } from "expo-status-bar";
import React from "react";

import { Container, Text } from "./styles";

import  Header  from "../../components/Header";
import Cam from "../../components/Cam";
import { CamContainment, Containment } from "../list/styles";

const Scan: React.FC = () => {
  return (
    <Container>
      <Header title="Scan" />
      
      <Text>Scan!</Text>
      <Containment>
        <CamContainment> 
          <Cam/>
        </CamContainment>
      </Containment>
    </Container>
  );
};

export default Scan;
