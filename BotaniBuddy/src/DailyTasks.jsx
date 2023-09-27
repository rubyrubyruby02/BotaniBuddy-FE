import React from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import Header from "./Header";
import Navbar from "./NavBar";
import styles from "./Designs/styles";
import { useState } from "react";
import Checkbox from "expo-checkbox";

export default function DailyTasks({ navigation }) {
  const [isChecked, setChecked] = useState(false);

  return (
    <View style={styles.container}>
      <Header />
      <Navbar currentPage={"myGarden"} navigation={navigation} />
      <View style={styles.section}>
        <Checkbox
          style={styles.checkbox}
          value={isChecked}
          onValueChange={setChecked}
          color={isChecked ? "#0C7C59" : undefined}
        />
        <Text style={styles.paragraph}>Water</Text>
      </View>
    </View>
  );
}
