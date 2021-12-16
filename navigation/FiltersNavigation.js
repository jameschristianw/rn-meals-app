import React, { useState } from "react";
import { Platform, LogBox } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { CardStyleInterpolators } from "@react-navigation/stack";

import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/HeaderButton";

import FiltersScreen from "../screens/FiltersScreen";

import Colors from "../constants/Colors";
import HeaderOptions from "../constants/HeaderOptions";
import { FilterContext } from "../components/context/FilterContext";

const FilterStack = createStackNavigator();

LogBox.ignoreLogs([
  "Non-serializable values were found in the navigation state. Check:",
]);

const FiltersNavigation = (props) => {
  const { navigation, route } = props;

  const [filters, setFilters] = useState({});

  const saveFilter = (filters) => {};

  return (
    <FilterContext.Provider value={filters}>
      <FilterStack.Navigator screenOptions={{ ...HeaderOptions }}>
        <FilterStack.Screen
          name="FiltersScreen"
          component={FiltersScreen}
          options={{
            headerTitle: "Filters",
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
            headerRight: () => (
              <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                <Item
                  title="Save"
                  iconName="save"
                  onPress={navigation.getState("save")}
                />
              </HeaderButtons>
            ),
          }}
        />
      </FilterStack.Navigator>
    </FilterContext.Provider>
  );
};

export default FiltersNavigation;
