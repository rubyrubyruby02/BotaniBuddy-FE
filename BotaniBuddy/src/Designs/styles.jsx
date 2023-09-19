import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center"
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
      bottom: 0
    }
});