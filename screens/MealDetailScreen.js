import React, { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { View, Text, StyleSheet, Button, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import DefaultText from "../components/DefaultText";
import { toggleFavourite } from "../store/actions/meals";

const ListItem = (props) => {
  return (
    <View style={styles.listItem}>
      <DefaultText>{props.children}</DefaultText>
    </View>
  );
};

const MealDetailScreen = (props) => {
  const { navigation, route } = props;
  const { mealId } = route.params;

  const availableMeals = useSelector((state) => state.meals.meals);

  const selectedMeal = availableMeals.find((meal) => meal.id == mealId);

  const dispatch = useDispatch();
  const toggelFavouriteHandler = useCallback(() => {
    dispatch(toggleFavourite(mealId));
  }, [dispatch, mealId]);

  useEffect(() => {
    navigation.setParams({ toggleFav: toggelFavouriteHandler });
  }, [toggelFavouriteHandler]);

  return (
    <ScrollView>
      <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
      <View style={styles.details}>
        <DefaultText>{selectedMeal.duration}m</DefaultText>
        <DefaultText>{selectedMeal.complexity.toUpperCase()}</DefaultText>
        <DefaultText>{selectedMeal.affordability.toUpperCase()}</DefaultText>
      </View>
      <View style={{ marginHorizontal: 12, marginBottom: 8 }}>
        <Text style={styles.title}>Ingredients</Text>
        {selectedMeal.ingredients.map((meal) => (
          <ListItem>{meal}</ListItem>
        ))}
        {/* <Text> list of ingredients</Text> */}
        <Text style={styles.title}>Steps</Text>
        {selectedMeal.steps.map((meal) => (
          <ListItem>{meal}</ListItem>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 200,
    width: "100%",
  },
  details: {
    flexDirection: "row",
    padding: 15,
    justifyContent: "space-around",
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 18,
    marginVertical: 8,
    textAlign: "center",
  },
  listItem: {
    borderColor: "#ccc",
    borderWidth: 1,
    padding: 8,
    marginVertical: 4,
  },
});

export default MealDetailScreen;
