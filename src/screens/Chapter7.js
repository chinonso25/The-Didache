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

export default class Chapter7 extends Component {
  static navigationOptions = {
    title: "Chapter7"
  };

  render() {
    return (
      <Container>
        <MenuButton navigation={this.props.navigation} />
        <Content>
          <Card>
            <CardItem header bordered>
              <Text>Chapter 7</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text selectable={true}>
                  1. Concerning baptism, baptise thus: Having first rehearsed
                  all these things, "baptise, in the Name of the Father and of
                  the Son and of the Holy Ghost," in running water;{"\n"}
                  {"\n"}
                  2. But if thou hast no running water, baptise in other water,
                  and if thou canst not in cold, then in warm.{"\n"}
                  {"\n"}
                  3. But if thou hast neither, pour water three times on the
                  head "in the Name of the Father, Son and Holy Ghost."{"\n"}
                  {"\n"}
                  4. And before the baptism let the baptiser and him who is to
                  be baptised fast, and any others who are able. And thou shalt
                  bid him who is to be baptised to fast one or two days before.
                </Text>
              </Body>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}
