import React, {useEffect, useState} from "react";
import { StyleSheet, View, Image, ScrollView } from "react-native";
import { Button, Text, TouchableRipple, useTheme } from "react-native-paper";
import { useFonts, Itim_400Regular } from "@expo-google-fonts/itim";
import Header from "./Header";
import Navbar from "./NavBar";
import {getPlantButtons, getPlantInfos} from "../utils/api"

export default function MyGarden({navigation}) {
  const [plantsArray, setPlantsArray] = useState([]);
  const [plantInfosArray, setPlantInfosArray] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [buttonStates, setButtonStates] = useState({plant1: false, plant2: false, plant3: false})
  const [fontsLoaded] = useFonts({ Itim_400Regular });
  const theme = useTheme();

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

  useEffect(() => {
    const user_id = "650da470f65780777749fea5"
    getPlantButtons(user_id)
      .then(({data}) => {
        return data.myPlants
      })
      .then((plantsArray) => {
        const promises = plantsArray.map((plant) => {
            return getPlantInfos(user_id, plant)
          })
        return Promise.all(promises);
      })
      .then((myPlant) => {
        setPlantInfosArray(myPlant)
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, [])

  if (!fontsLoaded) {
    return <Text>Loading</Text>;
  }
  // if (isLoading) {
  //   return <Text>Loading Button</Text>;
  // }

  return (
    <View style={styles.container}>
      <Header />
      <Navbar currentPage={"myGarden"} navigation={navigation}/>
      {isLoading ? <Text>Loading Button</Text> :
      <ScrollView horizontal>
        <View style={styles.buttonContainer}>
          <Button
          
            mode="contained"
            buttonColor={buttonStates.plant1 ? theme.colors.secondary : theme.colors.tertiary}
            textColor={theme.colors.text}
            style={styles.MyPlantButton}
            compact="true"
            onPress={() => {
              handleButtonPress('plant1')
            }}
          >
            <Text
              style={{
                fontFamily: "Itim_400Regular",
                fontSize: 14,
              }}
            >
              really really really long plant name 
            </Text>
          </Button>
          <Button
            mode="contained"
            buttonColor={buttonStates.plant2 ? theme.colors.secondary : theme.colors.tertiary}
            textColor={theme.colors.text}
            style={styles.MyPlantButton}
            compact="true"
            onPress={() => {
              handleButtonPress('plant2')
            }}
          >
            <Text
              style={{
                fontFamily: "Itim_400Regular",
                fontSize: 14,
              }}
            >
              cheese lily
            </Text>
          </Button>
          <Button
            mode="contained"
            buttonColor={buttonStates.plant3 ? theme.colors.secondary : theme.colors.tertiary}
            textColor={theme.colors.text}
            style={styles.MyPlantButton}
            compact="true"
            onPress={() => {
              handleButtonPress('plant3')
            }}
          >
            <Text
              style={{
                fontFamily: "Itim_400Regular",
                fontSize: 14,
              }}
            >
              Plant 3
            </Text>
          </Button>
        </View>
        
      </ScrollView>
    }
      <Image
          source={require("../assets/image-from-rawpixel-id-12034028-original.png")}
          style={styles.image}
        ></Image>
    </View>
  );
}
