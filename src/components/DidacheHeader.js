import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Title } from 'native-base';


const DidacheHeader = () => {
    return (
        <Header>
          <Left/>
          <Body>
            <Title>The Didache</Title>
          </Body>
          <Right />
        </Header>
    );
  }

  export default DidacheHeader;
