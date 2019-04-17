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

export default class Chapter3 extends Component {
  static navigationOptions = {
    title: "Chapter3"
  };

  render() {
    return (
      <Container>
        <MenuButton navigation={this.props.navigation} />
        <Content>
          <Card>
            <CardItem header bordered>
              <Text>Chapter 3</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text>
                  1. My child, flee from every evil man and from all like him.
                  {"\n"}
                  {"\n"}
                  2. Be not proud, for pride leads to murder, nor jealous, nor
                  contentious, nor passionate, for from all these murders are
                  engendered.
                  {"\n"}
                  {"\n"}3. My child, be not lustful, for lust leads to
                  fornication, nor a speaker of base words, nor a lifter up of
                  the eyes, for from all these is adultery engendered.
                  {"\n"}
                  {"\n"}4. My child, regard not omens, for this leads to
                  idolatry; neither be an enchanter, nor an astrologer, nor a
                  magician, neither wish to see these things, for from them all
                  is idolatry engendered.
                  {"\n"}
                  {"\n"}5. My child, be not a liar, for lying leads to theft,
                  nor a lover of money, nor vain-glorious, for from all these
                  things are thefts engendered.
                  {"\n"}
                  {"\n"}6. My child, be not a grumbler, for this leads to
                  blasphemy, nor stubborn, nor a thinker of evil, for from all
                  these are blasphemies engendered.
                  {"\n"}
                  {"\n"}7. But be thou "meek, for the meek shall inherit the
                  earth;"
                  {"\n"}
                  {"\n"}8. Be thou long-suffering, and merciful and guileless,
                  and quiet, and good, and ever fearing the words which thou
                  hast heard.
                  {"\n"}
                  {"\n"}9. Thou shalt not exalt thyself, nor let thy soul be
                  presumptuous. Thy soul shall not consort with the lofty, but
                  thou shalt walk with righteous and humble men.
                  {"\n"}
                  {"\n"}10. Receive the accidents that befall to thee as good,
                  knowing that nothing happens without God.
                </Text>
              </Body>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}
