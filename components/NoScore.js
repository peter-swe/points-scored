import {Text, View} from "react-native";
import React from "react";

import Colors from "../constants/colors";

const NoScore = () => {
  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: Colors.svart5,
      }}
    >
      <Text
        style={{
          color: Colors.vit,
          fontSize: 21,
          fontFamily: "app-bold",
        }}
      >
        No Points Scored!
      </Text>
    </View>
  );
};

export default NoScore;
