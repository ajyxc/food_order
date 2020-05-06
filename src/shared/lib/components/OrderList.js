import React from "react";
import { StyleSheet, View, FlatList, Text, Dimensions } from "react-native";
import OrderListItem from "../containers/OrderListItemContainer";
const screenWidth: numbers = Dimensions.get("window").width;

export default class RestaurantList extends React.PureComponent {
  _keyExtractor = (item, index) => index;

  _renderItem = ({ item }) => {
    const { updateQuantity } = this.props;
    var totalPrice = this._calculatePrice(item);
    return (
      <OrderListItem
        id={item.id}
        name={item.name}
        price={totalPrice}
        quantity={item.quantity}
        updateQuantity={updateQuantity}
      />
    );
  };

  _calculatePrice = item => {
    return item.quantity * item.price;
  };

  render() {
    const { items } = this.props;

    return (
      <View style={styles.fix}>
        <FlatList
          data={items}
          extraData={this.state}
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  fix: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
