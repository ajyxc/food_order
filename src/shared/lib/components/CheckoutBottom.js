/* @flow */

import React, { Component } from "react";
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  Modal,
  TouchableHighlight,
  TextInput,
} from "react-native";

const windowWidth: number = Dimensions.get("window").width;
const subTotalwidth: number = windowWidth * 0.464;
const rightButtonWidth: number = windowWidth * 0.298;

type Props = {
  subTotal: number,
  taxRate: number,
  total: number,
  tax: number,
};

export default class CheckoutBottom extends React.Component {
  props: Props;

  state = {
    modalVisible: false,
    myNumber: "",
    tips: 0,
  };

  onTextChanged(text: string) {
    this.setState({ myNumber: text });
    this.setState({ tips: parseFloat(text) });
  }

  setModalVisible(visible: boolean) {
    this.setState({ modalVisible: visible });
  }

  render() {
    const { subTotal, taxRate } = this.props;
    let tax: number = subTotal * taxRate;
    let total: number = subTotal + tax + this.state.tips;

    return (
      <View style={styles.board}>
        <View style={styles.leftWrapper}>
          <View style={styles.column}>
            <View style={styles.row}>
              <Text style={styles.greyText}>Sub Total:</Text>
              <Text style={styles.blackText}>{`$${subTotal.toFixed(2)}`}</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.greyText}>Tax: </Text>
              <Text style={styles.blackText}>{`$${tax.toFixed(2)}`}</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.greyText}>Tip: </Text>

              <Modal
                animationType="slide"
                transparent={false}
                visible={this.state.modalVisible}
              >
                <View style={styles.popupCenter}>
                  <View>
                    <TextInput
                      keyboardType="numeric"
                      onChangeText={text => this.onTextChanged(text)}
                      value={this.state.myNumber}
                    />
                    <TouchableHighlight
                      underlayColor="white"
                      onPress={() => {
                        this.setModalVisible(!this.state.modalVisible);
                      }}
                    >
                      <Text>Hide Modal</Text>
                    </TouchableHighlight>
                  </View>
                </View>
              </Modal>
              <TouchableHighlight
                underlayColor="white"
                onPress={() => {
                  this.setModalVisible(true);
                }}
              >
                <Text style={styles.orangeText}>Add Tip</Text>
              </TouchableHighlight>
            </View>
            <View style={styles.row}>
              <Text style={styles.greyText}>Total: </Text>
              <Text style={styles.blackText}>{`$${total.toFixed(2)}`}</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.greyText}>Pay With:</Text>
              <View style={styles.payMethodButton}>
                <Text style={[styles.buttonText, styles.payMethodButtonText]}>
                  Apple Pay
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.border} />
          <View style={[styles.rightWrapper, styles.column]}>
            <View style={styles.instructionButton}>
              <Text style={[styles.instructionButtonText, styles.buttonText]}>
                Add Special Instruction
              </Text>
            </View>
            <View style={styles.placeOrderButton}>
              <Text style={[styles.placeOrderButtonText, styles.buttonText]}>
                {"\n"}Place Order{"\n"}
              </Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  board: {
    height: 143,
    width: windowWidth,
    borderWidth: 1,
    borderColor: "#D9D9D9",
  },
  leftWrapper: {
    top: 12,
    left: 22,
    width: subTotalwidth,
    height: 115,
    flexDirection: "row",
    alignItems: "center",
  },
  column: {
    height: 115,
    flexDirection: "column",
    justifyContent: "space-between",
  },
  row: {
    width: subTotalwidth,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  border: {
    height: 112,
    left: 22.5,
    borderColor: "#D9D9D9",
    borderWidth: 0.5,
    width: 1,
  },
  greyText: {
    color: "#999999",
    fontWeight: "100",
    fontSize: 15,
  },
  blackText: {
    color: "#434343",
    fontWeight: "100",
    fontSize: 15,
  },
  orangeText: {
    color: "#FD6721",
    fontWeight: "100",
    fontSize: 15,
  },
  payMethod: {
    color: "#FD6721",
    borderWidth: 1,
  },
  rightWrapper: {
    left: 45,
    height: 112,
    width: rightButtonWidth,
  },
  payMethodButton: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: "#FD6721",
  },
  payMethodButtonText: {
    color: "#FD6721",
  },
  instructionButton: {
    height: 44,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#999999",
    justifyContent: "center",
  },
  instructionButtonText: {
    color: "#999999",
  },
  placeOrderButton: {
    height: 55,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#157EFB",
    justifyContent: "center",
  },
  placeOrderButtonText: {
    color: "#157EFB",
  },
  buttonText: {
    backgroundColor: "transparent",
    fontSize: 12,
    fontWeight: "100",
    textAlign: "center",
  },
  popupCenter: {
    backgroundColor: "#999999",
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
});
