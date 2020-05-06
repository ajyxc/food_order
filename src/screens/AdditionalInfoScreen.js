import React from "react";
import { Text, View } from "react-native";

export default class AdditionalInfoScreen extends React.Component {
  static navigationOptions = () => ({
    title: "Restaurant Info",
    headerTintColor: "#FFFFFF",
    headerStyle: {
      backgroundColor: "#FD996B",
    },
  });
  render() {
    return (
      <View>
        <Text>This is the Additional Restaurant info page:</Text>
      </View>
    );
  }
}
