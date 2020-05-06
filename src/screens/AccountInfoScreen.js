import React from "react";
import { Text, View, Button } from "react-native";
import type { Navigation } from "shared/decls/navigation";

type PageParams = {};
type Props = {
  navigation: Navigation<PageParams>,
};

export default class AccountInfoScreen extends React.Component {
  props: Props;
  static navigationOptions = () => ({
    title: "Account Information",
    headerTintColor: "#FFFFFF",
    headerStyle: {
      backgroundColor: "#FD996B",
    },
  });
  render() {
    const { navigate } = this.props.navigation;

    return (
      <View>
        <Text>This is the Account Info Page:</Text>
        <Button
          onPress={() => navigate("Login")}
          title="Logout and switch account"
        />
      </View>
    );
  }
}
