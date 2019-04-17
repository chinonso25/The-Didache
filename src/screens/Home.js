// Import Libraries to create Component
import React, { Component } from "react";
import { AppRegistry, View } from "react-native";
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Body,
  Text
} from "native-base";

import DidacheText from "../components/DidacheText";
import DrawerNavigator from "../navigator/DrawerNavigator";
import MenuButton from "../components/MenuButton";

//Create Component
export default class Home extends Component {
  static navigationOptions = {
    title: "Home"
  };
  render() {
    return (
      <Container>
        <MenuButton navigation={this.props.navigation} />
        <Content>
          <Card>
            <CardItem header bordered>
              <Text>Welcome</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text>
                  The Didache is also called the "Teaching of the Twelve
                  Apostles." It was possibly written around 65 - 80 A.D. and is
                  supposed to be what the twelve apostles taught to the Gentiles
                  concerning life and death, church order, fasting, baptism,
                  prayer, etc. There is debate as to its authenticity.{"\n"}
                  {"\n"}
                  This Application was created to help users read and study the
                  text.{"\n"}
                  {"\n"}To use the Application, swipe from the left side of the
                  screen to view the list of Chapters.
                </Text>
              </Body>
            </CardItem>
            <CardItem footer>
              <Text>Powered by Ude-Net Technologies</Text>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}
