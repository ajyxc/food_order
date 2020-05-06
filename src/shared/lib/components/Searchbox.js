/* @flow */

import React from "react";
import { StyleSheet, View, TextInput, Dimensions } from "react-native";
import { Asset } from "expo";
import EvilIcon from "react-native-vector-icons/EvilIcons";
import FontIcon from "react-native-vector-icons/FontAwesome";
import ImageButton from "./ImageButton.js";

type ClearState = {
  showClear: boolean,
  textInputValue: string,
};

let screenWidth = Dimensions.get("window").width;

const initialState = {
  showClear: false,
  textInputValue: "",
};

export default class SearchBox extends React.Component {
  state: ClearState = initialState;

  _onClear = () => {
    this.setState(initialState);
  };
  _onChange = text => {
    this.setState({
      textInputValue: text,
      showClear: text !== "",
    });
  };

  componentDidMount() {
    Asset.loadAsync([require("./cancel.png")]);
  }

  render() {
    return (
      <View style={styles.wrapper}>
        <View style={[styles.transparent, styles.searchIcon]}>
          <EvilIcon name="search" size={23} color="#CCCCCC" />
        </View>
        <TextInput
          value={this.state.textInputValue}
          onChangeText={this._onChange}
          placeholder="Restaurants, Curret Location"
          input="text"
          style={[styles.transparent, styles.textInput]}
        />
        <View
          style={[
            styles.transparent,
            styles.locationIcon,
            this.state.showClear && styles.hide,
          ]}
        >
          <FontIcon name="location-arrow" size={18} color="#CCCCCC" />
        </View>
        <ImageButton
          onPress={this._onClear}
          imageSource={require("./cancel.png")}
          style={[
            styles.transparent,
            styles.clearIcon,
            !this.state.showClear && styles.hide,
          ]}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  hide: {
    display: "none",
  },
  transparent: {
    backgroundColor: "transparent",
  },
  wrapper: {
    width: screenWidth - 71,
    height: 30,
    left: 11,
    borderRadius: 5,
    backgroundColor: "white",
    flexDirection: "row",
  },
  textInput: {
    top: 1,
    width: screenWidth - 118,
  },
  locationIcon: {
    top: 5,
    width: 18,
  },
  searchIcon: {
    top: 5,
    width: 25,
  },
  clearIcon: {
    top: 5,
    width: 20,
    height: 20,
  },
});
