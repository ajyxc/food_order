/* @flow */

import React from "react";
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import Entypo from "react-native-vector-icons/Entypo";

const windowWidth: number = Dimensions.get("window").width;

type Props = {
  id: number,
  name: string,
  price: number,
  quantity: number,
  updateQuantity: (id: number, quantity: number) => void,
};

export default class OrderListItem extends React.Component {
  props: Props;

  handleIncrement = () => {
    const { updateQuantity, id, quantity } = this.props;
    updateQuantity(id, quantity + 1);
  };

  handleDecrement = () => {
    const { updateQuantity, id, quantity } = this.props;
    updateQuantity(id, quantity - 1);
  };

  render() {
    const { name, price, quantity } = this.props;

    return (
      <View style={styles.row}>
        <View style={styles.border} />
        <View style={styles.wrapper}>
          <Text style={[styles.nameStyle, styles.centeredText]}>{name}</Text>

          <Text style={[styles.priceStyle, styles.centeredText]}>{price}</Text>

          <TouchableOpacity onPress={this.handleIncrement}>
            <Entypo style={styles.icon} name="plus" size={16} />
          </TouchableOpacity>
          <Text style={[styles.numberOrders, styles.centeredText]}>
            {quantity}
          </Text>
          <TouchableOpacity onPress={this.handleDecrement}>
            <Entypo style={styles.icon} name="minus" size={16} />
          </TouchableOpacity>
        </View>
        <View style={styles.border} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  row: {
    height: 53,
    width: windowWidth,
  },
  wrapper: {
    flex: 1,
    height: 19,
    flexDirection: "row",
    alignItems: "center",
  },
  centeredText: {
    textAlign: "center",
  },
  nameStyle: {
    width: windowWidth * 0.6,
    fontSize: 16,
    fontWeight: "100",
  },
  icon: {
    color: "#699CFC",
  },
  numberOrders: {
    width: 28,
    fontSize: 16,
    color: "#999999",
    fontWeight: "100",
  },
  priceStyle: {
    width: windowWidth * 0.178,
    fontSize: 14,
    fontWeight: "100",
  },
  border: {
    borderBottomColor: "#D9D9D9",
    borderBottomWidth: 0.5,
    width: windowWidth - 22,
    left: 11,
  },
});
