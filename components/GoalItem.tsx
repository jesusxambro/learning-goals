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
    <View style={goalItemStyles.listGoals}>
        <Pressable android_ripple={{color:"#dddddd"}}
         style={({pressed}) => pressed && goalItemStyles.pressedItem}
        onPress={() => {
          Alert.alert(`Goal: ${item.text}`, 'Goal Details..', [
            {
              text: 'Delete', 
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
        <Text style={goalItemStyles.goalText}>{item.text}</Text>
    </Pressable>
      </View>
  );
}

export default GoalItem;

const goalItemStyles = StyleSheet.create({
  listGoals: {
    margin: 8,
    borderRadius: 6,
    color: "white",
    borderColor: "black",
    backgroundColor: "#5e0acc",
  },
  pressedItem:{
    opacity:0.5
  },

  goalText: {
    color: "white",
    padding: 8,
  },
});
