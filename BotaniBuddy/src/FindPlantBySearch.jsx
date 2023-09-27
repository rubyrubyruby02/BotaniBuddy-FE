import { useState } from "react";
import { View, Image } from "react-native";
import styles from "./Designs/styles";
import { Searchbar, Button, Text } from "react-native-paper";
import { searchBar } from "../utils/api";
import Header from "./Header";
import Navbar from "./NavBar";
import { UserContext } from "./user";
import { useContext } from "react";

export default function FindPlantBySearch({ navigation }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [sendPlant, setSendPlant] = useState(false);
  const { userID, setUserID } = useContext(UserContext);
  const [error, setError] = useState(false);

  const checkSearchQuery = () => {
    searchBar(searchQuery, userID).then((data) => {
      if (data.plant) {
        setSendPlant(true);
        const queryObject = {
          name: searchQuery,
        };
        return queryObject;
      } else {
        setError(true);
      }
    });
  };

  return (
    <>
      <View style={styles.container}>
        <Header />
        <Navbar navigation={navigation} currentPage="findPlant" />

        <Searchbar
          placeholder="search for a plant"
          onChangeText={(event) => {
            setSearchQuery(event);
          }}
          value={searchQuery}
          onSubmitEditing={() => console.log("submitting")}
          style={styles.searchbar}
        />

        <View>
          {sendPlant && !error ? (
            <Text
              style={{
                fontFamily: "Itim_400Regular",
                fontSize: 20,
                paddingTop: 10,
              }}
            >
              Plant added to your garden
            </Text>
          ) : sendPlant && error ? (
            <Text
              style={{
                fontFamily: "Itim_400Regular",
                fontSize: 20,
                paddingTop: 10,
              }}
            >
              An error occurred
            </Text>
          ) : null}
        </View>

        <Button
          mode="contained"
          buttonColor={theme.colors.tertiary}
          textColor={theme.colors.text}
          style={styles.button}
          onPress={() => {
            checkSearchQuery();
          }}
        >
          <Text
            style={{
              fontFamily: "Itim_400Regular",
              fontSize: 20,
              paddingTop: 10,
            }}
          >
            Search and Add
          </Text>
        </Button>
      </View>

      <Image
        source={require("../assets/image-from-rawpixel-id-12034028-original.png")}
        style={styles.image}
      ></Image>
    </>
  );
}
