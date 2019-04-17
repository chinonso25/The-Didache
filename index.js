// Import Libraries to create Component
import React from "react";
import { Text, AppRegistry, View } from "react-native";
import DidacheText from "./src/components/DidacheText";
import DrawerNavigator from "./src/navigator/DrawerNavigator";
import MenuButton from "./src/components/MenuButton";

//Create Component
const App = () => {
  return <DrawerNavigator />;
};

//Render Component
AppRegistry.registerComponent("TheDidache", () => App);
