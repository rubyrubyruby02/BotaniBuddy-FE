import { View, Image } from "react-native";
import { Button, useTheme, Text } from "react-native-paper";
import { useFonts, Itim_400Regular } from "@expo-google-fonts/itim";
import Header from "./Header";
import styles from "./Designs/styles";

export default function LoginPage({ navigation }) {
  const theme = useTheme();
  const [fontsLoaded] = useFonts({ Itim_400Regular });
  if (!fontsLoaded) {
    return <Text>Loading</Text>;
  }

  return (
    <View style={styles.container}>
      <Header />

      <Button
        mode="contained"
        buttonColor={theme.colors.tertiary}
        textColor={theme.colors.text}
        style={styles.button}
        onPress={() => {
          navigation.navigate("LoginForm");
        }}
      >
        <Text
          style={{
            fontFamily: "Itim_400Regular",
            fontSize: 30,
            paddingTop: 15,
          }}
        >
          Login
        </Text>
      </Button>
      <Button
        mode="contained"
        buttonColor={theme.colors.tertiary}
        textColor={theme.colors.text}
        style={styles.button}
        onPress={() => {
          navigation.navigate("RegisterForm");
        }}
      >
        <Text
          style={{
            fontFamily: "Itim_400Regular",
            fontSize: 30,
            paddingTop: 15,
          }}
        >
          Register
        </Text>
      </Button>
      <Image
        source={require("../assets/image-from-rawpixel-id-12034028-original.png")}
        style={styles.image}
      ></Image>
    </View>
  );
}
