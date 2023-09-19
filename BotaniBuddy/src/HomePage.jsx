import {Image, StyleSheet, View} from "react-native";
import { Button, useTheme, Text } from 'react-native-paper';
import { useFonts, Itim_400Regular } from "@expo-google-fonts/itim";
import Header from "./Header";


export default function HomePage() {

    const theme = useTheme(); 
    const [fontsLoaded] = useFonts({ Itim_400Regular});
    if (!fontsLoaded) {
        return <Text>Loading</Text>
    }

    return (
      <>
      <View style={styles.container}>
        <Header />
        <Button
          mode="contained"
          buttonColor={theme.colors.tertiary}
          textColor={theme.colors.text}
          style={styles.button}
        >
          <Text style={{ fontFamily: "Itim_400Regular", fontSize: 30, paddingTop: 15}}>
            My Garden
          </Text>
        </Button>
        <Button
          mode="contained"
          buttonColor={theme.colors.tertiary}
          style={styles.button}
          textColor={theme.colors.text}
        >
          <Text style={{fontFamily: "Itim_400Regular", fontSize: 30, paddingTop: 15}}>
            Daily Tasks
          </Text>
        </Button>
        <Button
          mode="contained"
          buttonColor={theme.colors.tertiary}
          style={styles.button}
          textColor={theme.colors.text}
        >
          <Text style={{ fontFamily: "Itim_400Regular", fontSize: 30, paddingTop: 15}}>
            Find My Plant
          </Text>
        </Button>
        <Image source={require('../assets/image-from-rawpixel-id-12034028-original.png')} style={styles.image} >
        </Image>
      </View>
      </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center"
    },
    button: {
        marginVertical: 20,
        width: 230,
        height: 60,
        alignItems: "center",
        alignContent: "center",
    }, 
    image: {
      resizeMode: "cover",
      height: 360,
      width: 500,
      position: "absolute",
      bottom: 0
    }
});