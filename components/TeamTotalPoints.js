import {StyleSheet, Text, View} from "react-native";
import React from "react";
import Colors from "../constants/colors";
import {appContext} from "../store/app-context";

const TeamTotalPoints = () => {
  const {scorers} = appContext();
  const totalPoints = scorers.reduce((sum, scorer) => {
    return sum + +scorer.points;
  }, 0);

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.period}>Team total Points:</Text>
      </View>
      <View style={{paddingLeft: 21}}>
        <Text style={styles.sum}>
          {totalPoints} <Text style={styles.period}>p</Text>
        </Text>
      </View>
    </View>
  );
};

export default TeamTotalPoints;

const styles = StyleSheet.create({
  container: {
    padding: 8,
    borderRadius: 6,
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 22,
  },
  period: {
    fontFamily: "app-font",
    fontSize: 15,
    color: Colors.vit,
  },
  sum: {
    fontSize: 21,
    fontFamily: "app-bold",
    color: Colors.basket,
  },
});
