// styles.tsx
import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';


export const StyledContainer = styled.View`
  flex: 1;
  width: auto;
  height: auto;
  justify-content: center;
`;

export const CameraBorder = styled.View`
  `;

export const StyledCamera = styled.View`
  flex: 1;
`;

export const StyledButtonContainer = styled.View`
  flex: 1;
  /* flex-direction: row; */
  background-color: transparent;
  /* margin: 64px; */
`;

export const StyledButton = styled.TouchableOpacity`
  flex: 1;
  align-self: flex-end;
  align-items: center;
`;

export const StyledText = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: white;
`;