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

export default class Chapter8 extends Component {
  static navigationOptions = {
    title: "Chapter8"
  };

  render() {
    return (
      <Container>
        <MenuButton navigation={this.props.navigation} />
        <Content>
          <Card>
            <CardItem header bordered>
              <Text>Chapter 8</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text>
                  1. Let not your fasts be with the hypocrites, for they fast on
                  Mondays and Thursdays, but do you fast on Wednesdays and
                  Fridays.{"\n"}
                  {"\n"}
                  2. And do not pray as the hypocrites, but as the Lord
                  commanded in his Gospel, pray thus: "Our Father, who art in
                  Heaven, hallowed be thy Name, thy Kingdom come, thy will be
                  done, as in Heaven so also upon earth; give us today our daily
                  bread, and forgive us our debt as we forgive our debtors, and
                  lead us not into trial, but deliver us from the Evil One, for
                  thine is the power and the glory for ever."{"\n"}
                  {"\n"}
                  3. Pray thus three times a day.
                </Text>
              </Body>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}
