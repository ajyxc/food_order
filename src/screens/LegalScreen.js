import React from "react";
import { Text, View } from "react-native";

export default class LegalScreen extends React.Component {
  static navigationOptions = () => ({
    title: "Legal Information",
    headerTintColor: "#FFFFFF",
    headerStyle: {
      backgroundColor: "#FD996B",
    },
  });
  render() {
    return (
      <View>
        <Text>This is the legal info page:</Text>
      </View>
    );
  }
}
