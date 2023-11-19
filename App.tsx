import { useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
  FlatList,
  ListRenderItemInfo,
} from "react-native";
import GoalItem from "./components/GoalItem";
import { GoalType } from "./types/GoalType";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [listOfGoals, setListOfGoals] = useState<GoalType[]>([]);

  function addGoalHandler(
    passedGoalToSave: string,
    clearGoalInput: React.Dispatch<React.SetStateAction<string>>
  ) {
    const goalToSave: GoalType = {
      text: passedGoalToSave,
      index: Math.random(),
    };
    clearGoalInput("");
    setListOfGoals((currentGoals) => [...currentGoals, goalToSave]);
  }

  const deleteGoal = (indexToDelete: number) => {
    const currentListofGoals: GoalType[] = [];
    listOfGoals.map((goal) => {
      currentListofGoals.push(goal);
    });
    if (indexToDelete > -1) {
      currentListofGoals.splice(indexToDelete, 1);
    }
    setListOfGoals(currentListofGoals);
  };

  return (
    <View style={styles.appContainer}>
      <GoalInput addGoalHandler={addGoalHandler} />

      <View style={styles.goalsContainer}>
        <FlatList
          data={listOfGoals}
          renderItem={(item: ListRenderItemInfo<GoalType>) => {
            return <GoalItem item={item.item} deleteGoal={deleteGoal}/>;
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 50,
    paddingHorizontal: 16,
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#cccc",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccc",
    width: "70%",
    marginRight: 8,
    padding: 8,
  },
  goalsContainer: {
    flex: 5,
  },
});
