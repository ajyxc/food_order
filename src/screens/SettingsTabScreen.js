/* @flow */
import React from "react";
import { Text, View, TouchableHighlight, StyleSheet } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import type { Navigation } from "shared/decls/navigation";

type NavTouchBoxProps = {
  boxStyle: any,
  pageName: string,
  navToPage: string,
  iconName: string,
  textStyle: any,
  iconStyle?: any,
  iconSize?: any,
  navigate: (name: string) => void,
};

const NavTouchBox = ({
  boxStyle,
  pageName,
  navToPage,
  iconName,
  textStyle,
  iconStyle,
  iconSize,
  navigate,
}: NavTouchBoxProps) => (
  <TouchableHighlight
    style={boxStyle}
    onPress={() => navigate(navToPage)}
    underlayColor="#D9D9D9"
  >
    <View style={styles.NavTouchBoxWrapper}>
      {navToPage !== "Login" && (
        <Ionicons style={iconStyle} name={iconName} size={iconSize} />
      )}

      <Text style={textStyle}> {pageName}</Text>
      {navToPage !== "Login" && (
        <View style={styles.rightContainer}>
          <EvilIcons style={styles.rightArrow} name="chevron-right" size={37} />
        </View>
      )}
    </View>
  </TouchableHighlight>
);

type PageParams = {};
type Props = {
  navigation: Navigation<PageParams>,
};

class SettingsTabScreen extends React.Component {
  props: Props;

  static navigationOptions = {
    headerTitle: "Settings",
    tabBarLable: "Settings",
    headerTintColor: "#FFFFFF",
    headerStyle: {
      backgroundColor: "#FD996B",
    },
  };

  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.container}>
        <View>
          <NavTouchBox
            boxStyle={styles.accountBox}
            pageName="Account"
            navToPage="Account"
            iconName="ios-contact"
            textStyle={styles.accountTextStyle}
            iconStyle={styles.accountIconStyle}
            iconSize={100}
            navigate={navigate}
          />
          <View>
            <NavTouchBox
              boxStyle={styles.paymentButton}
              pageName="Payment Info"
              navToPage="Payment"
              iconName="ios-card-outline"
              textStyle={styles.PHLTextStyle}
              iconStyle={styles.paymentIconStyle}
              iconSize={25}
              navigate={navigate}
            />
          </View>

          <View style={styles.groupButtonWrapper}>
            <NavTouchBox
              boxStyle={styles.groupButtonUpper}
              pageName="Help"
              navToPage="Help"
              iconName="ios-help-circle-outline"
              textStyle={styles.PHLTextStyle}
              iconStyle={styles.helpIconStyle}
              iconSize={25}
              navigate={navigate}
            />
            <View style={styles.groupButtonDivider} />
            <NavTouchBox
              boxStyle={styles.groupButtonLower}
              pageName="Legal"
              navToPage="Legal"
              iconName="ios-list-box-outline"
              textStyle={styles.PHLTextStyle}
              iconStyle={styles.legalIconStyle}
              iconSize={25}
              navigate={navigate}
            />
          </View>
        </View>

        <NavTouchBox
          boxStyle={styles.logOutBox}
          pageName="Log Out"
          navToPage="Login"
          iconName="ios-briefcase-outline"
          textStyle={styles.logoutTextStyle}
          navigate={navigate}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  NavTouchBoxWrapper: {
    flex: 1,
    flexDirection: "row",
  },
  accountBox: {
    height: 130,
    backgroundColor: "white",
    marginTop: 18,
    marginBottom: 30,
  },
  container: {
    flex: 1,
    justifyContent: "space-between",
    paddingHorizontal: 0,
  },
  paymentButton: {
    alignItems: "flex-start",
    backgroundColor: "white",
    height: 44,
    borderStyle: "solid",
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderBottomColor: "#D9D9D9",
    borderTopColor: "#D9D9D9",
    marginBottom: 30,
  },
  groupButtonWrapper: {
    backgroundColor: "white",
  },
  groupButtonUpper: {
    backgroundColor: "white",
    height: 44,
    borderStyle: "solid",
    borderBottomWidth: 0,
    borderTopWidth: 1,
    borderBottomColor: "#D9D9D9",
    borderTopColor: "#D9D9D9",
  },
  groupButtonDivider: {
    left: 22,
    borderBottomColor: "#D9D9D9",
    borderBottomWidth: 1,
  },
  groupButtonLower: {
    backgroundColor: "white",
    height: 44,
    borderStyle: "solid",
    borderBottomWidth: 1,
    borderTopWidth: 0,
    borderBottomColor: "#D9D9D9",
    borderTopColor: "#D9D9D9",
  },
  logOutBox: {
    height: 44,
    alignItems: "center",
    backgroundColor: "white",
    borderStyle: "solid",
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderBottomColor: "#D9D9D9",
    borderTopColor: "#D9D9D9",
    marginBottom: 68,
  },
  accountIconStyle: {
    top: 15,
    left: 21,
    color: "#A9A9A9",
    marginBottom: 30,
  },
  paymentIconStyle: {
    top: 9,
    left: 24,
    color: "#699CFC",
    marginBottom: 10,
  },
  helpIconStyle: {
    top: 9,
    left: 24,
    color: "#6ACA6B",
    marginBottom: 10,
  },
  legalIconStyle: {
    top: 9,
    left: 25,
    color: "#FD9BCB",
    marginBottom: 10,
  },
  rightContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  rightArrow: {
    left: 0,
    color: "#D9D9D9",
  },
  accountTextStyle: {
    top: 26,
    left: 35,
    height: 23,
    fontSize: 14,
    color: "#434343",
    fontWeight: "400",
  },
  PHLTextStyle: {
    top: 10,
    left: 42,
    height: 23,
    fontSize: 14,
    color: "#434343",
    fontWeight: "400",
  },
  logoutTextStyle: {
    top: 13,
    height: 23,
    fontSize: 14,
    color: "#999999",
    fontWeight: "400",
  },
});

export default SettingsTabScreen;
