import { StatusBar } from 'expo-status-bar';

import AppTab from './src/components/appTab';

export default function App() {
  return (
    <>
      <AppTab/>
      <StatusBar style="auto" />
    </>
  );
}