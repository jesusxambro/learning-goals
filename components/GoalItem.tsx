import React from "react";
import { View, StyleSheet, ListRenderItemInfo, Text } from "react-native";
import { GoalType } from "../types/GoalType";

interface goalItemInterface{
    item: GoalType;
}

function GoalItem({item}: goalItemInterface) {
  return (
    <View style={goalItemStyles.listGoals}>
      <Text style={goalItemStyles.goalText}>{item.text}</Text>
    </View>
  );
}

export default GoalItem;

const goalItemStyles = StyleSheet.create({
  listGoals: {
    margin: 8,
    borderRadius: 6,
    padding: 8,
    color: "white",
    borderColor: "black",
    backgroundColor: "#5e0acc",
  },
  goalText: {
    color: "white",
  },
});
