import { useState } from "react";
import { View } from "react-native";
import styles from "./Designs/styles";
import { Searchbar, Button, Text } from "react-native-paper";
import { searchBar } from "../utils/api";
import Header from "./Header";
import Navbar from "./NavBar";

export default function FindPlantBySearch({ navigation }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [sendPlant, setSendPlant] = useState(false);
  const checkSearchQuery = () => {
    searchBar(searchQuery).then((data) => {
      const queryObject = {
        name: searchQuery,
      };

      return queryObject;
    });
  };

  return (
    <View style={styles.container}>
      <Header />
      <Navbar navigation={navigation} currentPage="findPlant" />
      <Searchbar
        placeholder="search for a plant"
        onChangeText={(event) => {
          console.log(event);
          setSearchQuery(event);
          setSendPlant(false);
        }}
        value={searchQuery}
        onSubmitEditing={() => console.log("submitting")}
        style={styles.searchbar}
      />
      <Button
        mode="contained"
        buttonColor={theme.colors.tertiary}
        textColor={theme.colors.text}
        style={styles.button}
        onPress={() => {
          checkSearchQuery();
          setSendPlant(true);
        }}
      >
        <Text
          style={{
            fontFamily: "Itim_400Regular",
            fontSize: 30,
            paddingTop: 15,
          }}
        >
          Search and Add
        </Text>
      </Button>
      <View>
        {sendPlant === true && <Text>Plant added to your garden</Text>}
      </View>
    </View>
  );
}
