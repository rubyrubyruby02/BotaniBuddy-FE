import { StyleSheet, View, ScrollView } from "react-native";
import {
  Button,
  Text,
  TouchableRipple,
  useTheme,
  Card,
} from "react-native-paper";
import { useFonts, Itim_400Regular } from "@expo-google-fonts/itim";
import React, { useEffect, useState } from "react";


exports.MyGardenPlantCard = ({ plantInfosArray }) => {

  const theme = useTheme();

  const [selectedPlant, setSelectedPlant] = useState(null);
  const [selectedPlantInfo, setSelectedPlantInfo] = useState("");

  const [buttonStates, setButtonStates] = useState({
    plant1: false,
    plant2: false,
    plant3: false,
  });
  const [fontsLoaded] = useFonts({ Itim_400Regular });

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
    setSelectedPlant(true);
    setSelectedPlantInfo(plantInfo);
  };

  return (
 
<View>
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
          </ScrollView>
       

        <View>
          <Card style={styles.card}>
            <Card.Title
              title={selectedPlantInfo.commonName}
            />
            <Card.Content>
            <Text variant="bodyMedium">{selectedPlantInfo.description}</Text>
            </Card.Content>
          </Card>
        </View>
      
  </View>
  );
};
