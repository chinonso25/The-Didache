// Import Libraries to create Component
import React from 'react';
import { Text, AppRegistry, View } from 'react-native';
import DidacheText from './src/components/DidacheText';




//Create Component
const App = () => {
  return(

      <DidacheText />

  );


};


//Render Component
AppRegistry.registerComponent('TheDidache', () => App);
