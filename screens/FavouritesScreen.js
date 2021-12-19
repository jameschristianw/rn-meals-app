import React from "react";
import { useSelector } from "react-redux";

import MealList from "../components/MealList";

const FavouritesScreen = (props) => {
  const { navigation, route } = props;

  const favouriteMeals = useSelector((state) => state.meals.favouriteMeals);

  return <MealList listData={favouriteMeals} navigation={navigation} />;
};

export default FavouritesScreen;
