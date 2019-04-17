import React, { Component } from "react";
import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Button,
  Icon,
  Title
} from "native-base";
import MenuButton from "./MenuButton";

export default class HeaderIconExample extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <MenuButton />
          </Left>
          <Body>
            <Title>Header</Title>
          </Body>
          <Right>
            <MenuButton />
          </Right>
        </Header>
      </Container>
    );
  }
}
