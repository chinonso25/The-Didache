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

export default class Chapter15 extends Component {
  static navigationOptions = {
    title: "Chapter15"
  };

  render() {
    return (
      <Container>
        <MenuButton navigation={this.props.navigation} />
        <Content>
          <Card>
            <CardItem header bordered>
              <Text>Chapter 15</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text>
                  1. Appoint therefore for yourselves bishops and deacons worthy
                  of the Lord, meek men, and not lovers of money, and truthful
                  and approved, for they also minister to you the ministry of
                  the prophets and teachers.
                  {"\n"}
                  {"\n"}2. Therefore do not despise them, for they are your
                  honourable men together with the prophets and teachers.
                  {"\n"}
                  {"\n"}3. And reprove one another not in wrath but in peace as
                  you find in the Gospel, and let none speak with any who has
                  done wrong to his neighbour, nor let him hear a word from you
                  until he repents.
                  {"\n"}
                  {"\n"}4. But your prayers and alms and all your acts perform
                  as ye find in the Gospel of our Lord.
                </Text>
              </Body>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}
