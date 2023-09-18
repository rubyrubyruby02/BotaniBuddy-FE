import { StyleSheet, View } from "react-native";
import * as React from 'react';
import { Text } from 'react-native-paper';
import { useFonts, Itim_400Regular } from "@expo-google-fonts/itim";

export default function Header() {
    const [fontsLoaded] = useFonts({ Itim_400Regular });

    if (!fontsLoaded) {
        return <Text>Loading</Text>
    }
    return (
        <View style={styles.container}>
            <Text style={styles.header} >
                BotaniBuddy
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    header: {
      fontFamily: "Itim_400Regular",
      fontSize: 40,
    },
  });
  

