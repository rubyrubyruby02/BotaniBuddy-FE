import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { PaperProvider } from 'react-native-paper';

import HomePage from './src/HomePage';



const Stack = createNativeStackNavigator();

const theme = {
  colors: {
    primary: '#b2d793',
    secondary: '#f4b393',
    tertiary: "#58a4b0",
    onCustomDarkGreen: "#0c7c59",
    onCustomNavy: "#0b3948",
    text: '#ffffff',
  },
};


export default function App() {
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer >
        <Stack.Navigator screenOptions={{contentStyle:{backgroundColor: theme.colors.primary}}}>
          <Stack.Screen  name='Home Page' component={HomePage} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
