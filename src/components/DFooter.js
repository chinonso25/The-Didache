
import React, { Component } from 'react';
import { Footer, FooterTab, Button, Text } from 'native-base';


export default class DFooter extends Component {
  render() {
    return (
        <Footer>
          <FooterTab>
            <Button>
              <Text>Writings</Text>
            </Button>
            <Button>
              <Text>About</Text>
            </Button>

          </FooterTab>
        </Footer>
    );
  }
}
