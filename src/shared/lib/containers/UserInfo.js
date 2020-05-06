/* @flow */

import React, { Component } from "react";
import { View, Text } from "react-native";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { fetchUser } from "../actions/userActions";

type Props = {
  user: {
    name: string,
    age: number,
  },
  fetchUser: () => {},
};

class UserInfo extends Component {
  props: Props;
  componentWillMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <View>
        <Text>UserInfo</Text>
        <Text>name: {this.props.user.name}</Text>
        <Text>age: {this.props.user.age}</Text>
      </View>
    );
  }
}

export default connect(
  state => {
    return {
      user: state.user.user,
    };
  },
  dispatch =>
    bindActionCreators(
      {
        fetchUser,
      },
      dispatch,
    ),
)(UserInfo);
