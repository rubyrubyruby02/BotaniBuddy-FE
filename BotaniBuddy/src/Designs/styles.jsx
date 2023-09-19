import { StyleSheet } from "react-native";

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
  },
  MyPlantButton: {
    width: 60,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
  },

  image: {
    resizeMode: "cover",
    height: 360,
    width: 500,
    position: "absolute",
    bottom: 0,
  },
  NavBarButton: {
    width: "33%",
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    margin: 5,
  },
});
