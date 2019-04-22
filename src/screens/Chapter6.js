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

export default class Chapter6 extends Component {
  static navigationOptions = {
    title: "Chapter6"
  };

  render() {
    return (
      <Container>
        <MenuButton navigation={this.props.navigation} />
        <Content>
          <Card>
            <CardItem header bordered>
              <Text>Chapter 6</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text selectable={true}>
                  1. See "that no one make thee to err" from this Way of the
                  teaching, for he teaches thee without God.{"\n"}
                  {"\n"}
                  2. For if thou canst bear the whole yoke of the Lord, thou
                  wilt be perfect, but if thou canst not, do what thou canst.
                  {"\n"}
                  {"\n"}
                  3. And concerning food, bear what thou canst, but keep
                  strictly from that which is offered to idols, for it is the
                  worship of dead gods.
                </Text>
              </Body>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}
