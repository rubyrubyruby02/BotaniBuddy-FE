import { StyleSheet, View, ScrollView } from "react-native";
import { Button, Text, TouchableRipple, useTheme, Card } from "react-native-paper";
import { useFonts, Itim_400Regular } from "@expo-google-fonts/itim";
import React, { useEffect, useState } from "react";
import styles from "./Designs/styles";

exports.MyGardenPlantCard = ({plantInfosArray}) => {

    const [selectedPlant, setSelectedPlant] = useState(null)
    const [selectedPlantInfo, setSelectedPlantInfo] = useState("")

    const [buttonStates, setButtonStates] = useState({
        plant1: false,
        plant2: false,
        plant3: false,
      });
      const [fontsLoaded] = useFonts({ Itim_400Regular });
      const theme = useTheme();
    
      const handleButtonPress = (buttonName) => {
        setButtonStates((currentState) => {
          const copyState = { ...currentState };
          for (const key in copyState) {
            copyState[key] = false;
          }
          copyState[buttonName] = true;
          return copyState;
        });
      };

      if (!fontsLoaded) {
        return <Text>Loading</Text>;
      }


      displayInfo = (plantInfo) => {
        setSelectedPlant(true)
        setSelectedPlantInfo(plantInfo)
      }

      

return (

<View styles={styles.container} >

  
    <ScrollView horizontal style={{ flexGrow:0 }}>
    <View style={styles.buttonContainer}>

        {plantInfosArray.map((plant)=> {

            return (
                <Button
                mode="contained"
                buttonColor={
                  buttonStates.plant1
                    ? theme.colors.secondary
                    : theme.colors.tertiary
                }
                textColor={theme.colors.text}
                style={styles.MyPlantButton}
                compact="true"
                onPress={() => {
                  handleButtonPress("plant1");
                  displayInfo(plant.myPlant)
                }}
              >
                <Text
                  style={{
                    fontFamily: "Itim_400Regular",
                    fontSize: 14,
                  }}
                >
                  {plant.myPlant.commonName}
                </Text>
              </Button>
        
            )

        })
        }
    </View>
  </ScrollView>
  



{console.log(selectedPlantInfo)}

{selectedPlant && (
<View style={styles.container}>
  {/* name, description, where live, how often water, stuff not to do, toxicity */}
  <ScrollView vertical style={{width: "80%"}}>
    <View style={styles.card}>
      <Text style={{
                    fontFamily: "Itim_400Regular",
                    fontSize: 18,
                    fontWeight: "bold",
                    lineHeight: 30,
                    color: "#ffffff"
                  }}>{selectedPlantInfo.commonName} </Text>
      <Text style={{
                    fontFamily: "Itim_400Regular",
                    fontSize: 14,
                    lineHeight: 30,
                    color: "#ffffff"
                  }}>{selectedPlantInfo.wateringPeriod.value} days</Text>
      <Text style={{
                    fontFamily: "Itim_400Regular",
                    fontSize: 14,
                    lineHeight: 30,
                    color: "#ffffff"
                  }}>Indoor: {String(selectedPlantInfo.indoor)}</Text>
      <Text style={{
                    fontFamily: "Itim_400Regular",
                    fontSize: 14,
                    lineHeight: 30,
                    color: "#ffffff"
                  }}>Toxic to pets: {String(selectedPlantInfo.poisonousToPets)}</Text>
      <Text style={{
                    fontFamily: "Itim_400Regular",
                    fontSize: 14,
                    lineHeight: 30,
                    color: "#ffffff"
                  }}>Toxic to humans: {String(selectedPlantInfo.poisonousToHumans)}</Text>

      <Text style={{
                    fontFamily: "Itim_400Regular",
                    fontSize: 14,
                    color: "#ffffff"
                  }}>{selectedPlantInfo.description}</Text>
                  
    
    </View>
    </ScrollView>
    </View>
  )
  

}

</View>

)
}