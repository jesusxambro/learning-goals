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
import { GoalType, goalType } from "./types/GoalType";



export default function App() {
  const [goalInput, setGoalInput] = useState("");
  const [listOfGoals, setListOfGoals] = useState<goalType[]>([]);
  function goalInputHandler(enteredText: string) {
    setGoalInput(enteredText);
  }
  function addGoalHandler() {
    const goalToSave: goalType = { text: goalInput, index: Math.random() };
    setListOfGoals((currentGoals) => [...currentGoals, goalToSave]);
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Your course goal!"
          onChangeText={goalInputHandler}
        />
        <Button onPress={addGoalHandler} title="Add Goal" />
      </View>

      <View style={styles.goalsContainer}>
        <FlatList
          data={listOfGoals}
          renderItem={(item : ListRenderItemInfo<goalType>) => {
            const goalToSend : GoalType = item.item;
            return (
              <GoalItem item={item.item} />
            );
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
  }
});
