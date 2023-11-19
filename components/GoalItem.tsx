import React from "react";
import {
  View,
  StyleSheet,
  ListRenderItemInfo,
  Text,
  Pressable,
  Alert,
} from "react-native";
import { GoalType } from "../types/GoalType";

interface goalItemInterface {
  item: GoalType;
  deleteGoal: (indexToDelete: number) => void;
}

function GoalItem({ item, deleteGoal }: goalItemInterface) {
  return (
    <Pressable onPress={() => {
      Alert.alert(`Goal: ${item.text}`, 'Goal Details..', [
        {
          text: 'Delete', 
          // found a big bug, it deletes the wrong one... 
          onPress: () => deleteGoal(item.index),
          style:'destructive'
        },
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ]);
    }} >
      <View style={goalItemStyles.listGoals}>
        <Text style={goalItemStyles.goalText}>{item.text}</Text>
      </View>
    </Pressable>
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
