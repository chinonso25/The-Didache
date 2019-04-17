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

export default class Chapter9 extends Component {
  static navigationOptions = {
    title: "Chapter9"
  };

  render() {
    return (
      <Container>
        <MenuButton navigation={this.props.navigation} />
        <Content>
          <Card>
            <CardItem header bordered>
              <Text>Chapter 9</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text>
                  1. And concerning the Eucharist, hold Eucharist thus:
                  {"\n"}
                  {"\n"}
                  2. First concerning the Cup, "We give thanks to thee, our
                  Father, for the Holy Vine of David thy child, which, thou
                  didst make known to us through Jesus thy Child; to thee be
                  glory for ever."
                  {"\n"}
                  {"\n"}
                  3. And concerning the broken Bread: "We give thee thanks, our
                  Father, for the life and knowledge which thou didst make known
                  to us through Jesus thy Child. To thee be glory for ever.
                  {"\n"}
                  {"\n"}
                  4. As this broken bread was scattered upon the mountains, but
                  was brought together and became one, so let thy Church be
                  gathered together from the ends of the earth into thy kingdom,
                  for thine is the glory and the power through Jesus Christ for
                  ever."
                  {"\n"}
                  {"\n"}
                  5. But let none eat or drink of your Eucharist except those
                  who have been baptised in the Lord's Name. For concerning this
                  also did the Lord say, "Give not that which is holy to the
                  dogs."
                </Text>
              </Body>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}
