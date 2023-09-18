import {View } from "react-native";
import { Button, useTheme } from 'react-native-paper';
import Header from "./Header";


export default function HomePage() {

    const theme = useTheme(); 

    return (
        <View >
            <Header />
            <Button mode="contained" buttonColor={theme.colors.tertiary}>
                My Garden
            </Button>
            <Button mode="contained" buttonColor={theme.colors.tertiary}>
                Daily Tasks
            </Button>
            <Button  mode="contained" buttonColor={theme.colors.tertiary}>
                 Find My Plant
            </Button>
        </View>
    )
}