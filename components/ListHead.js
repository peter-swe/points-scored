import {StyleSheet, Text, View} from "react-native";
import React from "react";
import Colors from "../constants/colors";

const ListHead = () => {
  return (
    <View style={styles.head}>
      <Text style={styles.textHeader}>number</Text>
      <Text style={styles.textHeader}>points</Text>
    </View>
  );
};

export default ListHead;

const styles = StyleSheet.create({
  head: {
    flexDirection: "row",
    borderWidth: 0.3,
    justifyContent: "space-around",
    backgroundColor: Colors.basket,
    marginHorizontal: 44,
    marginTop: 7,
  },

  textHeader: {
    fontSize: 22,
    fontFamily: "app-bold",
    textTransform: "uppercase",
    color: Colors.gray,
  },
});
