import { View } from "react-native";
import { Button, useTheme, Text, TextInput } from "react-native-paper";
import { useFonts, Itim_400Regular } from "@expo-google-fonts/itim";
import Header from "./Header";
import styles from "./Designs/styles";
import { useState } from "react";
import { logIn } from "../utils/api.js";


import { UserContext } from "./user";
import { useContext } from "react";

export default function LoginForm({ navigation }) {
  const [text, setText] = useState("");
  const [password, setPassword] = useState("");
  const [isCorrectLogin, setIsCorrectLogin] = useState(false);
  const [loginError, setloginError] = useState(false);
  const [isLoading, setisLoading] = useState(false);

  const {userID, setUserID} = useContext(UserContext);

  const checkLogin = () => {
    logIn(password, text)
      .then(({ data }) => {
  
        setUserID(data.user.user_id);
        setisLoading(true);

        if (data.user.msg === "Login succesful") {
          setIsCorrectLogin(true);
          setisLoading(false);
          navigation.navigate("HomePage");
        }
      })
      .then(() => {
      })
      .catch(() => {
        setisLoading(false);
        setloginError(true);
      });
  };

  if (isLoading) {
    <View>
      <Text
        style={{
          fontFamily: "Itim_400Regular",
          fontSize: 30,
          paddingTop: 15,
        }}
      >
        Loading
      </Text>
    </View>;
  }

  return (
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
      <Button
        mode="contained"
        buttonColor={theme.colors.tertiary}
        textColor={theme.colors.text}
        style={
          text === "" || password === "" ? styles.buttonDisabled : styles.button
        }
        disabled={text === "" || password === ""}
        onPress={() => {
          checkLogin();
          
        }}
      >
        <Text
          style={{
            fontFamily: "Itim_400Regular",
            fontSize: 30,
            paddingTop: 15,
          }}
        >
          Login
        </Text>
      </Button>

      {loginError && (
        <Text
          style={{
            fontFamily: "Itim_400Regular",
            fontSize: 30,
            paddingTop: 15,
            textAlign: "center",
          }}
        >
          Incorrect login, please try again
        </Text>
      )}
    </View>
  );
}
