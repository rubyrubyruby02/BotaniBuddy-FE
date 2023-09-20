import { View } from "react-native";
import { Text } from 'react-native-paper';
import { useFonts, Itim_400Regular } from "@expo-google-fonts/itim";
import styles from "./Designs/styles";

export default function Header() {
    const [fontsLoaded] = useFonts({ Itim_400Regular });

    if (!fontsLoaded) {
        return <Text>Loading</Text>
    }
    return (
        <View style={styles.header}>
            <Text style={{fontFamily: "Itim_400Regular", fontSize:40}} >
                BotaniBuddy
            </Text>
        </View>

    )
}

