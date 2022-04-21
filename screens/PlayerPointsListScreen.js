import {StyleSheet, View} from "react-native";
import React from "react";

import PointsPerPlayerList from "../components/PointsPerPlayerList";
import NoScore from "../components/NoScore";
import {appContext} from "../store/app-context";

const PlayerPointsListScreen = () => {
  const {scorers} = appContext();

  return (
    <View style={styles.screen}>
      {scorers.length === 0 ? <NoScore /> : <PointsPerPlayerList />}
    </View>
  );
};

export default PlayerPointsListScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "black",
  },
});
