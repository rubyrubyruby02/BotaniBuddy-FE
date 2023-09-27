import { StyleSheet } from "react-native";
import theme from "./themes";

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  containerMyGarden: {
    flex: 1,
    alignItems: "center",
    position: "absolute",
  },
  headerContainer: {
    flexDirection: "row",
  },
  header: {
    height: 100,
    alignItems: "center",
    flexDirection: "row",
    marginRight: 55,
  },
  logo: {
    height: 110,
    width: 60,
    marginRight: 20,
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

    marginTop: "8%",
    marginBottom: "3%",
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

  card: {
    backgroundColor: theme.colors.onCustomDarkGreen,
    flex: 1,
    alignContent: "center",
    padding: 15,
    borderRadius: 10,

    marginBottom: 300,
  },
  resultImage: {
    justifyContent: "center",
    height: 350,
    width: 200,
    marginLeft: 90,
    marginTop: 20,
  },

  taskContainer: {
    flexDirection: "column", // Display components vertically
    alignItems: "center", // Center components horizontally
    marginVertical: 10,
  },
  plantName: {
    fontSize: 16, // Adjust the font size as needed
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  checkbox: {
    marginHorizontal: 8,
  },
  waterText: {
    fontSize: 14, // Adjust the font size as needed
  },
  tasksCard: {
    flex: 1,
  }
});
