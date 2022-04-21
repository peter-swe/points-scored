import {StyleSheet, Text, View} from "react-native";
import React from "react";

import Colors from "../constants/colors";

const Manual = () => {
  return (
    <View style={styles.container}>
      <View style={{marginBottom: 9}}>
        <Text style={styles.paragraf}>Instruction for Usage</Text>
      </View>
      <View style={{padding: 5}}>
        <Text style={styles.text}>1. Choose Current Team/New Team</Text>
      </View>
      <View style={{padding: 5}}>
        <Text style={styles.text}>
          2. Enter 1, 2 or 3p scored by button press
        </Text>
      </View>
      <View style={{padding: 5}}>
        <Text style={styles.text}>3. Enter scored points of your choice</Text>
      </View>
      <View style={{padding: 5}}>
        <Text style={styles.text}>
          4. Data is saved on your device until you delete.
        </Text>
      </View>
    </View>
  );
};

export default Manual;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "transparent",
    marginTop: 33,
    padding: 7,
  },
  paragraf: {
    color: Colors.ghostwhite,
    fontFamily: "app-bold",
    fontSize: 17,
    textAlign: "center",
  },
  text: {
    color: Colors.ghostwhite,
    fontFamily: "app-font",
    fontSize: 15,
  },
});
