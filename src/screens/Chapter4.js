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

export default class Chapter4 extends Component {
  static navigationOptions = {
    title: "Chapter4"
  };

  render() {
    return (
      <Container>
        <MenuButton navigation={this.props.navigation} />
        <Content>
          <Card>
            <CardItem header bordered>
              <Text>Chapter 4</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text>
                  1. My child, thou shalt remember, day and night, him who
                  speaks the word of God to thee, and thou shalt honor him as
                  the Lord, for where the Lord's nature is spoken of, there is
                  he present.
                  {"\n"}
                  {"\n"}2. And thou shalt seek daily the presence of the saints,
                  that thou mayest find rest in their words.
                  {"\n"}
                  {"\n"}3. Thou shalt not desire a schism, but shalt reconcile
                  those that strive. Thou shalt give righteous judgement; thou
                  shalt favor no mans person in reproving transgression.
                  {"\n"}
                  {"\n"}4. Thou shalt not be of two minds whether it shall be or
                  not.
                  {"\n"}
                  {"\n"}5. Be not one who stretches out his hands to receive,
                  but shuts them when it comes to giving.
                  {"\n"}
                  {"\n"}6. Of whatsoever thou hast gained by thy hands thou
                  shalt give a ransom for thy sins.
                  {"\n"}
                  {"\n"}7. Thou shalt not hesitate to give, nor shalt thou
                  grumble when thou givest, for thou shalt know who is the good
                  Paymaster of the reward.
                  {"\n"}
                  {"\n"}8. Thou shalt not turn away the needy, but shalt share
                  everything with thy brother, and shalt not say it is thine
                  own, for if you are sharers in the imperishable, how much more
                  in the things which perish?
                  {"\n"}
                  {"\n"}9. Thou shalt not withhold thine hand from thy son or
                  from thy daughter, but thou shalt teach them the fear of God
                  from their youth up.
                  {"\n"}
                  {"\n"}10. Thou shalt not command in thy bitterness thy slave
                  or thine handmaid, who hope in the same God, lest they cease
                  to fear the God who is over you both; for he comes not to call
                  men with respect of persons, but those whom the Spirit has
                  prepared.
                  {"\n"}
                  {"\n"}11. But do you who are slaves be subject to your master,
                  as to God's representative, in reverence and fear.
                  {"\n"}
                  {"\n"}12. Thou shalt hate all hypocrisy, and everything that
                  is not pleasing to the Lord.
                  {"\n"}
                  {"\n"}13. Thou shalt not forsake the commandments of the Lord,
                  but thou shalt keep what thou didst receive, "Adding nothing
                  to it and taking nothing away."
                  {"\n"}
                  {"\n"}14. In the congregation thou shalt confess thy
                  transgressions, and thou shalt not betake thyself to prayer
                  with an evil conscience. This is the way of life.
                </Text>
              </Body>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}
