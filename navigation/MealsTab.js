import React from "react";
import { Platform, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { MaterialIcons } from "@expo/vector-icons";

import Colors from "../constants/Colors";
import MealsNavigator from "./MealsNavigator";
import FavouritesScreen from "../screens/FavouritesScreen";
import FavouriteNavigator from "./FavouriteNavigator";

// const MealsBottomNavigator =
//   Platform.OS === "android"
//     ? createMaterialBottomTabNavigator()
//     : createBottomTabNavigator();

const MealsBottomNavigator = createBottomTabNavigator();

const MealsTab = () => {
  return (
    <MealsBottomNavigator.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let iconSize = Platform.OS === "android" ? 24 : size;
          if (route.name === "Meals") iconName = "home";
          else if (route.name === "Favourite")
            iconName = focused ? "star" : "star-border";

          return (
            <MaterialIcons name={iconName} size={iconSize} color={color} />
          );
        },
        tabBarActiveTintColor:
          Platform.OS == "android" ? "white" : Colors.accentColor,
        tabBarInactiveTintColor: "gray",
        tabBarStyle: {
          backgroundColor:
            Platform.OS === "android" ? Colors.primaryColor : "white",
          padding: 4,
        },
        headerShown: false,
        tabBarLabelStyle: {
          fontFamily: "open-sans",
          padding: 4,
        },
      })}
    >
      <MealsBottomNavigator.Screen name="Meals" component={MealsNavigator} />
      <MealsBottomNavigator.Screen
        name="Favourite"
        component={FavouriteNavigator}
      />
    </MealsBottomNavigator.Navigator>
  );
};

export default MealsTab;
