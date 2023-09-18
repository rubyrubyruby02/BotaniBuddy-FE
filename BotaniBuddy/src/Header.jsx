import { View } from "react-native";
import * as React from 'react';
import { Text } from 'react-native-paper';
import { useFonts, Itim_400Regular } from "@expo-google-fonts/itim";

export default function Header() {
    const [fontsLoaded] = useFonts({ Itim_400Regular });

    if (!fontsLoaded) {
        return <Text>Loading</Text>
    }
    return (
        <View>
            <Text style={{fontFamily: "Itim_400Regular", fontSize:40}} >
                BotaniBuddy
            </Text>
        </View>
    )
}


