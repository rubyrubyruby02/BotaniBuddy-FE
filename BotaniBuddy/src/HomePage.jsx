import { Button, Text, View } from "react-native";
import Header from "./Header";

export default function HomePage() {
    return (
        <View>
            <Header />
            <Button title="My Garden"/>
            <Button title="Daily Tasks"/>
            <Button title="Find My Plant"/>
        </View>
    )
}