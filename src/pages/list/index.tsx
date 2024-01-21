import { StatusBar } from "expo-status-bar";
import React from "react";

import { Container } from "./styles";

import Header from "../../components/Header";
import Contact from "../../components/contact";
import TableList from "../../components/tableList";

export default function List() {
  return (
    <Container>
      <StatusBar style="light" />
      <Header title="Contato" />
      
      <TableList
        data={[
          ["Menu do Restaurante", "https://menu.example.com"],
          ["Perfil no Instagram", "https://instagram.com/example"],
        ]}
      />

      <Contact />
    </Container>
  );
}
