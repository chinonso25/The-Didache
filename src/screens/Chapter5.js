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

export default class Chapter5 extends Component {
  static navigationOptions = {
    title: "Chapter5"
  };

  render() {
    return (
      <Container>
        <MenuButton navigation={this.props.navigation} />
        <Content>
          <Card>
            <CardItem header bordered>
              <Text>Chapter 5</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text>
                  1. But the Way of Death is this: First of all, it is wicked
                  and full of cursing, murders, adulteries, lusts, fornications,
                  thefts, idolatries, witchcrafts, charms, robberies, false
                  witness, hypocrisies, a double heart, fraud, pride, malice,
                  stubbornness, covetousness, foul speech, jealousy, impudence,
                  haughtiness, boastfulness.
                  {"\n"}
                  {"\n"}
                  2. Persecutors of the good, haters of truth, lovers of lies,
                  knowing not the reward of righteousness, not cleaving to the
                  good nor to righteous judgment, spending wakeful nights not
                  for good but for wickedness, from whom meekness and patience
                  is far, lovers of vanity, following after reward, unmerciful
                  to the poor, not working for him who is oppressed with toil,
                  without knowledge of him who made them, murderers of children,
                  corrupters of God's creatures, turning away the needy,
                  oppressing the distressed, advocates of the rich, unjust
                  judges of the poor, altogether sinful; may ye be delivered, my
                  children, from all these.
                </Text>
              </Body>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}
