import {FlatList, StyleSheet, View, Text} from "react-native";
import React from "react";

import ListHead from "./ListHead";
import Colors from "../constants/colors";

import {appContext} from "../store/app-context";

const PointsPerPlayerList = () => {
  const {scorers} = appContext();
  const sortedScorers = [...scorers].sort((a, b) => a.number - b.number);
  return (
    <>
      <ListHead />
      <FlatList
        data={sortedScorers}
        renderItem={({item}) => (
          <View style={styles.row}>
            <Text style={styles.num}>{item.number}</Text>
            <Text style={styles.num}>{item.points}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
    </>
  );
};

export default PointsPerPlayerList;

const styles = StyleSheet.create({
  num: {
    fontSize: 17,
    fontFamily: "app-font",
    // color: Colors.ghostwhite,
  },
  row: {
    padding: 11,
    backgroundColor: Colors.list,
    flexDirection: "row",
    justifyContent: "space-around",
    borderBottomWidth: 0.3,
    marginHorizontal: 44,
  },
});
