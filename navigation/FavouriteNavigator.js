import React from "react";
import { StatusBar, Platform } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  CardStyleInterpolators,
  createStackNavigator,
  TransitionSpecs,
} from "@react-navigation/stack";

import CategoriesScreen from "../screens/CategoriesScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import FavouritesScreen from "../screens/FavouritesScreen";

import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/HeaderButton";

import Colors from "../constants/Colors";
import HeaderOptions from "../constants/HeaderOptions";

const FavouriteStack = createStackNavigator();

const FavouriteNavigator = (props) => {
  const { navigation, route } = props;

  return (
    <FavouriteStack.Navigator
      initialRouteName="CategoriesScreen"
      screenOptions={{
        ...HeaderOptions,
      }}
    >
      <FavouriteStack.Screen
        name="FavouritesScreen"
        component={FavouritesScreen}
        options={{
          headerTitle: "Favourite Meals",
          headerLeft: () => (
            <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
              <Item
                title="Menu"
                iconName="menu"
                onPress={() => {
                  navigation.toggleDrawer();
                }}
              />
            </HeaderButtons>
          ),
        }}
      />
      <FavouriteStack.Screen
        name="MealDetailScreen"
        component={MealDetailScreen}
        options={({ route }) => ({
          headerBackTitle: " ",
          headerTitle: route.params.title,
          headerRight: () => (
            <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
              <Item
                title="Favourite"
                iconName="star"
                onPress={() => {
                  console.log("favourite");
                }}
              />
            </HeaderButtons>
          ),
        })}
      />
      <FavouriteStack.Screen
        name="CategoryMealsScreen"
        component={CategoryMealsScreen}
        options={({ route }) => ({
          headerBackTitle: " ",
          headerTitle: route.params.title,
        })}
      />
    </FavouriteStack.Navigator>
  );
};

export default FavouriteNavigator;
