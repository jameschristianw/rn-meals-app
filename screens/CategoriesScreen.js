import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  FlatList,
  TouchableOpacity,
} from "react-native";

import { CATEGORIES } from "../data/dummy-data";
import Colors from "../constants/Colors";
import CategoryGridItem from "../components/CategoryGridItem";

const CategoriesScreen = (props) => {
  const { navigation, route } = props;

  const renderGridItem = (itemData) => {
    return (
      <CategoryGridItem
        title={itemData.item.title}
        color={itemData.item.color}
        onItemPress={() =>
          navigation.navigate("CategoryMealsScreen", {
            categoryId: itemData.item.id,
            title: itemData.item.title,
            color: itemData.item.color,
          })
        }
      />
    );
  };

  return (
    <FlatList
      key={(item, index) => item.id}
      numColumns={2}
      data={CATEGORIES}
      renderItem={renderGridItem}
      contentContainerStyle={{ padding: 8 }}
    />
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CategoriesScreen;
