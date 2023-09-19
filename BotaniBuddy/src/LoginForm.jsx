import {StyleSheet, View} from "react-native";
import { Button, useTheme, Text,  } from 'react-native-paper';
import { useFonts, Itim_400Regular } from "@expo-google-fonts/itim";
import {FormBuilder} from 'react-native-paper-form-builder';
import {useForm} from 'react-hook-form';
import Header from "./Header";
import styles from "./Designs/styles"

export default function LoginForm() {
    // const theme = useTheme()
    // const [fontsLoaded] = useFonts({ Itim_400Regular});
    // if (!fontsLoaded) {
    //     return <Text>Loading</Text>
    // }

    const {control, setFocus, handleSubmit} = useForm({
        defaultValues: {
          text: '',
          password: '',
        },
        mode: 'onChange',
      });

    return (
        <View>
            <Header />
            <Text>Login</Text>
            <FormBuilder
          control={control}
          setFocus={setFocus}
          formConfigArray={[
            {
              type: 'text',
              name: 'text',

              rules: {
                required: {
                  value: true,
                  message: 'Username is required',
                },
              },
              textInputProps: {
                label: 'Username',
              },
            },
            {
              type: 'password',
              name: 'password',
              rules: {
                required: {
                  value: true,
                  message: 'Password is required',
                },
              },
              textInputProps: {
                label: 'Password',
              },
            },
          ]}
        />
            
        </View>
    )
}

