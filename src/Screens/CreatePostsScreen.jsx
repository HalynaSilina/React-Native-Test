import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Keyboard,
  Pressable,
  TouchableOpacity,
  ImageBackground,
  TextInput,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import IconCamera from "react-native-vector-icons/MaterialIcons";
import Icon from "react-native-vector-icons/Feather";
import forest from "../../assets/images/forest.jpg";

const CreatePostsScreen = () => {
  const [photo, setPhoto] = useState(null);
  const [title, setTitle] = useState(null);
  const [location, setLocation] = useState(null);

  const navigation = useNavigation();

  const handleCameraPress = () => {
    if (!photo) {
      setPhoto(forest);
      return;
    }
    setPhoto(null);
  };

  const handleTitleChange = (e) => {
    setTitle(e);
  };
  const handleLocationChange = (e) => {
    setLocation(e);
  };

  const resetCreation = () => {
    setPhoto(null);
    setLocation(null);
    setTitle(null);
  };

  const handleCreatePostPress = () => {
    navigation.navigate("Posts");
    resetCreation();
  };

  const disabled = photo && title && location ? false : true;

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <KeyboardAvoidingView
          style={styles.keybord}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <ImageBackground style={styles.photoContainer} source={photo}>
            <TouchableOpacity
              style={!photo ? styles.cameraButton : styles.cameraBtnOnPhoto}
              onPress={handleCameraPress}
            >
              <IconCamera
                name="camera-alt"
                size={24}
                style={photo ? styles.photoAdded : styles.withoutPhoto}
              />
            </TouchableOpacity>
          </ImageBackground>
          {!photo ? (
            <Text style={styles.loadPhotoText}>Завантажте фото</Text>
          ) : (
            <Text style={styles.loadPhotoText}>Редагувати фото</Text>
          )}

          <TextInput
            placeholder="Назва..."
            placeholderTextColor="#bdbdbd"
            value={title}
            style={styles.input}
            onChangeText={handleTitleChange}
          />
          <View style={styles.location}>
            <TextInput
              placeholder="Місцевість..."
              placeholderTextColor="#bdbdbd"
              value={location}
              style={[styles.input, styles.locationInput]}
              onChangeText={handleLocationChange}
            />
            <Icon
              name="map-pin"
              size={24}
              color={"#BDBDBD"}
              style={styles.locationIcon}
            />
          </View>
          <Pressable
            disabled={disabled}
            style={({ pressed }) => [
              styles.button,
              disabled && styles.buttonDisabled,
              pressed && styles.buttonPressed,
            ]}
            onPress={handleCreatePostPress}
          >
            <Text
              style={disabled ? styles.buttonDisababledText : styles.buttonText}
            >
              Опублікувати
            </Text>
          </Pressable>
          <TouchableOpacity style={styles.trashButton} onPress={resetCreation}>
            <Icon name="trash-2" size={24} color={"#BDBDBD"} />
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    justifyContent: "center",
    backgroundColor: "#ffffff",
  },
  photoContainer: {
    width: "100%",
    height: 240,
    marginTop: 32,
    borderRadius: 8,
    borderColor: "#E8E8E8",
    backgroundColor: "#F6F6F6",
    alignItems: "center",
    justifyContent: "center",
    resizeMode: "contain",
    overflow: "hidden",
  },
  cameraButton: {
    width: 60,
    height: 60,
    borderRadius: 50,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
  },
  cameraBtnOnPhoto: {
    width: 60,
    height: 60,
    borderRadius: 50,
    backgroundColor: "#FFFFFF4D",
    alignItems: "center",
    justifyContent: "center",
  },
  withoutPhoto: { color: "#BDBDBD" },
  photoAdded: { color: "#ffffff" },
  loadPhotoText: {
    marginTop: 8,
    marginBottom: 16,
    alignSelf: "flex-start",
    fontSize: 16,
    fontWeight: "400",
    color: "#BDBDBD",
  },
  keybord: { flex: 1, width: "100%" },
  input: {
    width: "100%",
    height: 50,
    paddingVertical: 16,
    marginVertical: 16,
    backgroundColor: "#ffffff",
    color: "#212121",
    borderBottomColor: "#e8e8e8",
    borderBottomWidth: 1,
    fontSize: 16,
  },
  location: { width: "100%" },
  locationInput: { paddingLeft: 28 },
  locationIcon: { position: "absolute", top: 25 },
  button: {
    width: "100%",
    borderRadius: 100,
    alignItems: "center",
    paddingVertical: 16,
    paddingHorizontal: 32,
    marginVertical: 16,
    backgroundColor: "#ff6c00",
  },
  buttonDisabled: { backgroundColor: "#F6F6F6" },
  buttonPressed: { backgroundColor: "#DF650C" },
  buttonText: {
    color: "#ffffff",
    fontSize: 16,
  },
  buttonDisababledText: {
    color: "#BDBDBD",
    fontSize: 16,
  },
  trashButton: {
    width: 70,
    height: 40,
    marginVertical: 9,
    backgroundColor: "#F6F6F6",
    alignItems: "center",
    justifyContent: "center",
    justifySelf: "flex-end",
    alignSelf: "center",
    borderRadius: 20,
  },
});

export default CreatePostsScreen;
