import React from "react";
import { Text, View } from "react-native";

export default class OrdersTabScreen extends React.Component {
  static navigationOptions = {
    headerTitle: "My Orders",
    tabBarLable: "Orders",
    headerTintColor: "#FFFFFF",
    headerStyle: {
      backgroundColor: "#FD996B",
    },
  };
  render() {
    return (
      <View>
        <Text>This is the Ordering page: List of orders</Text>
      </View>
    );
  }
}
