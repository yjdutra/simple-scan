import React from "react";

import Icon from 'react-native-vector-icons/FontAwesome';

import { IconButton, Containment, Label } from "./styles";

const openURL = (url: string) => {
  // Implemente a lógica para abrir o URL
};

export default function Contact() {
  return (
      <Containment>
        <IconButton
          onPress={() => openURL("https://www.linkedin.com/in/yourusername")}
        >
          <Icon name="linkedin" size={30} color="#0077B5" />
          <Label>LinkedIn</Label>
        </IconButton>
        <IconButton onPress={() => openURL("https://github.com/yourusername")}>
          <Icon name="github" size={30} color="#000" />
          <Label>GitHub</Label>
        </IconButton>
        <IconButton
          onPress={() => openURL("https://www.instagram.com/yourusername")}
        >
          <Icon name="instagram" size={30} color="#C13584" />
          <Label>Instagram</Label>
        </IconButton>
        <IconButton onPress={() => openURL("mailto:your.email@example.com")}>
          <Icon name="envelope" size={30} color="#000" />
          <Label>Email</Label>
        </IconButton>
        <IconButton
          onPress={() => openURL("https://www.buymeacoffee.com/yourusername")}
        >
          <Icon name="coffee" size={30} color="#FFDD00" />
          <Label>Buy Me a Coffee</Label>
        </IconButton>
      </Containment>
  );
}
