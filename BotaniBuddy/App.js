import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { PaperProvider } from "react-native-paper";
import theme from "./src/Designs/themes";

import HomePage from "./src/HomePage";
import LoginPage from "./src/LoginPage";
import LoginForm from "./src/LoginForm";
import MyGarden from "./src/MyGarden";
import Navbar from "./src/NavBar";
import RegisterForm from "./src/RegisterForm";
import FindMyPlant from "./src/FindMyPlant";
import FindPlantByImage from "./src/FindPlantByImage";
import FindPlantBySearch from "./src/FindPlantBySearch";

import { UserProvider } from "./src/user";

import ErrorPage from "./src/ErrorPage";
import ImageResultPage from "./src/ImageResultPage";
import DailyTasks from "./src/DailyTasks";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <UserProvider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              contentStyle: { backgroundColor: theme.colors.primary },
            }}
          >
            <Stack.Screen name="LoginPage" component={LoginPage} />
            <Stack.Screen name="LoginForm" component={LoginForm} />
            <Stack.Screen name="RegisterForm" component={RegisterForm} />
            <Stack.Screen name="HomePage" component={HomePage} />
            <Stack.Screen name="MyGarden" component={MyGarden} />
            <Stack.Screen name="NavBar" component={Navbar} />
            <Stack.Screen name="FindMyPlant" component={FindMyPlant} />
            <Stack.Screen name="DailyTasks" component={DailyTasks} />
            <Stack.Screen
              name="FindPlantByImage"
              component={FindPlantByImage}
            />
            <Stack.Screen
              name="FindPlantBySearch"
              component={FindPlantBySearch}
            />
            <Stack.Screen name="ImageResultPage" component={ImageResultPage} />
            <Stack.Screen name="ErrorPage" component={ErrorPage} />
          </Stack.Navigator>
        </NavigationContainer>
      </UserProvider>
    </PaperProvider>
  );
}
