import React, { useEffect } from "react";
import { View, Text, StyleSheet, Button, FlatList } from "react-native";
import MealItem from "../components/MealItem";

import { CATEGORIES, MEALS } from "../data/dummy-data";

const CategoryMealsScreen = (props) => {
  const { navigation, route } = props;
  const { categoryId } = route.params;

  const displayedMeals = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(categoryId) >= 0
  );

  const renderMealItem = (itemData) => {
    return (
      <MealItem
        title={itemData.item.title}
        duration={itemData.item.duration}
        affordability={itemData.item.affordability}
        complexity={itemData.item.complexity}
        imageUrl={itemData.item.imageUrl}
        onSelectMeal={() =>
          navigation.navigate("MealDetailScreen", {
            mealId: itemData.item.id,
            title: itemData.item.title,
            // color: itemData.item.color,
          })
        }
      />
    );
  };

  return (
    <View style={styles.screen}>
      <FlatList
        data={displayedMeals}
        renderItem={renderMealItem}
        contentContainerStyle={{ padding: 8, paddingHorizontal: 16 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
  },
});

export default CategoryMealsScreen;
