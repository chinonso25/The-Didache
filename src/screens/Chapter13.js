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

export default class Chapter13 extends Component {
  static navigationOptions = {
    title: "Chapter13"
  };

  render() {
    return (
      <Container>
        <MenuButton navigation={this.props.navigation} />
        <Content>
          <Card>
            <CardItem header bordered>
              <Text>Chapter 13</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text selectable={true}>
                  1. But every true prophet who wishes to settle among you is
                  "worthy of his food."
                  {"\n"}
                  {"\n"}
                  2. Likewise a true teacher is himself worthy, like the
                  workman, of his food.
                  {"\n"}
                  {"\n"}
                  3. Therefore thou shalt take the firstfruit of the produce of
                  the winepress and of the threshingfloor and of oxen and sheep,
                  and shalt give them as the firstfruits to the prophets, for
                  they are your high priests.
                  {"\n"}
                  {"\n"}
                  4. But if you have not a prophet, give to the poor.
                  {"\n"}
                  {"\n"}
                  5. If thou makest bread, take the firstfruits, and give it
                  according to the commandment.
                  {"\n"}
                  {"\n"}
                  6. Likewise when thou openest a jar of wine or oil, give the
                  firstfruits to the prophets.
                  {"\n"}
                  {"\n"}
                  7. Of money also and clothes, and of all your possessions,
                  take the firstfruits, as it seem best to you, and give
                  according to the commandment.
                </Text>
              </Body>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}
