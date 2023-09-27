import { View, Image } from "react-native";
import {
  Button,
  useTheme,
  Text,
  TextInput,
  ActivityIndicator,
} from "react-native-paper";
import { useFonts, Itim_400Regular } from "@expo-google-fonts/itim";
import Header from "./Header";
import styles from "./Designs/styles";
import { useState } from "react";
import { registerUser } from "../utils/api.js";
import { UserContext } from "./user";
import { useContext } from "react";

export default function RegisterForm({ navigation }) {
  const [text, setText] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const { userID, setUserID } = useContext(UserContext);

  const postRegistration = () => {
    setIsError(false);
    setIsLoading(true);
    registerUser(text, password).then((response) => {
      const { data } = response;
      if (response.status === 201) {
        setIsLoading(false);
        setUserID(data.user.user_id);
        navigation.navigate("HomePage");
      } else {
        setIsLoading(false);
        setIsError(true);
      }
    });
  };

  return (
    <>
      <View style={styles.container}>
        <Header />
        <TextInput
          style={styles.FormText}
          autoCapitalize="none"
          label="Username"
          value={text}
          onChangeText={(text) => setText(text)}
          mode={"outlined"}
          activeOutlineColor="black"
        />
        <TextInput
          style={styles.FormText}
          autoCapitalize="none"
          secureTextEntry={true}
          label="Password"
          value={password}
          onChangeText={(password) => setPassword(password)}
          mode={"outlined"}
          activeOutlineColor="black"
        />
        <TextInput
          style={styles.FormText}
          autoCapitalize="none"
          secureTextEntry={true}
          label="Confirm password"
          value={confirmPassword}
          onChangeText={(confirmPassword) =>
            setConfirmPassword(confirmPassword)
          }
          mode={"outlined"}
          activeOutlineColor="black"
        />
        <Button
          mode="contained"
          buttonColor={theme.colors.tertiary}
          textColor={theme.colors.text}
          style={
            password === confirmPassword &&
            password !== "" &&
            text !== "" &&
            !isLoading
              ? styles.button
              : styles.buttonDisabled
          }
          disabled={
            password !== confirmPassword ||
            password === "" ||
            confirmPassword === "" ||
            text === "" ||
            isLoading
          }
          onPress={() => {
            postRegistration();
          }}
        >
          <Text
            style={{
              fontFamily: "Itim_400Regular",
              fontSize: 30,
              paddingTop: 15,
            }}
          >
            Register
          </Text>
        </Button>
        <Text
          style={{
            fontFamily: "Itim_400Regular",
            fontSize: 20,
            paddingTop: 15,
          }}
        >
          {password !== confirmPassword ? "Passwords must match" : ""}
        </Text>
        <Text
          style={{
            fontFamily: "Itim_400Regular",
            fontSize: 20,
            paddingTop: 15,
          }}
        >
          {password === "" || confirmPassword === "" || text === ""
            ? "Fields must not be empty"
            : ""}
        </Text>

      </View>
        {isError && (
          <Text
            style={{
              fontFamily: "Itim_400Regular",
              fontSize: 30,
              paddingTop: 15,
              textAlign: "center",
              marginBottom: 200
            }}
          >
            Unable to register, please try again
          </Text>
        )}
        {isLoading && (
          <ActivityIndicator
          color="#0B3948"
            style={{ marginBottom: 200 }}
            size={75}
          />
        )}
      <View>
        <Image
          source={require("../assets/image-from-rawpixel-id-12034028-original.png")}
          style={styles.image}
        ></Image>
      </View>
    </>
  );
}
