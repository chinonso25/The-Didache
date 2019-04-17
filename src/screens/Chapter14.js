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

export default class Chapter14 extends Component {
  static navigationOptions = {
    title: "Chapter14"
  };

  render() {
    return (
      <Container>
        <MenuButton navigation={this.props.navigation} />
        <Content>
          <Card>
            <CardItem header bordered>
              <Text>Chapter 14</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text>
                  1. On the Lord's Day of the Lord come together, break bread
                  and hold Eucharist, after confessing your transgressions that
                  your offering may be pure;
                  {"\n"}
                  {"\n"}2. But let none who has a quarrel with his fellow join
                  in your meeting until they be reconciled, that your sacrifice
                  be not defiled.
                  {"\n"}
                  {"\n"}3. For this is that which was spoken by the Lord, "In
                  every place and time offer me a pure sacrifice, for I am a
                  great king," saith the Lord, "and my name is wonderful among
                  the heathen."
                </Text>
              </Body>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}
