/* @flow */
import { connect } from "react-redux";
import React from "react";
import { View, StyleSheet } from "react-native";
type Props = {
  items: [],
};
type State = {
  empty: boolean,
};
class Circle extends React.Component {
  props: Props;
  state: State = {
    empty: false,
  };
  componentDidMount() {
    const { items } = this.props;
    if (items === null) {
      this.setState({ empty: false });
    } else {
      this.setState({ empty: true });
    }
  }
  render() {
    return (
      <View
        style={[styles.circle, this.props.items !== null && styles.transparent]}
      />
    );
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
  transparent: {
    display: "none",
  },
});

export default connect(
  state => ({
    items: state.checkout,
  }),
  {},
)(Circle);
