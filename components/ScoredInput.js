import {StyleSheet, View} from "react-native";
import React from "react";

import AppButton from "../utils/AppButton";
import RoundButton from "../utils/RoundButton";
import PointsInput from "./form/PointsInput";
import NumberInput from "./form/NumberInput";
import {appContext} from "../store/app-context";

const ScoredInput = () => {
  const {onScored, onePointHandler, twoPointsHandler, threePointsHandler} =
    appContext();

  return (
    <>
      <View style={{marginTop: 25}}>
        <NumberInput />
        <View style={[styles.btn, {justifyContent: "center"}]}>
          <RoundButton onPress={onePointHandler}>1p</RoundButton>
          <RoundButton
            style={{marginHorizontal: 13}}
            onPress={twoPointsHandler}
          >
            2p
          </RoundButton>
          <RoundButton onPress={threePointsHandler}>3p</RoundButton>
        </View>
        <PointsInput />
      </View>
      <View style={styles.btn}>
        <View style={{flex: 1}}>
          <AppButton onPress={() => alert("clear")} style={{padding: 9}}>
            C
          </AppButton>
        </View>
        <View style={{flex: 1}}>
          <AppButton onPress={onScored}>ADD</AppButton>
        </View>
      </View>
    </>
  );
};

export default ScoredInput;

const styles = StyleSheet.create({
  roundBtn: {
    marginHorizontal: 45,
    marginBottom: 9,
  },
  btn: {
    flexDirection: "row",
    marginHorizontal: 45,
    marginBottom: 9,
    padding: 22,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  label: {
    padding: 11,
  },
});
