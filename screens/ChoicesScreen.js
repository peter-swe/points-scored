import {StyleSheet, Image, View} from "react-native";
import React from "react";

import AppButton from "../utils/AppButton";
import bild from "../assets/img/bb.png";
import Manual from "../components/Manual";
import {StatusBar} from "expo-status-bar";
import {appContext} from "../store/app-context";

const ChoicesScreen = () => {
  const {newTeam} = appContext();
  return (
    <View style={styles.container}>
      <StatusBar styel="light" />
      <View style={{marginLeft: 5}}>
        <Manual />
      </View>
      <View style={styles.imgContainer}>
        <Image source={bild} style={styles.img} />
      </View>
      <View style={styles.btn}>
        <View style={{flex: 1}}>
          <AppButton
            onPress={() => navigation.navigate("List")}
            style={{padding: 9}}
          >
            Current Team
          </AppButton>
        </View>
        <View style={{flex: 1}}>
          <AppButton onPress={newTeam}>New Team</AppButton>
        </View>
      </View>
    </View>
  );
};

export default ChoicesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "black",
  },
  btn: {
    flexDirection: "row",
    marginHorizontal: 45,
    marginBottom: 9,
    padding: 22,
    alignItems: "center",
  },
  img: {
    width: 150,
    height: 150,
    margin: 21,
  },
  imgContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
});
