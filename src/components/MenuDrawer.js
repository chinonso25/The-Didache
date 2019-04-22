import React from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  Platform,
  Dimensions,
  StyleSheet,
  TouchableOpacity
} from "react-native";

const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;

export default class MenuDrawer extends React.Component {
  navLink(nav, text) {
    return (
      <TouchableOpacity
        style={{ height: 50 }}
        onPress={() => this.props.navigation.navigate(nav)}
      >
        <Text style={styles.link}>{text}</Text>
      </TouchableOpacity>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.scroller}>
          <View style={styles.topLinks}>
            <View style={styles.profile}>
              <View style={styles.imgView}>
                <Image
                  style={styles.img}
                  source={require("./../../assets/drawer-cover.png")}
                />
              </View>
              <View style={styles.profileText}>
                <Text style={styles.name}>The Didache</Text>
              </View>
            </View>
          </View>
          <View style={styles.bottomLinks}>
            {this.navLink("Home", "Home")}
            {this.navLink("Chapter1", "Chapter 1")}
            {this.navLink("Chapter2", "Chapter 2")}
            {this.navLink("Chapter3", "Chapter 3")}
            {this.navLink("Chapter4", "Chapter 4")}
            {this.navLink("Chapter5", "Chapter 5")}
            {this.navLink("Chapter6", "Chapter 6")}
            {this.navLink("Chapter7", "Chapter 7")}
            {this.navLink("Chapter8", "Chapter 8")}
            {this.navLink("Chapter9", "Chapter 9")}
            {this.navLink("Chapter10", "Chapter 10")}
            {this.navLink("Chapter11", "Chapter 11")}
            {this.navLink("Chapter12", "Chapter 12")}
            {this.navLink("Chapter13", "Chapter 13")}
            {this.navLink("Chapter14", "Chapter 14")}
            {this.navLink("Chapter15", "Chapter 15")}
            {this.navLink("Chapter16", "Chapter 16")}
          </View>
        </ScrollView>
        <View style={styles.footer}>
          <Text style={styles.description}>Ude-Net Technologies</Text>
          <Text style={styles.version}>v1.15</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightgray"
  },
  scroller: {
    flex: 1
  },
  profile: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 25,
    borderBottomWidth: 1,
    borderBottomColor: "#777777"
  },
  profileText: {
    flex: 3,
    flexDirection: "column",
    justifyContent: "center"
  },
  name: {
    fontSize: 20,
    paddingBottom: 5,
    color: "white",
    textAlign: "left"
  },
  imgView: {
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20
  },
  img: {
    height: 70,
    width: 70
  },
  topLinks: {
    height: 160,
    backgroundColor: "#3F51B5"
  },
  bottomLinks: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: 10,
    paddingBottom: 450
  },
  link: {
    flex: 1,
    fontSize: 20,
    padding: 6,
    paddingLeft: 14,
    margin: 5,
    textAlign: "left"
  },
  footer: {
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderTopWidth: 1,
    borderTopColor: "lightgray"
  },
  version: {
    flex: 1,
    textAlign: "right",
    marginRight: 20,
    color: "gray"
  },
  description: {
    flex: 1,
    marginLeft: 20,
    fontSize: 16
  }
});
