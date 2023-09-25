import { Image, View } from "react-native";
import { Button, useTheme, Text } from "react-native-paper";
import { useFonts, Itim_400Regular } from "@expo-google-fonts/itim";
import Header from "./Header";
import styles from "./Designs/styles";
import Navbar from "./NavBar";

export default function FindMyPlant({ navigation }) {
  const theme = useTheme();
  const [fontsLoaded] = useFonts({ Itim_400Regular });
  if (!fontsLoaded) {
    return <Text>Loading</Text>;
  }

  return (
    <>
      <View style={styles.container}>
        <Header />
        <Navbar navigation={navigation} currentPage={"findPlant"} />
        <Button
          mode="contained"
          buttonColor={theme.colors.tertiary}
          textColor={theme.colors.text}
          style={styles.button}
          onPress={() => {
            navigation.navigate("FindPlantBySearch");
          }}
        >
          <Text
            style={{
              fontFamily: "Itim_400Regular",
              fontSize: 30,
              paddingTop: 15,
            }}
          >
            Search Plant Details
          </Text>
        </Button>

        <Button
          mode="contained"
          buttonColor={theme.colors.tertiary}
          style={styles.button}
          textColor={theme.colors.text}
          onPress={() => {
            navigation.navigate("FindPlantByImage");
          }}
        >
          <Text
            style={{
              fontFamily: "Itim_400Regular",
              fontSize: 30,
              paddingTop: 15,
            }}
          >
            Oh no! I forgot my plant name
          </Text>
        </Button>
        {/* <Image
          source={require("../assets/image-from-rawpixel-id-12034028-original.png")}
          style={styles.image}
        ></Image> */}
      </View>
    </>
  );
}
