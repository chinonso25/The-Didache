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

export default class Chapterw extends Component {
  static navigationOptions = {
    title: "Chapterw"
  };

  render() {
    return (
      <Container>
        <MenuButton navigation={this.props.navigation} />
        <Content>
          <Card>
            <CardItem header bordered>
              <Text>Chapter 2</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text selectable={true}>
                  1. But the second commandment of the teaching is this:{"\n"}
                  {"\n"}
                  2. "Thou shalt do no murder; thou shalt not commit adultery";
                  thou shalt not commit sodomy; thou shalt not commit
                  fornication; thou shalt not steal; thou shalt not use magic;
                  thou shalt not use philtres; thou shalt not procure abortion,
                  nor commit infanticide; "thou shalt not covet thy neighbor's
                  goods";{"\n"}
                  {"\n"}
                  3. Thou shalt not commit perjury, "thou shall not bear false
                  witness"; thou shalt not speak evil; thou shalt not bear
                  malice.{"\n"}
                  {"\n"}
                  4. Thou shalt not be double-minded nor double-tongued, for to
                  be double-tongued is the snare of death.{"\n"}
                  {"\n"}
                  5. Thy speech shall not be false nor vain, but completed in
                  action.{"\n"}
                  {"\n"}
                  6. Thou shalt not be covetous nor extortionate, nor a
                  hypocrite, nor malignant, nor proud, thou shalt make no evil
                  plan against thy neighbor.{"\n"}
                  {"\n"}
                  7. Thou shalt hate no man; but some thou shalt reprove, and
                  for some shalt thou pray, and some thou shalt love more then
                  thine own life.
                </Text>
              </Body>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}
