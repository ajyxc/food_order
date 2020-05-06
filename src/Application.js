import React from "react";
import { StackNavigator, TabNavigator } from "react-navigation";
import RestaurantsTabScreen from "screens/RestaurantsTabScreen.js";
import MenuOrderingScreen from "screens/MenuOrderingScreen.js";
import CheckoutScreen from "screens/CheckoutScreen.js";
import AdditionalInfoScreen from "screens/AdditionalInfoScreen.js";
import OrdersTabScreen from "screens/OrdersTabScreen.js";
import SettingsTabScreen from "screens/SettingsTabScreen.js";
import PaymentInfoScreen from "screens/PaymentInfoScreen.js";
import AccountInfoScreen from "screens/AccountInfoScreen.js";
import LoginScreen from "screens/LoginScreen.js";
import LegalScreen from "screens/LegalScreen.js";
import HelpScreen from "screens/HelpScreen.js";
import { StatusBar } from "react-native";
import store from "./store";
import { Provider } from "react-redux";

const TabNav = TabNavigator(
  {
    Restaurants: { screen: RestaurantsTabScreen },
    Orders: { screen: OrdersTabScreen },
    Settings: { screen: SettingsTabScreen },
  },
  {
    initialRouteName: "Restaurants",
  },
);

const FoodeoApp = StackNavigator(
  {
    Home: { screen: TabNav },
    Menu: { screen: MenuOrderingScreen },
    Checkout: { screen: CheckoutScreen },
    AdditionalInfo: { screen: AdditionalInfoScreen },
    Payment: { screen: PaymentInfoScreen },
    Account: { screen: AccountInfoScreen },
    Login: { screen: LoginScreen },
    Help: { screen: HelpScreen },
    Legal: { screen: LegalScreen },
  },
  {
    initialRouteName: "Home",
  },
);

export default class Application extends React.Component {
  render() {
    StatusBar.setBarStyle("light-content", true);
    return (
      <Provider store={store}>
        <FoodeoApp />
      </Provider>
    );
  }
}
