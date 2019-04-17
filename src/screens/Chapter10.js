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

export default class Chapter10 extends Component {
  static navigationOptions = {
    title: "Chapter10"
  };

  render() {
    return (
      <Container>
        <MenuButton navigation={this.props.navigation} />
        <Content>
          <Card>
            <CardItem header bordered>
              <Text>Chapter 10</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text>
                  1. But after you are satisfied with food, thus give thanks:
                  {"\n"}
                  {"\n"}
                  2. "We give thanks to thee, O Holy Father, for thy Holy Name
                  which thou didst make to tabernacle in out hearts, and for the
                  knowledge and faith and immortality which thou didst make
                  known to us through Jesus thy Child. To thee be glory for
                  ever.{"\n"}
                  {"\n"}
                  3. Thou, Lord Almighty, didst create all things for thy Name's
                  sake, and didst give food and drink to men for their
                  enjoyment, that they might give thanks to thee, but us hast
                  thou blessed with spiritual food and drink and eternal light
                  through thy Child.
                  {"\n"}
                  {"\n"}
                  4. Above all we give thanks to thee for that thou art mighty.
                  To thee be glory for ever.
                  {"\n"}
                  {"\n"}
                  5. Remember, Lord, thy Church, to deliver it from all evil and
                  to make it perfect in thy love, and gather it together in its
                  holiness from the four winds to thy kingdom which thou hast
                  prepared for it. For thine is the power and the glory for
                  ever.
                  {"\n"}
                  {"\n"}
                  6. Let grace come and let this world pass away. Hosannah to
                  the God of David. If any man be holy, let him come! if any man
                  be not, let him repent: Maranatha ("Our Lord! Come!"), Amen."
                  {"\n"}
                  {"\n"}
                  7. But suffer the prophets to hold Eucharist as they will.
                </Text>
              </Body>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}
