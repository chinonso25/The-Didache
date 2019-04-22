import React, { Component } from "react";
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Body,
  Text
} from "native-base";
import MenuButton from "../components/MenuButton";

export default class Chapter12 extends Component {
  static navigationOptions = {
    title: "Chapter12"
  };

  render() {
    return (
      <Container>
        <MenuButton navigation={this.props.navigation} />
        <Content>
          <Card>
            <CardItem header bordered>
              <Text>Chapter 12</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text selectable={true}>
                  1. Let everyone who "comes in the Name of the Lord" be
                  received; but when you have tested him you shall know him, for
                  you shall have understanding of true and false.
                  {"\n"}
                  {"\n"}
                  2. If he who comes is a traveller, help him as much as you
                  can, but he shall not remain with you more than two days, or,
                  if need be, three.
                  {"\n"}
                  {"\n"}
                  3. And if he wishes to settle among you and has a craft, let
                  him work for his bread.
                  {"\n"}
                  {"\n"}
                  4. But if he has no craft provide for him according to your
                  understanding, so that no man shall live among you in idleness
                  because he is a Christian.
                  {"\n"}
                  {"\n"}
                  5. But if he will not do so, he is making traffic of Christ;
                  beware of such.
                </Text>
              </Body>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}
