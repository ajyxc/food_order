import React from "react";
import { Text, View } from "react-native";

export default class HelpScreen extends React.Component {
  static navigationOptions = () => ({
    title: "Help",
    headerTintColor: "#FFFFFF",
    headerStyle: {
      backgroundColor: "#FD996B",
    },
  });
  render() {
    return (
      <View>
        <Text>This is the Help info page:</Text>
      </View>
    );
  }
}
