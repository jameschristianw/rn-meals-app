import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

import MealsTab from "../navigation/MealsTab";
import FiltersNavigation from "./FiltersNavigation";
import Colors from "../constants/Colors";

const Drawer = createDrawerNavigator();

const MainDrawer = (props) => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerLabelStyle: {
          color: Colors.accentColor,
          fontFamily: "open-sans",
        },
      }}
    >
      <Drawer.Screen name="Home" component={MealsTab} />
      <Drawer.Screen name="Filters" component={FiltersNavigation} />
    </Drawer.Navigator>
  );
};

export default MainDrawer;
