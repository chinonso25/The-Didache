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

export default class Chapter1 extends Component {
  static navigationOptions = {
    title: "Chapter1"
  };

  render() {
    return (
      <Container>
        <MenuButton navigation={this.props.navigation} />
        <Content>
          <Card>
            <CardItem header bordered>
              <Text>Chapter 1</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text selectable={true}>
                  1. There are two Ways, one of Life and one of Death, and there
                  is a great difference between the two Ways.
                  {"\n"}
                  {"\n"}
                  2. The way of life is this:" First, you shalt love the God who
                  made thee, secondly, thy neighbor as thyself; and whatsoever
                  thou wouldst not have done to thyself, do not thou to
                  another."{"\n"}
                  {"\n"}
                  3. Now, the teaching of these words is this: "Bless those that
                  curse you, and pray for your enemies, and fast for those that
                  persecute you. For what credit is it to you if you love those
                  that love you? Do not even the heathen do the same?" But, for
                  your part, "love those that hate you," and you will have no
                  enemy.{"\n"}
                  {"\n"}
                  4. "Abstain from carnal" and bodily "lusts." "If any man smite
                  thee on the right cheek, turn to him the other cheek also,"
                  and thou wilt be perfect. "If any man impress thee to go with
                  him one mile, go with him two. If any man take thy coat, give
                  him thy shirt also. If any man will take from thee what is
                  thine, refuse it not," not even if thou canst.{"\n"}
                  {"\n"}
                  5. Give to everyone that asks thee, and do not refuse, for the
                  Father's will is that we give to all from the gifts we have
                  received. Blessed is he that gives according to the mandate;
                  for he is innocent; but he who receives it without need shall
                  be tried as to why he took and for what, and being in prison
                  he shall be examined as to his deeds, and "he shall not come
                  out thence until he pay the last farthing."{"\n"}
                  {"\n"}
                  6. But concerning this it was also said, "Let thine alms sweat
                  into thine hands until thou knowest to whom thou art giving."
                </Text>
              </Body>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}
