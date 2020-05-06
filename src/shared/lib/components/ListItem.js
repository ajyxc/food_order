/* @flow */

import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import EvilIcons from "react-native-vector-icons/EvilIcons";

let windowWidth = Dimensions.get("window").width;
type Props = {
  id: number,
  imageSource: any,
  storeName: string,
  rating?: number,
  address: string,
  tags: string,
  distance?: string,
  money: number,
  openTime: number,
  lastCall: number,
  onPressItem: (id: number, name: string) => {},
};

const StarRating = ({ rating }) => {
  const completeStar = [];
  const emptyStar = [];
  const remainder = rating % 1;

  if (remainder === 0) {
    for (let i = 0; i < rating; i++) {
      completeStar.push(
        <Ionicons style={styles.ratingStar} name="ios-star" size={17} />,
      );
    }

    for (let i = 0; i < 5 - rating; i++) {
      emptyStar.push(
        <Ionicons
          style={styles.ratingStar}
          name="ios-star-outline"
          size={17}
        />,
      );
    }

    return (
      <View style={styles.ratingWrapper}>
        {completeStar}
        {emptyStar}
      </View>
    );
  } else {
    let result = rating - 0.5;

    for (let i = 0; i < result; i++) {
      completeStar.push(
        <Ionicons style={styles.ratingStar} name="ios-star" size={17} />,
      );
    }

    for (let i = 0; i < 4 - result; i++) {
      emptyStar.push(
        <Ionicons
          style={styles.ratingStar}
          name="ios-star-outline"
          size={17}
        />,
      );
    }

    return (
      <View style={styles.ratingWrapper}>
        {completeStar}
        <Ionicons style={styles.ratingStar} name="ios-star-half" size={17} />
        {emptyStar}
      </View>
    );
  }
};

export default class ListItem extends React.Component {
  props: Props;
  _onPress = () => {
    this.props.onPressItem(this.props.id, this.props.storeName);
  };
  render() {
    const {
      imageSource,
      storeName,
      rating,
      address,
      tags,
      distance,
      money,
      openTime,
      lastCall,
    } = this.props;

    let remainder = rating ? rating % 1 : 0;
    let completeStar = [];
    let emptyStar = [];
    if (remainder === 0) {
      let result = rating || 0;
      for (let i = 0; i < result; i++) {
        completeStar.push(
          <Ionicons style={styles.ratingStar} name="ios-star" size={17} />,
        );
      }
      for (let i = 0; i < 5 - result; i++) {
        emptyStar.push(
          <Ionicons
            style={styles.ratingStar}
            name="ios-star-outline"
            size={17}
          />,
        );
      }
    } else {
      let result = (rating || 0) - 0.5;
      for (let i = 0; i < result; i++) {
        completeStar.push(
          <Ionicons style={styles.ratingStar} name="ios-star" size={17} />,
        );
      }
      for (let i = 0; i < 4 - result; i++) {
        emptyStar.push(
          <Ionicons
            style={styles.ratingStar}
            name="ios-star-outline"
            size={17}
          />,
        );
      }
    }

    let darkDolar = [];
    let weakDolar = [];
    for (let i = 0; i < money; i++) {
      darkDolar.push(<Text style={styles.blackDollar}>{"$"}</Text>);
    }
    for (let i = 0; i < 4 - money; i++) {
      weakDolar.push(<Text style={styles.greyDollar}>{"$"}</Text>);
    }

    let openClock = false;

    let date = new Date();
    let currentHour = date.getHours();
    let currentMinute = date.getMinutes();
    let currentTime = `${currentHour}${currentMinute}`;

    if (
      parseInt(currentTime) - openTime > 0 &&
      parseInt(currentTime) - lastCall < 0
    ) {
      openClock = true;
    }

    const lastCallString = `${lastCall
      .toString()
      .charAt(0)}${lastCall.toString().charAt(1)}:${lastCall
      .toString()
      .charAt(2)}${lastCall.toString().charAt(3)}`;

    return (
      <TouchableOpacity onPress={this._onPress}>
        <View style={styles.board}>
          <View style={styles.profileImageWrapper}>
            <Image source={imageSource} style={styles.profileImage} />
          </View>
          <View style={styles.profileDescription}>
            <Text style={styles.storeName}>{storeName}</Text>

            <StarRating rating={rating} />
            <Text style={styles.address}>{address}</Text>
            <Text style={styles.tags}>{tags}</Text>
            <Text
              style={styles.orderBy}
            >{`order by ${lastCallString} today`}</Text>
          </View>
          <View style={styles.rightColumn}>
            <Text style={styles.distance}>{`${distance || 0} km`}</Text>
            <View style={styles.price}>
              {darkDolar}
              {weakDolar}
            </View>
            {openClock && (
              <EvilIcons style={styles.orangeClock} name="clock" size={37} />
            )}
            {!openClock && (
              <EvilIcons style={styles.greyClock} name="clock" size={37} />
            )}
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  board: {
    height: 110,
    width: windowWidth,
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#D9D9D9",
  },
  profileImage: {
    width: 99,
    height: 99,
    borderRadius: 5,
  },
  profileImageWrapper: {
    width: 99,
    height: 99,
    top: 4,
    left: 10,
  },
  profileDescription: {
    flexDirection: "column",
    left: 20,
    width: windowWidth - 168,
  },
  storeName: {
    top: 8,
    height: 23,
    fontSize: 14,
    color: "#434343",
    fontWeight: "400",
  },
  ratingWrapper: {
    top: 6,
    flexDirection: "row",
  },
  ratingStar: {
    width: 17,
    height: 16,
    color: "#FD9941",
  },
  address: {
    top: 8,
    fontSize: 10,
    color: "#999999",
    fontWeight: "100",
  },
  tags: {
    top: 15,
    height: 16,
    fontSize: 10,
    color: "#434343",
    fontWeight: "100",
  },
  orderBy: {
    top: 15,
    fontWeight: "300",
  },
  rightColumn: {
    left: 20,
    flexDirection: "column",
  },
  distance: {
    top: 11,
    height: 16,
  },
  price: {
    top: 12,
    height: 18,
    flexDirection: "row",
  },
  blackDollar: {
    color: "#434343",
  },
  greyDollar: {
    color: "#D9D9D9",
  },
  orangeClock: {
    top: 32,
    color: "#FD9941",
  },
  greyClock: {
    top: 32,
    color: "#A9A9A9",
  },
});
