import React, { useState } from "react";
import { Image, View } from "react-native";
import { Button, Dialog, Portal, Text } from "react-native-paper";
import Navbar from "./NavBar";
import Header from "./Header";
import { useRoute } from "@react-navigation/native";
import styles from "./Designs/styles";
import { searchBar } from "../utils/api";
import { UserContext } from "./user";
import { useContext } from "react";

export default function ImageResultPage({ navigation }) {
  const route = useRoute();
  const { plantName, score, image } = route.params;
  const [visible, setVisible] = useState(false);
  const [isError, setIsError] = useState(false);
  const { userID, setUserID } = useContext(UserContext);
  const [isAdding, setIsAdding] = useState(false);

  const hideDialog = () => {
    if (isError) {
      setVisible(false);
    } else {
      setVisible(false);
      navigation.navigate("MyGarden");
    }
  };

  const addPlant = (plantName) => {
    setIsAdding(true);
    setIsError(false);
    searchBar(plantName, userID)
      .then((data) => {
        if (data.code === "ERR_BAD_REQUEST") {
          setIsError(true);
        }
        setVisible(true);
        setIsAdding(false);
      })
      .catch((err) => {
        setIsError(true);
        setIsAdding(false);
      });
  };

  return (
    <>
      <Header />
      <Navbar currentPage={"findPlant"} navigation={navigation} />
      <View style={styles.container}>
        <Image source={{ uri: image }} style={styles.resultImage}></Image>
        <View
          style={{
            alignItems: "center",
            flex: 1,
          }}
        >
          <Text
            style={{
              fontFamily: "Itim_400Regular",
              fontSize: 30,
              // paddingTop: 15,
              alignItems: "center",
            }}
          >
            {plantName}
          </Text>
          <Text
            style={{
              fontFamily: "Itim_400Regular",
              fontSize: 20,
              // paddingTop: 15,
            }}
          >
            Confidence rating: {Math.floor(score * 100)}%
          </Text>
        </View>
        <View
          style={{
            alignItems: "center",
            flex: 1,
          }}
        >
          <View style={styles.container}>
            <Button
              mode="contained"
              compact="true"
              buttonColor={theme.colors.tertiary}
              textColor={theme.colors.text}
              style={[
                isAdding ? styles.buttonDisabled : styles.button,
                { marginVertical: 0 },
              ]}
              onPress={() => addPlant(plantName)}
              disabled={isAdding}
            >
              <Text
                style={{
                  fontFamily: "Itim_400Regular",
                  fontSize: 23,
                  paddingTop: 12,
                }}
              >
                Add to my garden
              </Text>
            </Button>
            <Portal>
              {!isError ? (
                <Dialog visible={visible} onDismiss={hideDialog}>
                  <Dialog.Title>Success!</Dialog.Title>
                  <Dialog.Content>
                    <Text variant="bodyMedium">
                      Plant has been added to your garden!
                    </Text>
                  </Dialog.Content>
                  <Dialog.Actions>
                    <Button onPress={hideDialog}>Done</Button>
                  </Dialog.Actions>
                </Dialog>
              ) : (
                <Dialog visible={visible} onDismiss={hideDialog}>
                  <Dialog.Title>Error!</Dialog.Title>
                  <Dialog.Content>
                    <Text variant="bodyMedium">Error adding plant</Text>
                  </Dialog.Content>
                  <Dialog.Actions>
                    <Button onPress={hideDialog}>Done</Button>
                  </Dialog.Actions>
                </Dialog>
              )}
            </Portal>
          </View>
        </View>
      </View>
    </>
  );
}
