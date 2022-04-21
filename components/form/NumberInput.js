import {StyleSheet, View} from "react-native";
import React from "react";
import Input from "./Input";
import {appContext} from "../../store/app-context";

const NumberInput = () => {
  const {number, setNumber} = appContext();

  return (
    <View>
      <Input
        label="enter Scorer Number:"
        inputConfig={{
          keyboardType: "number-pad",
          value: number,
          onChangeText: setNumber,
        }}
      />
    </View>
  );
};

export default NumberInput;

const styles = StyleSheet.create({});
