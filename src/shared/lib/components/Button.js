/* @flow */

import React from "react";
import { View, Text } from "react-native";

type ButtonProps = {
  text: string,
  size: "lg" | "md" | "sm",
  onClick: (event: Object) => {},
};

type ButtonState = {
  pressed: boolean,
};

export default class Button extends React.Component {
  props: ButtonProps;
  state: ButtonState;

  constructor() {
    super();

    this.state = {
      pressed: false,
    };
  }

  render() {
    const { text } = this.props;
    return (
      <View>
        <Text>{text}</Text>
      </View>
    );
  }
}
