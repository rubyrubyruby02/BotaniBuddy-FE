import {StyleSheet, View} from "react-native";
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
      <View style={styles.container}>
        <Header />
        <Button
          mode="contained"
          buttonColor={theme.colors.tertiary}
          textColor={theme.colors.text}
          style={styles.button}
        >
          <Text style={{ fontFamily: "Itim_400Regular", fontSize: 30}}>
            My Garden
          </Text>
        </Button>
        <Button
          mode="contained"
          buttonColor={theme.colors.tertiary}
          style={styles.button}
          textColor={theme.colors.text}
        >
          <Text style={{fontFamily: "Itim_400Regular", fontSize: 30}}>
            Daily Tasks
          </Text>
        </Button>
        <Button
          mode="contained"
          buttonColor={theme.colors.tertiary}
          style={styles.button}
          textColor={theme.colors.text}
        >
          <Text style={{ fontFamily: "Itim_400Regular", fontSize: 30}}>
            Find My Plant
          </Text>
        </Button>
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    button: {
        marginVertical: 20,
        width: 230,
        height: 60,
        alignItems: "center",
        alignContent: "center",
    }, 

    text: {}


});