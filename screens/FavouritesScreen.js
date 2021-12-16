import React from "react";

import MealList from "../components/MealList";
import { MEALS } from "../data/dummy-data";

const FavouritesScreen = (props) => {
  const { navigation, route } = props;

  const favouriteMeals = MEALS.filter(
    (meal) => meal.id === "m1" || meal.id === "m2"
  );

  return <MealList listData={favouriteMeals} navigation={navigation} />;
};

export default FavouritesScreen;
