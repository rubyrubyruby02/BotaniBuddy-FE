import {StyleSheet, View } from "react-native";
import { Button, useTheme } from 'react-native-paper';
import Header from "./Header";


export default function HomePage() {

    const theme = useTheme(); 

    return (
        <View >
            <Header />
            <Button mode="contained" buttonColor={theme.colors.tertiary} style={styles.button}>
                My Garden
            </Button>
            <Button mode="contained" buttonColor={theme.colors.tertiary} style={styles.button}>
                Daily Tasks
            </Button>
            <Button  mode="contained" buttonColor={theme.colors.tertiary} style={styles.button}>
                 Find My Plant
            </Button>
        </View>
    )
}

const styles = StyleSheet.create({
    button: {marginVertical: 20},
});