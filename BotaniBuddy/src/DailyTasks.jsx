import React from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import Header from "./Header";
import Navbar from "./NavBar";
import styles from "./Designs/styles";
import { useState } from "react";
import Checkbox from "expo-checkbox";
import { useEffect } from "react";
import { getDailyTasks } from "../utils/api";

export default function DailyTasks({ navigation }) {
  //   const [isChecked, setChecked] = useState(false);
  //   const [dailyTasks, setDailyTasks] = useState({
  //     tasks: [
  //       {
  //         plantName: "European Silver Fir",
  //         task: { toBeWateredAgain: "21-09-2003" },
  //         plantID: "6513ea3bc0a2f8360b9e4a93",
  //       },
  //       {
  //         plantName: "Pyramidalis Silver Fir",
  //         task: { toBeWateredAgain: "21-09-2003" },
  //         plantID: "6513ea3bc0a2f8360b9e4a9c",
  //       },
  //     ],
  //   });

  const [dailyTasks, setDailyTasks] = useState({
    tasks: [
      {
        plantName: "European Silver Fir",
        task: { toBeWateredAgain: "21-09-2003" },
        plantID: "6513ea3bc0a2f8360b9e4a93",
      },
      {
        plantName: "Pyramidalis Silver Fir",
        task: { toBeWateredAgain: "21-09-2003" },
        plantID: "6513ea3bc0a2f8360b9e4a9c",
      },
    ],
  });
  const [completedTasks, setCompletedTasks] = useState([]);

  // useEffect(() => {
  //     getDailyTasks().then((tasks) => {
  //         setDailyTasks(tasks.tasks)
  //         setCompletedTasks(Array(tasks.tasks.length).fill(false))
  //     })
  // }, [])

  const handleCheckboxChange = (index) => {
    const newCompletedTasks = [...completedTasks];
    newCompletedTasks[index] = !newCompletedTasks[index];
    setCompletedTasks(newCompletedTasks);
  };

  return (
    <View style={styles.container}>
      <Header />
      <Navbar currentPage={"myGarden"} navigation={navigation} />
      <View>
        {dailyTasks.tasks.map((task, index) => (
          <View style={styles.taskContainer} key={index}>
            <Text style={styles.plantName}>{task.plantName}</Text>
            <View style={styles.checkboxContainer}>
              <Checkbox
                style={styles.checkbox}
                status={completedTasks[index] ? "checked" : "unchecked"}
                onPress={() => handleCheckboxChange(index)}
                colour={completedTasks[index] ? "#0C7C59" : undefined}
                // value={isChecked}
                // onValueChange={setChecked}
                // color={isChecked ? "#0C7C59" : undefined}
              />
              <Text style={styles.waterText}>Water</Text>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
}
