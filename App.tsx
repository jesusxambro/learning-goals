import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  const [goalInput, setGoalInput] = useState("");
  const [listOfGoals, setListOfGoals] = useState<string[]>([]);
  function goalInputHandler(enteredText: string){
    setGoalInput(enteredText)
  };
  function addGoalHandler(){
    const goalToSave = goalInput;
    setGoalInput("");
    setListOfGoals(currentGoals => [...currentGoals, goalToSave]);
  };

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} 
        placeholder="Your course goal!"
        onChangeText={goalInputHandler}
        />
        <Button onPress={addGoalHandler} title="Add Goal"/>
      </View>
      <View style={styles.goalsContainer}>
        {listOfGoals.map((goal, index)=>{
          return(
            <View style={styles.listGoals} key={index}>
              <Text style={styles.goalText}>{goal}</Text>
            </View>
          )
        })}
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  appContainer:{
    flex:1,
    padding:50,
    paddingHorizontal:16,
  },
  inputContainer:{
    flex: 1,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    paddingBottom:24,
    borderBottomWidth:1,
    borderBottomColor:'#cccc',
  },
  textInput:{
    borderWidth:1,
    borderColor:'#cccc',
    width:'70%',
    marginRight:8,
    padding:8,
  },
  goalsContainer:{
    flex:5,
  },
  listGoals:{
    margin:8,
    borderRadius:6,
    padding:8,
    color:'white',
    borderColor:'black',
    backgroundColor:'#5e0acc'
  },
  goalText:{
    color:'white',
  }
});
