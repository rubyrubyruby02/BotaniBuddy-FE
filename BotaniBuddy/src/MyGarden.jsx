
import React, { useEffect, useState, useContext } from "react";
import { StyleSheet, View, Image} from "react-native";
import {Text, TouchableRipple, useTheme } from "react-native-paper";
import { useFonts, Itim_400Regular } from "@expo-google-fonts/itim";
import Header from "./Header";
import Navbar from "./NavBar";
import { MyGardenPlantCard } from "./MyGardenPlantCard";
import { getPlantButtons, getPlantInfos } from "../utils/api";
import { UserContext } from "./user";

export default function MyGarden({ navigation }) {

  const [plantsArray, setPlantsArray] = useState([]);
  const [plantInfosArray, setPlantInfosArray] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const {userID, setUserID} = useContext(UserContext);

  useEffect(() => {
    getPlantButtons(userID)
      .then(({ data }) => {
        return data.myPlants;
      })
      .then((plantsArray) => {
        const promises = plantsArray.map((plant) => {
          return getPlantInfos(userID, plant);
        });
        return Promise.all(promises);
      })
      .then((myPlant) => {
        setPlantInfosArray(myPlant);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  return (
    <View style={styles.container}>
      <Header />
      <Navbar  navigation={navigation} currentPage={"myGarden"}/>

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
      ) : ( <MyGardenPlantCard  plantInfosArray={plantInfosArray}/> )}

      <Image
        source={require("../assets/image-from-rawpixel-id-12034028-original.png")}
        style={styles.image}
      ></Image>
    </View>
  );
}
