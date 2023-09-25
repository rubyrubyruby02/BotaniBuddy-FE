import { View } from "react-native";
import { Button, useTheme, Text, TextInput } from "react-native-paper";
import { useFonts, Itim_400Regular } from "@expo-google-fonts/itim";
import Header from "./Header";
import styles from "./Designs/styles";
import { useState } from "react";

export default function RegisterForm({ navigation }) {
  const [text, setText] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

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
      <TextInput
        style={styles.FormText}
        autoCapitalize="none"
        secureTextEntry={true}
        label="Confirm password"
        value={confirmPassword}
        onChangeText={(confirmPassword) => setConfirmPassword(confirmPassword)}
        mode={"outlined"}
        activeOutlineColor="black"
      />
      <Button
        mode="contained"
        buttonColor={theme.colors.tertiary}
        textColor={theme.colors.text}
        style={
          password === confirmPassword && password !== "" && text !== ""
            ? styles.button
            : styles.buttonDisabled
        }
        disabled={
          password !== confirmPassword ||
          password === "" ||
          confirmPassword === "" ||
          text === ""
        }
        onPress={() => {
          navigation.navigate("HomePage");
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
      <Text>{password !== confirmPassword ? "Passwords must match" : ""}</Text>
      <Text>
        {password === "" || confirmPassword === "" || text === ""
          ? "Fields must not be empty"
          : ""}
      </Text>
    </View>
  );
}