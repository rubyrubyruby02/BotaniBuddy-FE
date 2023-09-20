import React from "react";
import { StyleSheet, View, Image, ScrollView } from "react-native";
import { Button, Text, useTheme } from "react-native-paper";
import { useFonts, Itim_400Regular } from "@expo-google-fonts/itim";
import Header from "./Header";
import Navbar from "./NavBar";

export default function PlantSelection({ navigation }) {
  const theme = useTheme();
  const [fontsLoaded] = useFonts({ Itim_400Regular });
  if (!fontsLoaded) {
    return <Text>Loading</Text>;
  }
  return (
    <View style={styles.container}>
      <Header />
      <Navbar />
      <ScrollView horizontal>
        <View style={styles.buttonContainer}>
          <Button
            mode="contained"
            buttonColor={theme.colors.tertiary}
            textColor={theme.colors.text}
            style={styles.MyPlantButton}
            compact="true"
          >
            <Text
              style={{
                fontFamily: "Itim_400Regular",
                fontSize: 14,
              }}
            >
              plant 1
            </Text>
          </Button>
          <Button
            mode="contained"
            buttonColor={theme.colors.tertiary}
            textColor={theme.colors.text}
            style={styles.MyPlantButton}
            compact="true"
            onPress={() => {
              navigation.navigate("LoginForm");
            }}
          >
            <Text
              style={{
                fontFamily: "Itim_400Regular",
                fontSize: 14,
              }}
            >
              Plant 2
            </Text>
          </Button>
          <Button
            mode="contained"
            buttonColor={theme.colors.tertiary}
            textColor={theme.colors.text}
            style={styles.MyPlantButton}
            compact="true"
            onPress={() => {
              navigation.navigate("LoginForm");
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
        <Image
          source={require("../assets/image-from-rawpixel-id-12034028-original.png")}
          style={styles.image}
        ></Image>
      </ScrollView>
    </View>
  );
}
