import React from "react";

import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from "react-native";

const MealItem = (props) => {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      style={{
        ...styles.mealItem,
        // backgroundColor: props.color,
      }}
      onPress={props.onSelectMeal}
    >
      <View style={{ ...styles.mealRow, ...styles.mealHeader }}>
        <ImageBackground
          source={{ uri: props.imageUrl }}
          style={styles.backgroundImage}
        >
          <Text numberOfLines={1} style={styles.title}>
            {props.title}
          </Text>
        </ImageBackground>
      </View>
      <View style={{ ...styles.mealRow, ...styles.mealDetail }}>
        <Text>{props.duration}m</Text>
        <Text>{props.complexity.toUpperCase()}</Text>
        <Text>{props.affordability.toUpperCase()}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  mealItem: {
    height: 200,
    width: "100%",
    backgroundColor: "#ccc",
    marginVertical: 8,
    borderRadius: 12,
    overflow: "hidden",
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    elevation: 3,
  },
  mealRow: {
    flexDirection: "row",
  },
  mealHeader: {
    height: "80%",
  },
  mealDetail: {
    flex: 1,
    paddingHorizontal: 12,
    justifyContent: "space-between",
    alignItems: "center",
  },
  backgroundImage: {
    width: "100%",
    height: "100%",
    justifyContent: "flex-end",
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 18,
    color: "white",
    backgroundColor: "rgba(0,0,0,0.7)",
    paddingVertical: 4,
    paddingHorizontal: 12,
    textAlign: "center",
  },
});

export default MealItem;
