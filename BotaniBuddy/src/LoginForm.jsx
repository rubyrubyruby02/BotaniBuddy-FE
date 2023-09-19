import { StyleSheet, View } from "react-native";
import { Button, useTheme, Text, TextInput } from "react-native-paper";
import { useFonts, Itim_400Regular } from "@expo-google-fonts/itim";
import Header from "./Header";
import styles from "./Designs/styles";
import { useState } from "react";

export default function LoginForm({ navigation }) {
  const [text, setText] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
        <Header />
        <TextInput
          style={{width: "90%"}}
          label="Username"
          value={text}
          onChangeText={text => setText(text)}
          mode={"outlined"}
        />
        <TextInput
          style={{width: "90%"}}
          label="Password"
          value={password}
          onChangeText={password => setPassword(password)}
          mode={"outlined"}
        />
        <Button
          mode="contained"
          buttonColor={theme.colors.tertiary}
          textColor={theme.colors.text}
          style={styles.button}
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
            Login
          </Text>
        </Button>
    </View>
  );
}
