import React, { useEffect, useState } from "react";
import { StyleSheet, View, Image} from "react-native";
import {Text, TouchableRipple, ScrollView, Button, Card, useTheme} from "react-native-paper";
import { useFonts, Itim_400Regular } from "@expo-google-fonts/itim";
import Header from "./Header";
import Navbar from "./NavBar";
// import { MyGardenPlantCard } from "./MyGardenPlantCard";
import { getPlantButtons, getPlantInfos } from "../utils/api";

export default function MyGarden({ navigation }) {

  const [plantsArray, setPlantsArray] = useState([]);
  const [plantInfosArray, setPlantInfosArray] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [buttonStates, setButtonStates] = useState({
    plant1: false,
    plant2: false,
    plant3: false,
  });
  const theme = useTheme();

  useEffect(() => {
    const user_id = "650da470f65780777749fea5";
    getPlantButtons(user_id)
      .then(({ data }) => {
        return data.myPlants;
      })
      .then((plantsArray) => {
        const promises = plantsArray.map((plant) => {
          return getPlantInfos(user_id, plant);
        });
        return Promise.all(promises);
      })
      .then((myPlant) => {
        setPlantInfosArray(myPlant);
        setIsLoading(false);
      })
      .catch((error) => {
        return error
      });
  }, []);

  const displayInfo = (plantInfo) => {
    setSelectedPlant(true);
    setSelectedPlantInfo(plantInfo);
  };

  return (
    <View style={styles.container}>

  
      <Header />
      <Navbar currentPage={"myGarden"} navigation={navigation} />
     
      {isLoading ? (
        <Text
          style={{
            fontFamily: "Itim_400Regular",
            fontSize: 30,
            paddingTop: 15,
          }}
        >
          Loading
        </Text>
      ) : ( 
      
      <ScrollView horizontal contentContainerStyle={{ flex: 1 }}>
        <View style={styles.buttonContainer}>
          {plantInfosArray.map((plant) => {
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
                  displayInfo(plant.myPlant);
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
            );
          })}
        </View>
      </ScrollView> )}

      <View>
          <Card style={styles.card}>
            <Card.Title
              title="Hello"
            />
            <Card.Content>
            <Text variant="bodyMedium">"Hello"</Text>
            </Card.Content>
          </Card>
        </View>
    
      <Image
        source={require("../assets/image-from-rawpixel-id-12034028-original.png")}
        style={styles.image}
      >
      </Image>
 

    </View>
  );
}
