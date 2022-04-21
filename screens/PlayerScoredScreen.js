import {StyleSheet, View} from "react-native";
import React, {useContext} from "react";

import ScoredInput from "../components/ScoredInput";
import TeamTotalPoints from "../components/TeamTotalPoints";

import Info from "../components/Info";
import {appContext} from "../store/app-context";

const PlayerScoredScreen = () => {
  const {scorers} = appContext();
  return (
    <>
      <View style={styles.screen}>
        {scorers.length === 0 ? (
          <>
            <View>
              <Info />
            </View>
            <View>
              <ScoredInput />
            </View>
          </>
        ) : (
          <>
            <View>
              <TeamTotalPoints />
            </View>
            <View>
              <ScoredInput />
            </View>
          </>
        )}
      </View>
    </>
  );
};

export default PlayerScoredScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "black",
  },
});
