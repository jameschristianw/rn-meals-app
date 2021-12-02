import React from "react";
import { StatusBar, Platform } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  CardStyleInterpolators,
  createStackNavigator,
  TransitionSpecs,
} from "@react-navigation/stack";

import CategoriesScreen from "../screens/CategoriesScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";

import Colors from "../constants/Colors";

const Stack = createStackNavigator();

const MealsNavigator = () => {
  const headerOptions = {
    headerStyle: {
      backgroundColor: Platform.OS === "android" ? Colors.primaryColor : "",
    },
    headerTintColor: Platform.OS === "android" ? "white" : Colors.primaryColor,
    cardStyleInterpolator:
      Platform.OS === "android"
        ? CardStyleInterpolators.forFadeFromBottomAndroid
        : CardStyleInterpolators.forHorizontalIOS,
  };

  return (
    <NavigationContainer>
      <StatusBar
        barStyle={Platform.OS === "android" ? "light-content" : "dark-content"}
        backgroundColor={Colors.primaryColor}
      />
      <Stack.Navigator
        initialRouteName="CategoriesScreen"
        screenOptions={{
          ...headerOptions,
        }}
      >
        <Stack.Screen
          name="CategoriesScreen"
          component={CategoriesScreen}
          options={{
            headerTitle: "Meal Categories",
          }}
        />
        <Stack.Screen
          name="MealDetailScreen"
          component={MealDetailScreen}
          options={({ route }) => ({
            ...headerOptions,
            headerBackTitle: "",
            headerTitle: route.params.title,
          })}
        />
        <Stack.Screen
          name="CategoryMealsScreen"
          component={CategoryMealsScreen}
          options={({ route }) => ({
            ...headerOptions,
            headerBackTitle: "",
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MealsNavigator;
