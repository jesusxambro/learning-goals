import React, { Dispatch, SetStateAction, useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

interface GoalInputProps {
  addGoalHandler: (
    passedGoalToSave: string,
    clearGoalInput: Dispatch<SetStateAction<string>>
  ) => void;
}

function GoalInput({ addGoalHandler }: GoalInputProps) {
  const [goalInput, setGoalInput] = useState("");
  function goalInputHandler(enteredText: string) {
    setGoalInput(enteredText);
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="Your course goal!"
        onChangeText={goalInputHandler}
        value={goalInput}
      />
      <Button onPress={() => {addGoalHandler(goalInput, setGoalInput)}} title="Add Goal" />
    </View>
  );
}

export default GoalInput;

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
