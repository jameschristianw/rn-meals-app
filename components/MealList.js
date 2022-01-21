import React from "react";
import { FlatList, StyleSheet, SafeAreaView } from "react-native";

import MealItem from "../components/MealItem";

const MealList = (props) => {
  const renderMealItem = (itemData) => {
    return (
      <MealItem
        title={itemData.item.title}
        duration={itemData.item.duration}
        affordability={itemData.item.affordability}
        complexity={itemData.item.complexity}
        imageUrl={itemData.item.imageUrl}
        onSelectMeal={() =>
          props.navigation.navigate("MealDetailScreen", {
            mealId: itemData.item.id,
            title: itemData.item.title,
            // color: itemData.item.color,
          })
        }
      />
    );
  };

  return (
    <SafeAreaView style={styles.screen}>
      <FlatList
        keyExtractor={(item, index) => {
          return index.toString();
        }}
        data={props.listData}
        renderItem={renderMealItem}
        contentContainerStyle={{ padding: 8, paddingHorizontal: 16 }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
  },
});

export default MealList;
