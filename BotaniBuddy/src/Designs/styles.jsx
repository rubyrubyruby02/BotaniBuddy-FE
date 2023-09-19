import { StyleSheet } from "react-native";
import { useFonts, Itim_400Regular } from "@expo-google-fonts/itim";

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  header: {
    height: 100,
    paddingTop: 30
  },
  button: {
    marginVertical: 20,
    width: 230,
    height: 60,
    alignItems: "center",
    alignContent: "center",
  },
  image: {
    resizeMode: "cover",
    height: 360,
    width: 500,
    position: "absolute",
    bottom: 0,
  },
  buttonText: {
    fontFamily: "Itim_400Regular",
    fontSize: 30,
    paddingTop: 15,
  },
  formContainer: {
    width: 300
  },
  //   scrollViewStyle: {
  //     flex: 1,
  //     padding: 15,
  //     justifyContent: "center",
  //   },
  //   headingStyle: {
  //     fontSize: 30,
  //     textAlign: "center",
  //     marginBottom: 40,
  //   },
});
