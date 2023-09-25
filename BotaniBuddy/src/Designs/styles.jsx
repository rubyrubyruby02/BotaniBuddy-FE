import { StyleSheet } from "react-native";
import theme from "./themes";

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  header: {
    height: 100,
    paddingTop: 30,
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
    width: 300,
  },

  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  MyPlantButton: {
    minWidth: 60,
    maxWidth: "auto",
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 10,
    marginRight: 10,
  },

  NavBarButton: {
    minWidth: "30%",
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    margin: 5,
  },

  FormText: {
    width: "90%",
    backgroundColor: theme.colors.primary,
    margin: 5,
  },

  buttonDisabled: {
    backgroundColor: theme.colors.text,
    marginVertical: 20,
    width: 230,
    height: 60,
    alignItems: "center",
    alignContent: "center",
  },
  cameraContainer: {
    flex: 1,
  },
  camera: {
    flex: 1,
  },
  searchbar: {
    marginTop: "15%",
    marginBottom: "10%",
    width: "80%"
  },
  cameraButton: {
    width: 180,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 10,
    marginRight: 10,
  },
});
