import {StyleSheet, Text, View} from "react-native";
import React from "react";
import Colors from "../constants/colors";

const Info = () => {
  return (
    <View>
      <Text style={styles.text}>1. enter scorer's number:</Text>
      <Text style={styles.text}>2. enter scored points:</Text>
    </View>
  );
};

export default Info;

const styles = StyleSheet.create({
  text: {
    fontFamily: "app-font",
    color: Colors.vit,
    fontSize: 17,
    textAlign: "center",
  },
});
