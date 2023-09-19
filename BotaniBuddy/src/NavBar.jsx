import React from "react";
import { View, Image } from "react-native";
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
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <Button
            mode="contained"
            buttonColor={theme.colors.tertiary}
            textColor={theme.colors.text}
            style={styles.NavBarButton}
          >
            <Text
              style={{
                fontFamily: "Itim_400Regular",
                fontSize: 10,
                paddingTop: 5,
              }}
            >
              My Garden
            </Text>
          </Button>
          <Button
            mode="contained"
            buttonColor={theme.colors.tertiary}
            textColor={theme.colors.text}
            style={styles.NavBarButton}
            onPress={() => {
              navigation.navigate("MyGarden");
            }}
          >
            <Text
              style={{
                fontFamily: "Itim_400Regular",
                fontSize: 10,
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
            onPress={() => {
              navigation.navigate("LoginForm");
            }}
          >
            <Text
              style={{
                fontFamily: "Itim_400Regular",
                fontSize: 10,
                paddingTop: 5,
              }}
            >
              Daily Tasks
            </Text>
          </Button>
        </View>
        <Image
          source={require("../assets/image-from-rawpixel-id-12034028-original.png")}
          style={styles.image}
        ></Image>
      </View>
    </>
  );
}
