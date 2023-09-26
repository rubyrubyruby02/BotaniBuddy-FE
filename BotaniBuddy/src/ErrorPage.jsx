import { View } from "react-native";
import { Text, Button } from "react-native-paper";
import styles from "./Designs/styles";
import Header from "./Header";
import Navbar from "./NavBar";

export default function ErrorPage({ navigation }) {
  return (
    <View style={styles.container}>
      <Header />
      <Navbar navigation={navigation} />
      <Text>Something went wrong...</Text>
    </View>
  );
}
