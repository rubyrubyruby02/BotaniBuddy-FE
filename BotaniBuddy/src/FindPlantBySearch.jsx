import { useState } from "react";
import { View } from "react-native";
import styles from "./Designs/styles";
import { Searchbar, Button, Text } from "react-native-paper";
import Header from "./Header";
import Navbar from "./NavBar";

export default function FindPlantBySearch({ navigation }) {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <View style={styles.container}>
      <Header />
      <Navbar navigation={navigation} currentPage="findPlant" />
      <Searchbar
        placeholder="search for a plant"
        onChangeText={setSearchQuery}
        value={searchQuery}
        onSubmitEditing={() => console.log("submitting")}
        style={styles.searchbar}
      />
      <Button
        mode="contained"
        buttonColor={theme.colors.tertiary}
        textColor={theme.colors.text}
        style={styles.button}
      >
        <Text
          style={{
            fontFamily: "Itim_400Regular",
            fontSize: 30,
            paddingTop: 15,
          }}
        >
          Search
        </Text>
      </Button>
    </View>
  );
}
