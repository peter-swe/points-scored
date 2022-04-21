import {StyleSheet, View} from "react-native";
import React from "react";

import Input from "./Input";
import {appContext} from "../../store/app-context";

const PointsInput = () => {
  const {points, setPoints} = appContext();
  return (
    <View>
      <Input
        label="enter scored Points:"
        inputConfig={{
          keyboardType: "number-pad",
          value: points,
          onChangeText: setPoints,
        }}
      />
    </View>
  );
};

export default PointsInput;

const styles = StyleSheet.create({});
