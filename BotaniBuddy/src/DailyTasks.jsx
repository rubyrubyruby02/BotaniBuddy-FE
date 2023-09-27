import React from "react";
import { StyleSheet, View, Image, Text, ScrollView } from "react-native";
import { Button, Portal, Dialog } from "react-native-paper";
import Header from "./Header";
import Navbar from "./NavBar";
import styles from "./Designs/styles";
import { useState, useContext } from "react";
import Checkbox from "expo-checkbox";
import { useEffect } from "react";
import { getDailyTasks, patchDailyTasks } from "../utils/api";
import { UserContext } from "./user";

export default function DailyTasks({ navigation }) {
  const [isChecked, setChecked] = useState({});
  const [dailyTasks, setDailyTasks] = useState([]);
  const [isVisible, setIsVisible] = useState(false)
  const [isError, setIsError] = useState(false)

  const { userID, setUserID } = useContext(UserContext);

  useEffect(() => {
    getDailyTasks(userID).then((tasks) => {
      setDailyTasks(tasks.tasks);

      setChecked(() => {
        const output = {};
        for (let i = 0; i < tasks.tasks.length; i++) {
          output[tasks.tasks[i].plantID] = false;
        }
       
        return output;
      });
      
    });
  }, []);

  const tickTask = (plantID) => {
    setChecked((currentState) => {
      const newState = { ...currentState };
      if(newState[plantID] === false) {
        newState[plantID] = true
        setIsVisible(true)
      } else {
        newState[plantID] = false
        // setIsVisible(false)
      }
      return newState;
    });
    
  };

  const confirmation = (user_id, plant_id) => {
    // patchDailyTasks(user_id, plant_id)
  }

  const hideDialog = (plant_id) => {
    setIsVisible(false)
    tickTask(plant_id)

  }
  return (
    <View style={styles.container}>
      <Header />
      <Navbar  navigation={navigation} currentPage={"dailyTasks"}/>
      
        <ScrollView vertical style={{ flexGrow:0, width: "80%" }}>
          <View style={styles.tasksCard}>
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
                      confirmation(userID, task.plantID)
                    }}
                    color={isChecked[task.plantID] ? "#0C7C59" : undefined}
                  />
                  <Text style={styles.waterText}>Water</Text>
                </View>
                <Portal>
            {!isError ? (
              <Dialog visible={isVisible} onDismiss={hideDialog}>
                <Dialog.Title>Are you sure?</Dialog.Title>
                <Dialog.Content>
                  <Text variant="bodyMedium">
                    Are you sure?
                  </Text>
                </Dialog.Content>
                <Dialog.Actions>
                  <Button onPress={() => {
                    confirmation(userID, task.plantID)}
                    }>Yes</Button>
                  <Button onPress={() => {
                    hideDialog(task.plantID)

                  }}>No</Button>
                </Dialog.Actions>
              </Dialog>
            ) : (
              <Dialog visible={isVisible} onDismiss={hideDialog}>
                <Dialog.Title>Error!</Dialog.Title>
                <Dialog.Content>
                  <Text variant="bodyMedium">Error adding plant</Text>
                </Dialog.Content>
                <Dialog.Actions>
                  <Button onPress={hideDialog}>Done</Button>
                </Dialog.Actions>
              </Dialog>
            )}
          </Portal>
              </View>
              
            ))}
            </View>
        </ScrollView>

        

      <View>
      </View>
    </View>
  );
}
