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
import { StatusBar } from "expo-status-bar";

export default function App() {
  const [listOfGoals, setListOfGoals] = useState<GoalType[]>([]);
  const [isGoalModalOpen, setIsGoalModalOpen] = useState(false);

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
    setIsGoalModalOpen(false);
  }

  const deleteGoal = (indexToDelete: number) => {
    setListOfGoals((listOfGoals) => {
      return listOfGoals.filter((goal) => goal.index !== indexToDelete);
    });
  };

  return (
    <>
      <StatusBar style="light"/>

      <View style={styles.appContainer}>
        <View style={styles.buttonContainer}>
          <Button
            title="Add Goal"
            onPress={() => setIsGoalModalOpen(!isGoalModalOpen)}
            color={"#8566d4"}
          />
        </View>
        {isGoalModalOpen && (
          <GoalInput
            visible={isGoalModalOpen}
            setGoalInputModal={setIsGoalModalOpen}
            addGoalHandler={addGoalHandler}
          />
        )}

        <View style={styles.goalsContainer}>
          <FlatList
            data={listOfGoals}
            renderItem={(item: ListRenderItemInfo<GoalType>) => {
              return <GoalItem item={item.item} deleteGoal={deleteGoal} />;
            }}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 50,
    paddingHorizontal: 16,
    paddingTop: 50,
    backgroundColor: "#1e085a",
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
  buttonContainer: {
    paddingBottom: 5,
  },
});
