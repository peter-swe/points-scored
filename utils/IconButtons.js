import {StyleSheet, Pressable, View} from "react-native";
import React from "react";
import {MaterialIcons} from "@expo/vector-icons";

const IconButton = ({icon, color, size, onPress}) => {
  return (
    <Pressable
      onPress={onPress}
      style={({pressed}) => pressed && styles.pressed}
    >
      <View style={styles.buttonContainer}>
        <MaterialIcons name={icon} size={size} color={color} />
      </View>
    </Pressable>
  );
};

export default IconButton;

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.33,
  },
  buttonContainer: {
    borderRadius: 22,
    padding: 5,
    marginHorizontal: 9,
    marginBottom: 11,
  },
});
