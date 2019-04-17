import React from "react";
import { Platform, Dimensions } from "react-native";
import { createDrawerNavigator, createAppContainer } from "react-navigation";

import Home from "../screens/Home";
import Chapter1 from "../screens/Chapter1";
import Chapter2 from "../screens/Chapter2";
import Chapter3 from "../screens/Chapter3";
import Chapter4 from "../screens/Chapter4";
import Chapter5 from "../screens/Chapter5";
import Chapter6 from "../screens/Chapter6";
import Chapter7 from "../screens/Chapter7";
import Chapter8 from "../screens/Chapter8";
import Chapter9 from "../screens/Chapter9";
import Chapter10 from "../screens/Chapter10";
import Chapter11 from "../screens/Chapter11";
import Chapter12 from "../screens/Chapter12";
import Chapter13 from "../screens/Chapter13";
import Chapter14 from "../screens/Chapter14";
import Chapter15 from "../screens/Chapter15";
import Chapter16 from "../screens/Chapter16";

import MenuDrawer from "../components/MenuDrawer";

const WIDTH = Dimensions.get("window").width;
const DrawerConfig = {
  drawerWidth: WIDTH * 0.83,
  contentComponent: ({ navigation }) => {
    return <MenuDrawer navigation={navigation} />;
  }
};

const DrawerNavigator = createDrawerNavigator(
  {
    Home: {
      screen: Home
    },
    Chapter1: {
      screen: Chapter1
    },
    Chapter2: {
      screen: Chapter2
    },
    Chapter3: {
      screen: Chapter3
    },
    Chapter4: {
      screen: Chapter4
    },
    Chapter5: {
      screen: Chapter5
    },
    Chapter6: {
      screen: Chapter6
    },
    Chapter7: {
      screen: Chapter7
    },
    Chapter8: {
      screen: Chapter8
    },
    Chapter9: {
      screen: Chapter9
    },
    Chapter10: {
      screen: Chapter10
    },
    Chapter11: {
      screen: Chapter11
    },
    Chapter12: {
      screen: Chapter12
    },
    Chapter13: {
      screen: Chapter13
    },
    Chapter14: {
      screen: Chapter14
    },
    Chapter15: {
      screen: Chapter15
    },
    Chapter16: {
      screen: Chapter16
    }
  },
  DrawerConfig
);

export default createAppContainer(DrawerNavigator);
