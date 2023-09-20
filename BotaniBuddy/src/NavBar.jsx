import React from "react";
import { StyleSheet, View, Image, ScrollView } from "react-native";
import { Button, Text, useTheme } from "react-native-paper";
import { useFonts, Itim_400Regular } from "@expo-google-fonts/itim";

export default function Navbar({ navigation }) {
  const theme = useTheme();
  const [fontsLoaded] = useFonts({ Itim_400Regular });
  if (!fontsLoaded) {
    return <Text>Loading</Text>;
  }

  return (
    <>
      <View>
        <View style={styles.buttonContainer}>
          <Button
            mode="contained"
            buttonColor={theme.colors.tertiary}
            textColor={theme.colors.text}
            style={styles.NavBarButton}
            compact="true"
          >
            <Text
              style={{
                fontFamily: "Itim_400Regular",
                fontSize: 14,
                padding: 0,
              }}
            >
              plant 1
            </Text>
          </Button>
          <Button
            mode="contained"
            buttonColor={theme.colors.tertiary}
            textColor={theme.colors.text}
            style={styles.NavBarButton}
            compact="true"
            onPress={() => {
              navigation.navigate("MyGarden");
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
            buttonColor={theme.colors.tertiary}
            textColor={theme.colors.text}
            style={styles.NavBarButton}
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
              Daily Tasks
            </Text>
          </Button>
        </View>
      </View>
    </>
  );
}
