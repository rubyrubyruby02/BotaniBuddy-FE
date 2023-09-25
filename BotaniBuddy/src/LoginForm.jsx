import { View } from "react-native";
import { Button, useTheme, Text, TextInput } from "react-native-paper";
import { useFonts, Itim_400Regular } from "@expo-google-fonts/itim";
import Header from "./Header";
import styles from "./Designs/styles";
import { useState } from "react";
import {logIn} from "../Utils/api.js" 



export default function LoginForm({ navigation }) {
  const [text, setText] = useState("");
  const [password, setPassword] = useState("");
  const [isCorrectLogin, setIsCorrectLogin] = useState(false)
  const [completeForm, setCompleteForm] = useState({username:"", password:""})


  const checkLogin = (text, password) => {
    setCompleteForm({username: text, password: password})
    {console.log(completeForm)} 

    logIn(completeForm).then(({result}) => {
      console.log(result)
    })
    
  }
 
  return (
    <View style={styles.container}>
      {console.log(completeForm)}
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
          checkLogin(text, password)

          if (isCorrectLogin){
            navigation.navigate("HomePage");
          } else{
            <Text>Incorrect Login</Text>
          }
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
