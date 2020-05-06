/* @flow */

import React from "react";
import { View, StyleSheet } from "react-native";

export default class Circle extends React.Component {
  constructor() {
    super();
  }

  render() {
    return <View style={styles.circle} />;
  }
}
const styles = StyleSheet.create({
  circle: {
    left: 33,
    top: -30,
    width: 9,
    height: 9,
    borderRadius: 9 / 2,
    backgroundColor: "red",
  },
});
