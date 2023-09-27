import React from "react";
import { StyleSheet, View, Image, Text, ScrollView } from "react-native";
import { Button, Portal, Dialog, useTheme } from "react-native-paper";
import { useFonts, Itim_400Regular } from "@expo-google-fonts/itim";
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
  const [isPatched, setIsPatched] = useState(false)
  const [fontsLoaded] = useFonts({ Itim_400Regular });
  const [isLoading, setIsLoading] = useState(false)
  const theme = useTheme();

  const { userID, setUserID } = useContext(UserContext);
  console.log(dailyTasks.length, 'dailytasks length')
  useEffect(() => {
    setIsLoading(true)
    getDailyTasks(userID).then((tasks) => {
      console.log(tasks.tasks, 'in useEffect')
      setDailyTasks(tasks.tasks);

      setChecked(() => {
        const output = {};
        for (let i = 0; i < tasks.tasks.length; i++) {
          output[tasks.tasks[i].plantID] = false;
        }
       
        return output;
      });
      setIsLoading(false)
    });

  }, [isPatched]);

  const tickTask = (plantID) => {
    setChecked((currentState) => {
      const newState = { ...currentState };
      if(newState[plantID] === false) {
        newState[plantID] = true
      } else {
        newState[plantID] = false
      }
      return newState;
    });
    
  };

  const confirmation = async () => {
    const plantsToPatch = []
    for(const key in isChecked) {
      if(isChecked[key] === true) {
        plantsToPatch.push(key)
      }
    }

    for(let i = 0; i < plantsToPatch.length; i++) {
       await patchDailyTasks(userID, plantsToPatch[i])
      console.log(plantsToPatch[i], 'in for loop')
    }
    // plantsToPatch.forEach( async (plant_id) => {
    //   await
      
    // })
    console.log(plantsToPatch)
    setIsPatched((b) => {
      return !b
    })
  }

    


  return (
    <View style={styles.container}>
      <Header />
      <Navbar  navigation={navigation} currentPage={"dailyTasks"}/>

      {isLoading ? <Text> reallyLoading </Text> : <><ScrollView vertical style={{ flexGrow:0, width: "80%" }}>
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
                      tickTask(task.plantID)
                      
                    }}
                    color={isChecked[task.plantID] ? "#0C7C59" : undefined}
                  />
                  <Text style={styles.waterText}>Water</Text>
                </View>
            
              </View>
              
            ))}
            
            </View>
        </ScrollView>
        
        

      <View>
      <Button
            mode={"contained"}
            buttonColor={theme.colors.tertiary}
            style={styles.button}
            textColor={theme.colors.text}

            onPress={() => {
              confirmation()
            }}
            >
              <Text style={{
                fontFamily: "Itim_400Regular",
                paddingTop: 15,
                fontSize: 30,
    
              }}>Confirm</Text>
            </Button>
      </View>
      </>}
      
        
    </View>
  );
}
