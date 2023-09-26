import { StyleSheet, View, FlatList } from "react-native";
import { CATEGORIES, MEALS } from "../../data/dummy-data";
import { useLayoutEffect } from "react";
import MealsList from "./MealsList";

function MealsOverview({ route, navigation }) {
  const catId = route.params.categoryId;
  const displayedMeals = MEALS.filter((item) => {
    return item.categoryIds.indexOf(catId) >= 0;
  });

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === catId
    ).title;
    navigation.setOptions({
      title: categoryTitle,
    });
  });

  return <MealsList item={displayedMeals}/>
}

export default MealsOverview;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
