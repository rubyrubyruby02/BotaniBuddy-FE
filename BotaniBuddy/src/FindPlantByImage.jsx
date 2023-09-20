import React, { useState, useEffect, useRef } from "react";
import { Camera, CameraType } from "expo-camera";
import {
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  Dimensions,
  Platform,
} from "react-native";
import styles from "./Designs/styles";
import * as FileSystem from "expo-file-system";

export default function FindPlantbyImage({ navigation }) {
  const [type, setType] = useState(CameraType.back);
  const [hasPermission, setHasPermission] = useState(null);
  const [capturedImage, setCapturedImage] = useState(null);
  const [base64Image, setBase64Image] = useState(null);

  const [cameraRef, setCameraRef] = useState(null);

  const [imagePadding, setImagePadding] = useState(0);
  const [ratio, setRatio] = useState("4:3");
  const { height, width } = Dimensions.get("window");
  const screenRatio = height / width;
  const [isRatioSet, setIsRatioSet] = useState(false);

  console.log(imagePadding, ratio, height, width, screenRatio, isRatioSet);

  const prepareRatio = async () => {
    let desiredRatio = "4:3";
    if (Platform.OS === "android") {
      console.log("before ratios");
      const ratios = await cameraRef.getSupportedRatiosAsync();
      console.log(ratios, "< ratios");
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
      console.log(imagePadding);
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
    console.log(base64Image);
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
          ref={(ref) => setCameraRef(ref)}
          onCameraReady={setCameraReady}
          ratio={ratio}
        >
          <View style={styles.buttonContainer}>
            <Button
              style={styles.button}
              onPress={toggleCameraType}
              title="Flip camera"
              color="white"
            ></Button>
          </View>
          <View>
            <Button
              style={styles.button}
              onPress={takePicture}
              title="Take Pic"
              color="white"
            ></Button>
          </View>
        </Camera>
      ) : (
        <View style={styles.previewImage}>
          <Image
            source={{ uri: capturedImage }}
            style={{ width: 400, height: 400 }}
          ></Image>
        </View>
      )}
    </View>
  );
}
