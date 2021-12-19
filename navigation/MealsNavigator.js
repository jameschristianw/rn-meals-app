import React from "react";
import { Platform } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  CardStyleInterpolators,
  createStackNavigator,
} from "@react-navigation/stack";

import CategoriesScreen from "../screens/CategoriesScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";

import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/HeaderButton";

import Colors from "../constants/Colors";
import FiltersScreen from "../screens/FiltersScreen";
import HeaderOptions from "../constants/HeaderOptions";

const MealsStack = createStackNavigator();

const MealsNavigator = (props) => {
  const { navigation, route } = props;

  return (
    <MealsStack.Navigator
      initialRouteName="CategoriesScreen"
      screenOptions={{
        ...HeaderOptions,
      }}
    >
      <MealsStack.Screen
        name="CategoriesScreen"
        component={CategoriesScreen}
        options={{
          headerTitle: "Meal Categories",
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
      <MealsStack.Screen
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
                onPress={() => route.params.toggleFav()}
              />
            </HeaderButtons>
          ),
        })}
      />
      <MealsStack.Screen
        name="CategoryMealsScreen"
        component={CategoryMealsScreen}
        options={({ route }) => ({
          headerBackTitle: " ",
          headerTitle: route.params.title,
        })}
      />
    </MealsStack.Navigator>
  );
};

export default MealsNavigator;
