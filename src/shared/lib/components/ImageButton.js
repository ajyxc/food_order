/* @flow */

import React from "react";
import { TouchableOpacity, Image } from "react-native";

type ButtonProps = {
  imageSource: any,
  onPress: () => void,
};

type ButtonState = {
  pressed: boolean,
};

export default class ImageButton extends React.Component {
  props: ButtonProps;
  state: ButtonState;

  constructor() {
    super();

    this.state = {
      pressed: false,
    };
  }

  render() {
    const { imageSource, onPress, ...rest } = this.props;
    return (
      <TouchableOpacity onPress={onPress}>
        <Image source={imageSource} {...rest} />
      </TouchableOpacity>
    );
  }
}
