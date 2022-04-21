import {StyleSheet, Text, View, Pressable} from "react-native";
import React from "react";

import Colors from "../constants/colors";

const RoundButton = ({children, onPress, style}) => {
  return (
    <View style={style}>
      <Pressable
        onPress={onPress}
        style={({pressed}) => pressed && styles.pressed}
      >
        <View style={styles.btnRound}>
          <Text style={styles.buttonText}>{children}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default RoundButton;

const styles = StyleSheet.create({
  button: {
    borderRadius: 4,
    padding: 8,
    backgroundColor: Colors.basket,
  },

  buttonText: {
    color: "white",
    textAlign: "center",
    fontFamily: "app-bold",
  },

  pressed: {
    opacity: 0.75,
    // backgroundColor: Colors.gainsboro,
    borderRadius: 4,
  },
  btnRound: {
    width: 37,
    height: 37,
    borderRadius: 74,
    backgroundColor: "coral",
    justifyContent: "center",
  },
});
