import { useState } from "react";
import { View, Image } from "react-native";
import styles from "./Designs/styles";
import { Searchbar, Button, Text,ActivityIndicator    } from "react-native-paper";
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
  const [isLoading, setIsLoading] = useState(false)

  const checkSearchQuery = () => {
    setIsLoading(true)
    setSendPlant(false)
    setError(false)
    searchBar(searchQuery, userID).then((data) => {
      if (data.plant) {
        setIsLoading(false)
        setSendPlant(true);
        const queryObject = {
          name: searchQuery,
        };
        return queryObject;
      } else {
        setIsLoading(false)
        setSendPlant(true);
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
          onSubmitEditing={() => checkSearchQuery()}
          style={styles.searchbar}
        />
        <Button
          mode="contained"
          buttonColor={theme.colors.tertiary}
          textColor={theme.colors.text}
          style={isLoading ? styles.buttonDisabled : styles.button}
          disabled={isLoading}
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
      </View>
      {isLoading && (
          <ActivityIndicator
          color="#0B3948"
            style={{ marginBottom: 225 }}
            size={75}
          />
        )}

      <Image
        source={require("../assets/image-from-rawpixel-id-12034028-original.png")}
        style={styles.image}
      ></Image>
    </>
  );
}
