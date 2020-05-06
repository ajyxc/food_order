/* @flow */

import React from "react";
import { Text, View, Button } from "react-native";
import { NavigationActions } from "react-navigation";

import type { Navigation } from "shared/decls/navigation";

type PageParams = {};
type Props = {
  navigation: Navigation<PageParams>,
};

class PaymentInfoScreen extends React.Component {
  props: Props;

  static navigationOptions = {
    title: "Payment Info Page",
    headerTintColor: "#FFFFFF",
    headerStyle: {
      backgroundColor: "#FD996B",
    },
  };
  render() {
    const backAction = NavigationActions.back({});
    return (
      <View>
        <Text>
          This is the payment info page. Select payment method from here
        </Text>
        <Button
          onPress={() => this.props.navigation.dispatch(backAction)}
          title="Cancel"
        />
        <Button
          onPress={() => this.props.navigation.dispatch(backAction)}
          title="Done"
        />
      </View>
    );
  }
}

export default PaymentInfoScreen;
