import React from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import { Button } from "react-native-paper";
import Header from "./Header";
import Navbar from "./NavBar";
import styles from "./Designs/styles";
import { useState, useContext } from "react";
import Checkbox from "expo-checkbox";
import { useEffect } from "react";
import { getDailyTasks } from "../utils/api";
import { UserContext } from "./user";

export default function DailyTasks({ navigation }) {
  const [isChecked, setChecked] = useState({});
  const [dailyTasks, setDailyTasks] = useState([]);

  const { userID, setUserID } = useContext(UserContext);

  useEffect(() => {
    getDailyTasks(userID).then((tasks) => {
      setDailyTasks(tasks.tasks);

      setChecked(() => {
        const output = {};
        for (let i = 0; i < tasks.tasks.length; i++) {
          output[tasks.tasks[i].plantID] = false;
        }
        console.log(output, "output");
        return output;
      });
      console.log(tasks.tasks, "tasks");
      console.log(dailyTasks, "dailytasks");
    });
  }, []);

  const tickTask = (plantID) => {
    setChecked((currentState) => {
      const newState = { ...currentState };
      newState[plantID] = true;
      return newState
    });
  };

  return (
    <View style={styles.container}>
      <Header />
      <Navbar currentPage={"myGarden"} navigation={navigation} />
      <View>
        {dailyTasks.length !== 0 &&
          dailyTasks.map((task, index) => (
            <View style={styles.taskContainer} key={task.plantID}>
              <Text style={styles.plantName}>{task.plantName}</Text>
              <View style={styles.checkboxContainer}>
                <Checkbox
                  style={styles.checkbox}
                  value={isChecked[task.plantID]}
                  onValueChange={() => {
                    tickTask(task.plantID);
                  }}
                  color={isChecked[task.plantID] ? "#0C7C59" : undefined}
                />
                <Text style={styles.waterText}>Water</Text>
              </View>
            </View>
          ))}

          
      </View>
      <View >
      <Button
      buttonColor={theme.colors.tertiary}
      textColor={theme.colors.text}
      style={styles.button}
       mode="contained"
       compact="true"
       onPress={() => {
        
       }}>
            <Text
            style={{
              fontFamily: "Itim_400Regular",
              fontSize: 30,
              paddingTop: 15,
            }}>Confirm</Text>
          </Button>
          </View>
    </View>
  );
}
