import React from "react";
import { StyleSheet, View, Button, FlatList } from "react-native";
import type { Navigation } from "shared/decls/navigation";

import SearchBox from "../shared/lib/components/Searchbox";

import ListItem from "../shared/lib/components/ListItem";
import { connect } from "react-redux";
import { search } from "shared/lib/actions/restaurantsActions";

type PageParams = {};
type Props = {
  navigation: Navigation<PageParams>,
};

class RestaurantsTabScreen extends React.Component {
  props: Props;

  static navigationOptions = {
    headerLeft: <SearchBox />,
    headerStyle: {
      backgroundColor: "#FD996B",
    },
    tabBarLable: "Restaurants",
    headerTintColor: "#FFFFFF",
  };

  _renderItem = ({ item }) => (
    <ListItem
      id={item.id}
      imageSource={item.photo}
      storeName={item.name}
      address={item.address}
      tags={item.tags}
      money={item.priceRange}
      openTime={item.openTime}
      lastCall={item.closeTime}
      onPressItem={this._onPressItem}
      rating={2.5}
    />
  );

  state = { selected: (new Map(): Map<string, boolean>) };

  _keyExtractor = item => item.id;

  _onPressItem = (id: string, name: string) => {
    const { navigate } = this.props.navigation;
    navigate("Menu", {
      restaurantName: name,
      restaurantId: id,
      checkout: false,
    });
  };

  componentDidMount() {
    const { search } = this.props;
    search("test");
  }

  render() {
    const {
      items,
      navigation: { navigate },
    } = this.props;
    return (
      <View style={styles.container}>
        <FlatList
          data={items}
          extraData={this.state}
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem}
        />

        <Button
          onPress={() =>
            navigate("Menu", {
              restaurantName: "Miyamae",
              restaurantId: "00001",
            })
          }
          title="Miyamae - A Specific Restaurant Search Result"
        />

        <Button
          onPress={() => navigate("Login")}
          title="Dummy - if not logged in, automatically go to login screen"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default connect(
  state => ({
    items: state.restaurants,
  }),
  { search },
)(RestaurantsTabScreen);
