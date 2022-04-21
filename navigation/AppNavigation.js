import {StyleSheet, Pressable, Text, View} from "react-native";
import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {NavigationContainer} from "@react-navigation/native";
import Colors from "../constants/colors";
import {FontAwesome} from "@expo/vector-icons";
import {FontAwesome5} from "@expo/vector-icons";
import {MaterialCommunityIcons} from "@expo/vector-icons";

import ChoicesScreen from "../screens/ChoicesScreen";
import PlayerPointsListScreen from "../screens/PlayerPointsListScreen";
import PlayerScoredScreen from "../screens/PlayerScoredScreen";
import IconButton from "../utils/IconButtons";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={({navigation}) => ({
        headerStyle: {backgroundColor: Colors.svart5},
        headerTintColor: Colors.ghostwhite,
        tabBarStyle: {backgroundColor: Colors.svart5},
        tabBarActiveTintColor: Colors.basket,
        tabBarInactiveTintColor: Colors.dimgrey,
        tabBarLabelStyle: {fontFamily: "app-bold", fontSize: 12},
        headerRight: ({tintColor}) => (
          <Pressable onPress={() => navigation.navigate("Team")}>
            <FontAwesome name="home" size={24} color={tintColor} />
          </Pressable>
        ),
      })}
    >
      <Tab.Screen
        name="Scored"
        component={PlayerScoredScreen}
        options={{
          title: "A Player Scored",
          tabBarLabel: "Scored",
          tabBarIcon: () => (
            <FontAwesome5 name="basketball-ball" size={33} color="coral" />
          ),
        }}
      />
      <Tab.Screen
        name="List"
        component={PlayerPointsListScreen}
        options={{
          title: "List of points per Player",
          tabBarLabel: "List",
          tabBarIcon: () => (
            <MaterialCommunityIcons
              name="clipboard-list"
              size={33}
              color="coral"
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const AppNavigation = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {backroundColor: "black"},
            headerTintColor: Colors.ghostwhite,
            contentStyle: {backgroundColor: "black"},
          }}
        >
          <Stack.Screen
            name="Tabbar"
            component={MyTabs}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Team"
            component={ChoicesScreen}
            options={{
              title: "Start Screen",
              headerStyle: {backgroundColor: "black"},
              headerBackVisible: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default AppNavigation;

const styles = StyleSheet.create({});
