import React from "react";
import { Text, View, Dimensions, SectionList, StyleSheet } from "react-native";

import type { Navigation } from "shared/decls/navigation";
import MenuItem from "shared/lib/components/MenuItem.js";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { connect } from "react-redux";
import { fetchMenu } from "shared/lib/actions/restaurantsActions";
import { addItem } from "shared/lib/actions/checkoutActions";
import Circle from "shared/lib/containers/CircleContainer.js";

const windowWidth: number = Dimensions.get("window").width;

type Props = {
  navigation: Navigation<{
    restaurantId: number,
    restaurantName: string,
  }>,
  tagName: string,
};

type State = {
  selected: boolean,
};

class MenuOrderingScreen extends React.Component {
  props: Props;
  state: State = {
    selected: false,
    empty: false,
  };

  static navigationOptions = ({ navigation }) => ({
    title: `${navigation.state.params.restaurantName}`,
    headerTintColor: "#FFFFFF",
    headerStyle: {
      backgroundColor: "#FD996B",
    },

    headerRight: (
      <View>
        <Ionicons
          style={styles.cart}
          name="ios-cart"
          size={23}
          color="#CCCCCC"
          onPress={() => {
            navigation.navigate("Checkout", {
              orderID: "ABCDE",
              userID: "00001",
            });
          }}
        />
        <Circle />
      </View>
    ),
  });

  _renderDishItem = ({ item }) => (
    <MenuItem
      id={item.id}
      dishName={item.name}
      price={item.price}
      content={item.description}
      onPressItem={this._onPressItem}
    />
  );

  _onPressItem = (id: number, price: number, name: string) => {
    const { addItem } = this.props;
    addItem(id, price, name);
  };

  _keyExtractorDish = item => item.id;

  componentDidMount() {
    const { params } = this.props.navigation.state;
    const { fetchMenu, cart } = this.props;
    fetchMenu(params.restaurantId);
    //if (cart !== null) {
    //this.props.navigation.setParams({ chechout: true });
    //} else {
    //  this.props.navigation.setParams({ chechout: false });
    //}

    // if (items.size === 0) {
    //   this.setState({ empty: true });
    // } else {
    //   this.setState({ empty: false });
    // }
  }

  render() {
    const { sections } = this.props;
    //const { params } = this.props.navigation.state;

    //this.props.navigation.setParams({ chechout: true });
    const sectionData = sections.map(section => ({
      name: section.name,
      data: section.items,
    }));

    return (
      <View>
        <View style={styles.restaurantOrderBorder}>
          <SectionList
            renderSectionHeader={({ section }) => (
              <View>
                <Text>{section.name}</Text>
              </View>
            )}
            sections={sectionData}
            extraData={this.state}
            keyExtractor={this._keyExtractorDish}
            renderItem={this._renderDishItem}
            ItemSeparatorComponent={this._renderSeparator}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  restaurantOrderBorder: {
    borderWidth: 1,
    borderColor: "#D9D9D9",
    width: windowWidth,
  },
  cart: {
    left: 20,
    top: 20,
    height: 50,
    width: 50,
    color: "white",
  },
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

const getRestaurantMenu = (state, restaurantId) => {
  const restaurant = state.restaurants.find(item => {
    return item.id === restaurantId;
  });

  return (restaurant && restaurant.menu) || [];
};

export default connect(
  (state, props) => {
    const {
      navigation: {
        state: {
          params: { restaurantId },
        },
      },
    } = props;
    return {
      sections: getRestaurantMenu(state, restaurantId),
      cart: state.checkout,
    };
  },
  { fetchMenu, addItem },
)(MenuOrderingScreen);
