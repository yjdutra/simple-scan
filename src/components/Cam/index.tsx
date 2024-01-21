import { Camera, CameraType } from "expo-camera";
import React, { useState } from "react";
import {
  StyledContainer,
  StyledCamera,
  StyledButtonContainer,
  StyledButton,
  StyledText,
  CameraBorder,
  // CameraBorder,
} from "./styles"; // Ajuste o caminho se necessário
import { Button } from "react-native";

interface CamProps {}
const { useCameraPermissions } = Camera;
const Cam: React.FC<CamProps> = () => {
  const [type, setType] = useState<CameraType>(CameraType.back);
  const [permission, requestPermission] = useCameraPermissions();

  if (!permission) {
    // Camera permissions are still loading
    return <StyledContainer />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet
    return (
      <StyledContainer>
        <StyledText style={{ textAlign: "center" }}>
          We need your permission to show the camera
        </StyledText>
        <Button onPress={requestPermission} title="grant permission" />
      </StyledContainer>
    );
  }

  const toggleCameraType = () => {
    setType((current) =>
      current === CameraType.back ? CameraType.front : CameraType.back
    );
  };

  return (
    <StyledContainer>
        <Camera style={{ flex: 1}} type={type} />
        <StyledButtonContainer>
          <StyledButton onPress={toggleCameraType}>
            <StyledText>↻</StyledText>
          </StyledButton>
        </StyledButtonContainer>
    </StyledContainer>
  );
};

export default Cam;
