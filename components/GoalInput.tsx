import React, { Dispatch, SetStateAction, useState } from "react";
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Modal,
  Image,
} from "react-native";

interface GoalInputProps {
  addGoalHandler: (
    passedGoalToSave: string,
    clearGoalInput: Dispatch<SetStateAction<string>>
  ) => void;
  visible: boolean;
  setGoalInputModal: React.Dispatch<React.SetStateAction<boolean>>;
}

function GoalInput({
  addGoalHandler,
  visible,
  setGoalInputModal,
}: GoalInputProps) {
  const [goalInput, setGoalInput] = useState("");
  function goalInputHandler(enteredText: string) {
    setGoalInput(enteredText);
  }

  return (
    <Modal visible={visible} animationType="fade">
      <View style={styles.inputContainer}>
        <Image
          style={styles.imageStyle}
          source={require("../assets/goal.png")}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Your course goal!"
          onChangeText={goalInputHandler}
          value={goalInput}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              onPress={() => {
                addGoalHandler(goalInput, setGoalInput);
              }}
              title="Add Goal"
              color={"#884fd2"}
            />
          </View>
          <View style={styles.button}>
            <Button
              title="Cancel"
              color={"#f31282"}
              onPress={() => setGoalInputModal(false)}
            />
          </View>
        </View>
      </View>
    </Modal>
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
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#311b6b",
    padding: 16,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#e4f0ff",
    width: "100%",
    color:'#120438',
    padding: 16,
    borderRadius:6,
    backgroundColor: "#e4f0ff",
  },
  goalsContainer: {
    flex: 5,
  },
  buttonContainer: {
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    marginTop: 16,
  },
  button: {
    width: "30%",
    marginHorizontal: 8,
  },
  imageStyle: {
    width: 100,
    height: 100,
    margin: 20,
  },
});
