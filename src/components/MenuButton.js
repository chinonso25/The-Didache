import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

export default class MenuButton extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Ionicons
          name="md-menu"
          color="#000000"
          size={32}
          style={styles.menuIcon}
          onPress={() => this.props.navigation.toggleDrawer()}
        />
        <Text style={styles.heading}>The Didache</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#3F51B5",
    justifyContent: "center",
    alignItems: "center",
    height: 60,
    paddingTop: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: "relative"
  },

  menuIcon: {
    zIndex: 9,
    position: "absolute",
    top: 20,
    left: 20
  },
  heading: {
    fontSize: 20,
    color: "white"
  }
});
