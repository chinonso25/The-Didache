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

export default class Chapter11 extends Component {
  static navigationOptions = {
    title: "Chapter11"
  };

  render() {
    return (
      <Container>
        <MenuButton navigation={this.props.navigation} />
        <Content>
          <Card>
            <CardItem header bordered>
              <Text>Chapter 11</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text selectable={true}>
                  1. Whosoever then comes and teaches you all these things
                  aforesaid, receive him.
                  {"\n"}
                  {"\n"}
                  2. But if the teacher himself be perverted and teach another
                  doctrine to destroy these things, do not listen to him, but if
                  his teaching be for the increase of righteousness and
                  knowledge of the Lord, receive him as the Lord.
                  {"\n"}
                  {"\n"}
                  3. And concerning the Apostles and Prophets, act thus
                  according to the ordinance of the Gospel.
                  {"\n"}
                  {"\n"}
                  4. Let every Apostle who comes to you be received as the Lord,
                  {"\n"}
                  {"\n"}
                  5. But let him not stay more than one day, or if need be a
                  second as well; but if he stay three days, he is a false
                  prophet.
                  {"\n"}
                  {"\n"}
                  6. And when an Apostle goes forth let him accept nothing but
                  bread till he reach his night's lodging; but if he ask for
                  money, he is a false prophet.
                  {"\n"}
                  {"\n"}
                  7. Do not test or examine any prophet who is speaking in a
                  spirit, "for every sin shall be forgiven, but this sin shall
                  not be forgiven."
                  {"\n"}
                  {"\n"}
                  8. But not everyone who speaks in a spirit is a prophet,
                  except he have the behaviour of the Lord. From his behaviour,
                  then, the false prophet and the true prophet shall be known.
                  {"\n"}
                  {"\n"}
                  9. And no prophet who orders a meal in a spirit shall eat of
                  it: otherwise he is a false prophet.
                  {"\n"}
                  {"\n"}
                  10. And every prophet who teaches truth, if he do not what he
                  teaches, is a false prophet.
                  {"\n"}
                  {"\n"}
                  11. But no prophet who has been tried and is genuine, though
                  he enact a worldly mystery of the Church, if he teach not
                  others to do what he does himself, shall be judged by you: for
                  he has his judgment with God, for so also did the prophets of
                  old.
                  {"\n"}
                  {"\n"}
                  12. But whosoever shall say in a spirit "Give me money, or
                  something else," you shall not listen to him; but if he tell
                  you to give on behalf of others in want, let none judge him.
                </Text>
              </Body>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}
