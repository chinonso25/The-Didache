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

export default class Chapter16 extends Component {
  static navigationOptions = {
    title: "Chapter16"
  };

  render() {
    return (
      <Container>
        <MenuButton navigation={this.props.navigation} />
        <Content>
          <Card>
            <CardItem header bordered>
              <Text>Chapter 16</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text>
                  1. "Watch" over your life "let your lamps" be not quenched
                  "and your loins" be not ungirded, but be "ready," for ye know
                  not "the hour in which our Lord cometh."
                  {"\n"}
                  {"\n"}
                  2. But be frequently gathered together seeking the things
                  which are profitable for your souls, for the whole time of
                  your faith shall not profit you except ye be found perfect at
                  the last time;
                  {"\n"}
                  {"\n"}
                  3. For in the last days the false prophets and the corruptors
                  shall be multiplied, and the sheep shall be turned into
                  wolves, and love shall change to hate;
                  {"\n"}
                  {"\n"}
                  4. For as lawlessness increaseth they shall hate one another
                  and persecute and betray, and then shall appear the deceiver
                  of the world as a Son of God, and shall do signs and wonders
                  and the earth shall be given over into his hands and he shall
                  commit iniquities which have never been since the world began.
                  {"\n"}
                  {"\n"}
                  5. Then shall the creation of mankind come to the fiery trial
                  and "many shall be offended" and be lost, but "they who
                  endure" in their faith "shall be saved" by the curse itself.
                  {"\n"}
                  {"\n"}
                  6. And "then shall appear the signs" of the truth. First the
                  sign spread out in Heaven, then the sign of the sound of the
                  trumpet, and thirdly the resurrection of the dead:
                  {"\n"}
                  {"\n"}
                  7. But not of all the dead, but as it was said, "The Lord
                  shall come and all his saints with him."
                  {"\n"}
                  {"\n"}
                  8. Then shall the world "see the Lord coming on the clouds of
                  Heaven."
                </Text>
              </Body>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}
