/* @flow */

import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import EvilIcons from "react-native-vector-icons/EvilIcons";

const windowWidth: number = Dimensions.get("window").width;

type Props = {
  id: number,
  dishName: string,
  price: number,
  content: string,
};

type State = {
  heartPressed: boolean,
};

export default class MenuItem extends React.Component {
  state: State = {
    heartPressed: false,
  };

  _onPress = () => {
    this.props.onPressItem(
      this.props.id,
      this.props.price,
      this.props.dishName,
    );
  };
  _onPressHeart = () => {
    this.setState({
      heartPressed: !this.state.heartPressed,
    });
  };

  render() {
    const { dishName, price, content } = this.props;
    return (
      <View style={styles.board}>
        <View style={[styles.wrapper]}>
          <Text style={styles.resName}>{dishName}</Text>
          <Text style={styles.price}>{`$${price}`}</Text>
          <View style={[styles.descriptionHeight, styles.centre]}>
            <Text style={styles.decription}>{content}</Text>
          </View>
        </View>
        <View style={[styles.iconWrapper, styles.centre]}>
          <TouchableOpacity onPress={this._onPressHeart}>
            <EvilIcons
              style={[
                this.state.heartPressed && styles.heart,
                !this.state.heartPressed && styles.hide,
              ]}
              name="heart"
              size={29}
            />
            <FontAwesome
              style={[
                !this.state.heartPressed && styles.heart,
                this.state.heartPressed && styles.hide,
              ]}
              name="heart"
              size={20}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={this._onPress}>
            <EvilIcons style={styles.plus} name="plus" size={29} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  hide: {
    display: "none",
  },
  board: {
    height: 86,
    width: windowWidth,
    flexDirection: "row",
  },
  wrapper: {
    height: 78,
    top: 8,
    width: windowWidth - 88,
    left: 15,
  },
  iconWrapper: {
    left: 15,
    width: 73,
    flexDirection: "row",
  },
  centre: {
    justifyContent: "center",
    alignItems: "center",
  },
  heart: {
    color: "#FD9BCB",
  },
  plus: {
    color: "#699CFC",
  },
  resName: {
    fontWeight: "800",
    fontSize: 14,
  },
  price: {
    fontWeight: "200",
    fontSize: 13,
    top: 4,
  },
  descriptionHeight: {
    height: 45,
  },
  decription: {
    width: windowWidth - 88,
    fontWeight: "100",
    fontSize: 11,
    color: "#999999",
  },
});
