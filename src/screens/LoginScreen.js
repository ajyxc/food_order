import React from "react";
import { Text, View, Button } from "react-native";
import { NavigationActions } from "react-navigation";

import type { Navigation } from "shared/decls/navigation";

type PageParams = {};
type Props = {
  navigation: Navigation<PageParams>,
};
export default class LoginScreen extends React.Component {
  props: Props;
  static navigationOptions = () => ({
    title: "Login / Sign up Page",
    headerTintColor: "#FFFFFF",
    headerStyle: {
      backgroundColor: "#FD996B",
    },
  });
  render() {
    const backAction = NavigationActions.back({});

    return (
      <View>
        <Text>This is the login or sign up page</Text>
        <Button
          onPress={() => this.props.navigation.dispatch(backAction)}
          title="Login"
        />
      </View>
    );
  }
}
