import {StyleSheet, Text, View, TextInput} from "react-native";
import React from "react";
import Colors from "../../constants/colors";

const Input = ({label, style, inputConfig}) => {
  return (
    <View style={[styles.inputContainer, style]}>
      <Text style={styles.label}>{label}</Text>
      <TextInput style={styles.input} {...inputConfig} />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  inputContainer: {
    marginHorizontal: 4,
    marginVertical: 7,
  },
  label: {
    fontFamily: "app-bold",
    fontSize: 13,
    color: Colors.ghostwhite,
    marginBottom: 5,
    marginHorizontal: 44,
  },
  input: {
    backgroundColor: Colors.ghostwhite,
    color: Colors.basket,
    fontFamily: "app-font",
    fontSize: 17,
    height: 31,
    padding: 9,
    marginHorizontal: 44,
  },
});
