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
  const [goalInput, setGoalInput] = useState("");
  const [listOfGoals, setListOfGoals] = useState<GoalType[]>([]);

  function addGoalHandler(passedGoalToSave: string) {
    const goalToSave: GoalType = {
      text: passedGoalToSave,
      index: Math.random(),
    };
    setListOfGoals((currentGoals) => [...currentGoals, goalToSave]);
  }

  return (
    <View style={styles.appContainer}>

      <GoalInput addGoalHandler={addGoalHandler}/>

      <View style={styles.goalsContainer}>
        <FlatList
          data={listOfGoals}
          renderItem={(item : ListRenderItemInfo<GoalType>) => {
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
