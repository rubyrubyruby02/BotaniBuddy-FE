import React, { useState } from "react";
import { View} from "react-native";
import { Button, Text, useTheme } from "react-native-paper";
import { useFonts, Itim_400Regular } from "@expo-google-fonts/itim";

export default function Navbar({ navigation, currentPage }) {
  const theme = useTheme();
  const [buttonStates, setButtonStates] = useState({myGarden: currentPage === "myGarden", findPlant: currentPage === "findPlant", dailyTasks: currentPage === "dailyTasks"})
   
  const [fontsLoaded] = useFonts({ Itim_400Regular });
  if (!fontsLoaded) {
    return <Text>Loading</Text>;
  }

  const handleButtonPress = (buttonName) => {
    setButtonStates((currentState) => {
      const copyState = {...currentState}
      for(const key in copyState) {
        copyState[key] = false
      }
      copyState[buttonName] = true
      return copyState
    })
    
    
    
  }

  return (
    <>
      <View>
        <View style={styles.buttonContainer}>
          <Button
            mode="contained"
            buttonColor={buttonStates.myGarden ? theme.colors.secondary : theme.colors.tertiary}
            textColor={theme.colors.text}
            style={styles.NavBarButton}
            compact="true"
            testID="homeButton"
            onPress={()=> {
              handleButtonPress('myGarden')
              navigation.navigate('MyGarden')
            }}

          >
            <Text
              style={{
                fontFamily: "Itim_400Regular",
                fontSize: 14,
                padding: 0,
              }}
            >
              Home Page
            </Text>
          </Button>
          <Button
            mode="contained"
            buttonColor={buttonStates.findPlant ? theme.colors.secondary : theme.colors.tertiary}
            textColor={theme.colors.text}
            style={styles.NavBarButton}
            compact="true"
            onPress={() => {
              handleButtonPress('findPlant')
              // navigation.navigate("MyGarden");
            }}
          >
            <Text
              style={{
                fontFamily: "Itim_400Regular",
                fontSize: 14,
              }}
            >
              Find my Plant
            </Text>
          </Button>
          <Button
            mode="contained"
            buttonColor={buttonStates.dailyTasks ? theme.colors.secondary : theme.colors.tertiary}
            textColor={theme.colors.text}
            style={styles.NavBarButton}
            compact="true"
            onPress={() => {
              handleButtonPress('dailyTasks')
              // navigation.navigate("LoginForm");
            }}
          >
            <Text
              style={{
                fontFamily: "Itim_400Regular",
                fontSize: 14,
              }}
            >
              Daily Tasks
            </Text>
          </Button>
        </View>
      </View>
    </>
  );
}
