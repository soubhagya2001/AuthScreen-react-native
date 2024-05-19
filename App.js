import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import HomeStackNavigator
  from "./src/navigation/Navigator";
export default function App() {
  return (
    <NavigationContainer>
      <HomeStackNavigator />
    </NavigationContainer>
  );
};