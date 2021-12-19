import React, { useEffect } from "react";
import { useSelector } from "react-redux";

import MealList from "../components/MealList";

import { CATEGORIES } from "../data/dummy-data";

const CategoryMealsScreen = (props) => {
  const { navigation, route } = props;
  const { categoryId } = route.params;

  const availableMeals = useSelector((state) => state.meals.filteredMeals);

  const displayedMeals = availableMeals.filter(
    (meal) => meal.categoryIds.indexOf(categoryId) >= 0
  );

  return <MealList listData={displayedMeals} navigation={navigation} />;
};

export default CategoryMealsScreen;
