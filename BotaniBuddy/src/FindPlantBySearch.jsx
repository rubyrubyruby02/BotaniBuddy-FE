import { useState } from "react";
import { View } from "react-native";
import styles from "./Designs/styles";
import { Searchbar, Button, Text } from "react-native-paper";
import {searchBar} from '../utils/api'
import Header from "./Header";
import Navbar from "./NavBar";

export default function FindPlantBySearch({ navigation }) {
  const [searchQuery, setSearchQuery] = useState("");


  const checkSearchQuery = (searchQuery) => {
    searchBar(searchQuery)
    .then((result) => {
      console.log(result)
    })
  }
  // const checkLogin = (text, password) => {
  //   setCompleteForm({username: text, password: password})
  //   {console.log(completeForm)} 

  //   logIn(completeForm).then(({result}) => {
  //     console.log(result)
  //   })

  // }

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
        onPress={checkSearchQuery}
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
