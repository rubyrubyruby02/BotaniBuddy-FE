import React, { useState, useEffect, useRef } from "react";
import { Camera, CameraType } from "expo-camera";
import { Text, View, Image, Dimensions, Platform } from "react-native";
import { Button } from "react-native-paper";
import styles from "./Designs/styles";
import * as FileSystem from "expo-file-system";
import { useFonts, Itim_400Regular } from "@expo-google-fonts/itim";

export default function FindPlantbyImage({ navigation }) {
  const [type, setType] = useState(CameraType.back);
  const [hasPermission, setHasPermission] = useState(null);
  const [capturedImage, setCapturedImage] = useState(null);
  const [base64Image, setBase64Image] = useState(null);

  const cameraRef = useRef()

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
        // ratio can't be taller than screen, so we don't want an abs()
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
      // set the best match
      desiredRatio = minDistance;
      //  calculate the difference between the camera width and the screen height
      const remainder = Math.floor(
        (height - realRatios[desiredRatio] * width) / 2
      );
      // set the preview padding and preview ratio
      setImagePadding(remainder);
      setRatio(desiredRatio);
      // Set a flag so we don't do this
      // calculation each time the screen refreshes
      setIsRatioSet(true);

    }
  };

  const setCameraReady = async () => {
    if (!isRatioSet) {
      await prepareRatio();
    }
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
    if (cameraRef.current) {
      const data = await cameraRef.current.takePictureAsync();
      const source = data.uri;
      if (source) {
        setCapturedImage(source);
        console.log(source)
        loadImageBase64(source);
      }
    }
  };

  const loadImageBase64 = async (capturedImage) => {
    const fileInfo = await FileSystem.getInfoAsync(capturedImage);
    if (fileInfo.exists) {
      const base64Data = await FileSystem.readAsStringAsync(capturedImage, {
        encoding: FileSystem.EncodingType.Base64,
      });
      const moreEndcodedData = "data:image/jpeg;base64," + base64Data;
      setBase64Image(moreEndcodedData);
      // postImageName(moreEndcodedData);
    }
  };

  const post64Data = async (base64Image) => {
    
  };

  return (
    <View style={styles.cameraContainer}>
      {!capturedImage ? (
        <Camera
          style={[
            styles.camera,
            { marginTop: imagePadding, marginBottom: imagePadding },
          ]}
          type={type}
          ref={cameraRef}
          onCameraReady={setCameraReady}
          ratio={ratio}
        >
          <View style={{ position: "absolute", bottom: 0}}>
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
                style={styles.cameraButton}
                onPress={takePicture}
                buttonColor={theme.colors.tertiary}
                textColor={theme.colors.text}
              >
                <Text
                  style={{
                    fontFamily: "Itim_400Regular",
                    fontSize: 20,
                    paddingTop: 5
                  }}
                >
                  Take picture
                </Text>
              </Button>
            </View>
          </View>
        </Camera>
      ) : (
        <View style={styles.cameraContainer}>
          <Image
            source={{ uri: capturedImage }}
            style={styles.camera}
          ></Image>
          <Button
          style={[styles.cameraButton,{position: "absolute", left: 100, bottom: 0}]}
          buttonColor={theme.colors.tertiary}
          textColor={theme.colors.text}>
            <Text
            style={{
              fontFamily: "Itim_400Regular",
              fontSize: 20,
              paddingTop: 5
            }}>
              Search
            </Text>
          </Button>
        </View>
      )}
    </View>
  );
}
