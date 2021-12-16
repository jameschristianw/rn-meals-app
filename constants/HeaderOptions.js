import { Platform } from "react-native";
import { CardStyleInterpolators } from "@react-navigation/stack";
import Colors from "./Colors";

export default {
  headerStyle: {
    backgroundColor: Platform.OS === "android" ? Colors.primaryColor : "white",
    borderBottomWidth: Platform.OS === "android" ? 0 : 1,
  },
  headerTintColor: Platform.OS === "android" ? "white" : Colors.primaryColor,
  cardStyleInterpolator:
    Platform.OS === "android"
      ? CardStyleInterpolators.forFadeFromBottomAndroid
      : CardStyleInterpolators.forHorizontalIOS,
  headerTitleStyle: {
    fontFamily: "open-sans",
  },
};
