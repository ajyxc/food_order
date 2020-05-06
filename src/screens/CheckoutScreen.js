import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Dimensions,
  FlatList,
} from "react-native";
import { NavigationActions } from "react-navigation";
import OrderListItem from "shared/lib//containers/OrderListItemContainer";
import OrderList from "shared/lib/containers/OrderListContainer";
import CheckoutBottom from "shared/lib/components/CheckoutBottom.js";
import { connect } from "react-redux";
import type { Navigation } from "shared/decls/navigation";
import { updateQuantity } from "shared/lib/actions/checkoutActions";

const screenWidth: numbers = Dimensions.get("window").width;

type PageParams = {
  orderID: number,
  userID: string,
};

class CheckoutScreen extends React.Component {
  props: Props;
  static navigationOptions = () => ({
    title: "Your Order",
    headerTintColor: "#FFFFFF",
    headerStyle: {
      backgroundColor: "#FD996B",
    },
  });

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

  _caluclateTotalPrice = items => {
    return items.reduce((accumulator, currentValue) => {
      return accumulator + currentValue.quantity * currentValue.price;
    }, 0);
  };

  render() {
    const { params } = this.props.navigation.state;
    const { navigate } = this.props.navigation;
    const { items } = this.props;

    const resetAction = NavigationActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({
          routeName: "Home",
          //params: {},
          //action: NavigationActions.navigate({ routeName: "Orders" }),
          //  Sub-action navigate into a nested navigator does not work at the
          //  moment due to a known bug in React Navigation library. Right
          //  now this just takes user back to Home page. As per RN issue
          //  #1127, introducing Redux should be able to fix this problem

          //  TODO: Eventually, if this isn't fixed inherently in the library, we'll
          //  want to track initialRouteName inside redux and configure it ourselves.
        }),
      ],
    });

    return (
      <View>
        <Text>This is the Checkout Page for OrderID:</Text>
        <Text>{params.orderID}</Text>
        <Text>UserID:</Text>
        <Text>{params.userID}</Text>

        <FlatList
          data={items}
          extraData={this.state}
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem}
        />

        <CheckoutBottom
          subTotal={this._caluclateTotalPrice(items)}
          taxRate={0.33333}
        />

        <Button onPress={() => navigate("Payment")} title="Payment Info" />
        <Button
          onPress={() => this.props.navigation.dispatch(resetAction)}
          title="Place Order (pop up shows completion first)"
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

export default connect(
  state => ({
    items: state.checkout,
  }),
  { updateQuantity },
)(CheckoutScreen);
