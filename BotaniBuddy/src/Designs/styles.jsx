import { StyleSheet } from "react-native";
import { useFonts, Itim_400Regular } from "@expo-google-fonts/itim";

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
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
  formContainer: {
    flex: 1,
    alignItems: "center",
  },

  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  MyPlantButton: {
    width: 60,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
  },

  image: {
    resizeMode: "cover",
    height: 360,
    width: 500,
    position: "absolute",
    bottom: 0,
  },
});
