import React, { useState, useEffect, useRef } from "react";
import { Camera, CameraType } from "expo-camera";
import { Text, View, Image, Dimensions, Platform } from "react-native";
import { Button, ActivityIndicator } from "react-native-paper";
import styles from "./Designs/styles";
import Header from "./Header";
import Navbar from "./NavBar";
import * as FileSystem from "expo-file-system";
import { useFonts, Itim_400Regular } from "@expo-google-fonts/itim";
import { postImage } from "../utils/api";
import { manipulateAsync, SaveFormat } from "expo-image-manipulator";
import { UserContext } from "./user";
import { useContext } from "react";

export default function FindPlantbyImage({ navigation }) {
  const [type, setType] = useState(CameraType.back);
  const [hasPermission, setHasPermission] = useState(null);
  const [capturedImage, setCapturedImage] = useState(null);
  const { userID, setUserID } = useContext(UserContext);
  const [isTakingPicture, setIsTakingPicture] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSearching, setIsSearching] = useState(false);

  const cameraRef = useRef();

  const [imagePadding, setImagePadding] = useState(0);
  const [ratio, setRatio] = useState("4:3");
  const { height, width } = Dimensions.get("window");
  const screenRatio = height / width;
  const [isRatioSet, setIsRatioSet] = useState(false);
  const [fontsLoaded] = useFonts({ Itim_400Regular });

  const prepareRatio = async () => {
    let desiredRatio = "4:3";
    if (Platform.OS === "android") {
      const ratios = await cameraRef.current.getSupportedRatiosAsync();
      let distances = {};
      let realRatios = {};
      let minDistance = null;
      for (const ratio of ratios) {
        const parts = ratio.split(":");
        const realRatio = parseInt(parts[0]) / parseInt(parts[1]);
        realRatios[ratio] = realRatio;
        const distance = screenRatio - realRatio;
        distances[ratio] = realRatio;
        if (minDistance == null) {
          minDistance = ratio;
        } else {
          if (distance >= 0 && distance < distances[minDistance]) {
            minDistance = ratio;
          }
        }
      }
      desiredRatio = minDistance;
      const remainder = Math.floor(
        (height - realRatios[desiredRatio] * width) / 2
      );
      setImagePadding(remainder);
      setRatio(desiredRatio);
      setIsRatioSet(true);
    }
  };

  const setCameraReady = async () => {
    setIsLoading(true);
    if (!isRatioSet) {
      await prepareRatio();
    }
    setIsLoading(false);
  };

  useEffect(() => {
    Camera.requestCameraPermissionsAsync()
      .then(({ status }) => {
        setHasPermission(status === "granted");
      })
      .catch((error) => {
        console.error("Error requesting camera permissions:", error);
      });
  }, []);

  function toggleCameraType() {
    setType((current) =>
      current === CameraType.back ? CameraType.front : CameraType.back
    );
  }
  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  const takePicture = async () => {
    setIsTakingPicture(true);
    if (cameraRef.current) {
      const data = await cameraRef.current.takePictureAsync();
      const source = data.uri;
      const manipResult = await manipulateAsync(source, [], {
        compress: 0.4,
        format: SaveFormat.JPEG,
      });

      if (source) {
        setCapturedImage(manipResult.uri);
      }
    }
    setIsTakingPicture(false);
  };

  const sendPicture = async (image) => {
    setIsSearching(true);
    const info = await FileSystem.getInfoAsync(image);
    const filename = image.split("/").pop();
    const match = /\.(\w+)$/.exec(filename);
    const type = match ? `image/${match[1]}` : `image`;
    const formData = new FormData();
    const blob = { uri: image, name: filename, type };
    formData.append("image", blob);
    postImage(formData, userID)
      .then(({ plantName, score }) => {
        setIsSearching(false);
        navigation.navigate("ImageResultPage", { plantName, score, image });
      })
      .catch((err) => {
        console.log(err);
        setIsSearching(false);
        navigation.navigate("ErrorPage");
      });
  };

  if (isLoading) {
    return (
      <View style={styles.container}>
        <Text
          style={{
            fontFamily: "Itim_400Regular",
            fontSize: 30,
            paddingTop: 15,
          }}
        >
          Loading
        </Text>
      </View>
    );
  }

  const plantPhoto = { uri: capturedImage };
  return (
    <View style={styles.cameraContainer}>
      {!capturedImage ? (
        <Camera
          style={[
            styles.camera,
            { paddingTop: imagePadding, paddingBottom: imagePadding },
          ]}
          type={type}
          ref={cameraRef}
          onCameraReady={setCameraReady}
          ratio={ratio}
        >
          <View style={{ position: "absolute", bottom: 0 }}>
            <View style={styles.buttonContainer}>
              <Button
                style={styles.cameraButton}
                buttonColor={theme.colors.tertiary}
                textColor={theme.colors.text}
                onPress={toggleCameraType}
              >
                <Text
                  style={{
                    fontFamily: "Itim_400Regular",
                    fontSize: 20,
                    paddingTop: 5,
                  }}
                >
                  Flip Camera
                </Text>
              </Button>
              <Button
                style={
                  isTakingPicture
                    ? styles.cameraButtonDisabled
                    : styles.cameraButton
                }
                onPress={takePicture}
                buttonColor={theme.colors.tertiary}
                textColor={theme.colors.text}
                disabled={isTakingPicture}
              >
                <Text
                  style={{
                    fontFamily: "Itim_400Regular",
                    fontSize: 20,
                    paddingTop: 5,
                  }}
                >
                  Take picture
                </Text>
              </Button>
            </View>
          </View>
        </Camera>
      ) : (
        <>
          <Header />
          <Navbar navigation={navigation} currentPage="findPlant" />
          <View style={[styles.cameraContainer, { alignItems: "center" }]}>
            <Image
              source={{ uri: capturedImage }}
              style={styles.resultImage}
            ></Image>
            <View style={{ flex: 1, justifyContent: "center" }}>
              <Button
                style={[
                  isSearching ? styles.buttonDisabled : styles.button,
                  { justifyContent: "center" },
                ]}
                buttonColor={theme.colors.tertiary}
                textColor={theme.colors.text}
                disabled={isSearching}
                onPress={() => sendPicture(capturedImage)}
              >
                <Text
                  style={{
                    fontFamily: "Itim_400Regular",
                    fontSize: 20,
                  }}
                >
                  Search
                </Text>
              </Button>
            </View>
            <View style={{ flex: 1, justifyContent: "top" }}>
              {isSearching && <ActivityIndicator color="#0B3948" size={75} />}
            </View>
          </View>
        </>
      )}
    </View>
  );
}
