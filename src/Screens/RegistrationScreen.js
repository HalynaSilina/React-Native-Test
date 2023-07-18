import {
  ImageBackground,
  KeyboardAvoidingView,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  View,
  Image,
  SafeAreaView,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import bgImage from "../../images/background.jpg";
import photo from "../../images/photo.jpg";
import { useEffect, useState } from "react";

export default function RegistrationScreen() {
  const [keybordHide, setKeyboardHide] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [isFocused, setIsFocused] = useState("");
  const [avatar, setAvatar] = useState(false);

  const handleInputBlur = () => {
    setIsFocused("");
  };

  const handleAvatarAddPress = () => {
    if (!avatar) {
      setAvatar(true);
      return;
    }
    setAvatar(false);
  };

  const handleToggleShowPassword = () => {
    if (showPassword) {
      setShowPassword(false);
      setSecureTextEntry(true);
    } else {
      setShowPassword(true);
      setSecureTextEntry(false);
    }
  };

  useEffect(() => {
    Keyboard.addListener("keyboardDidShow", () => {
      setKeyboardHide(false);
    });
    Keyboard.addListener("keyboardDidHide", () => {
      setKeyboardHide(true);
    });
  }, [keybordHide]);

  return (
    <SafeAreaView style={styles.area}>
      <TouchableWithoutFeedback
        onPress={() => {
          Keyboard.dismiss();
        }}
      >
        <View style={styles.container}>
          <ImageBackground
            source={bgImage}
            resizeMode="cover"
            style={styles.image}
          >
            <KeyboardAvoidingView
              style={styles.container}
              behavior={Platform.OS === "ios" ? "padding" : ""}
              keyboardVerticalOffset={-200}
            >
              <View style={styles.form}>
                <View style={styles.photoContainer}>
                  {avatar && <Image source={photo} style={styles.photo} />}
                  <Pressable
                    onPress={handleAvatarAddPress}
                    style={styles.iconContainer}
                  >
                    <AntDesign
                      name="pluscircleo"
                      size={25}
                      style={!avatar ? styles.icon : styles.iconAddedAvatar}
                    />
                  </Pressable>
                </View>
                <Text style={styles.title}>Реєстрація</Text>
                <TextInput
                  style={[
                    styles.input,
                    isFocused === "loginFocused" && styles.inputFocused,
                  ]}
                  placeholder="Логін"
                  placeholderTextColor="#bdbdbd"
                  onFocus={() => setIsFocused("loginFocused")}
                  onBlur={handleInputBlur}
                />
                <TextInput
                  style={[
                    styles.input,
                    isFocused === "emailFocused" && styles.inputFocused,
                  ]}
                  placeholder="Адреса електронної пошти"
                  placeholderTextColor="#bdbdbd"
                  onFocus={() => setIsFocused("emailFocused")}
                  onBlur={handleInputBlur}
                />
                <View style={styles.passwordInput}>
                  <TextInput
                    style={[
                      styles.input,
                      isFocused === "passwordFocused" && styles.inputFocused,
                    ]}
                    placeholder="Пароль"
                    placeholderTextColor="#bdbdbd"
                    onFocus={() => setIsFocused("passwordFocused")}
                    onBlur={handleInputBlur}
                    secureTextEntry={secureTextEntry}
                    autoComplete="off"
                  />
                  {!showPassword ? (
                    <Text
                      onPress={handleToggleShowPassword}
                      style={styles.showPasswordText}
                    >
                      Показати
                    </Text>
                  ) : (
                    <Text
                      onPress={handleToggleShowPassword}
                      style={styles.showPasswordText}
                    >
                      Приховати
                    </Text>
                  )}
                </View>
                {keybordHide && (
                  <>
                    <Pressable
                      style={({ pressed }) => [
                        styles.button,
                        {
                          backgroundColor: pressed ? "#DF650C" : "#ff6c00",
                        },
                      ]}
                    >
                      <Text style={styles.buttonText}>Зареєстуватися</Text>
                    </Pressable>
                    <Text style={styles.linkText}>Вже є акаунт? Увійти</Text>
                  </>
                )}
              </View>
            </KeyboardAvoidingView>
          </ImageBackground>
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  area: { flex: 1, width: "100%" },
  container: { flex: 1, justifyContent: "flex-end" },
  image: {
    flex: 1,
  },
  form: {
    marginTop: 263,
    padding: 16,
    backgroundColor: "#ffffff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    alignItems: "center",
  },
  photoContainer: {
    width: 120,
    height: 120,
    position: "absolute",
    top: -60,
    borderRadius: 16,
    backgroundColor: "#F6F6F6",
  },
  photo: { width: 120, height: 120, borderRadius: 16, overflow: "hidden" },
  iconContainer: {
    position: "absolute",
    top: 81,
    left: 107,
  },
  icon: {
    width: 25,
    height: 25,
    borderRadius: 25,
    backgroundColor: "#ffffff",
    color: "#ff6c00",
  },
  iconAddedAvatar: {
    width: 25,
    height: 25,
    borderRadius: 25,
    backgroundColor: "#ffffff",
    color: "#e8e8e8",
    transform: [{ rotate: "45deg" }],
  },
  title: {
    marginTop: 76,
    marginBottom: 24,
    color: "#212121",
    textAlign: "center",
    fontSize: 30,
    fontWeight: 500,
  },
  input: {
    width: "100%",
    height: 50,
    padding: 16,
    marginVertical: 8,
    backgroundColor: "#f6f6f6",
    color: "#212121",
    borderColor: "#e8e8e8",
    borderStyle: "solid",
    borderRadius: 8,
    borderWidth: 1,
    fontSize: 16,
  },
  inputFocused: {
    backgroundColor: "#ffffff",
    borderColor: "#ff6c00",
    borderWidth: 1,
  },
  passwordInput: { width: "100%" },
  button: {
    width: 343,
    borderRadius: 100,
    alignItems: "center",
    paddingVertical: 16,
    paddingHorizontal: 32,
    marginTop: 35,
    marginBottom: 16,
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 16,
  },
  linkText: {
    color: "#1b4371",
    marginBottom: 29,
    fontSize: 16,
    fontWeight: "400",
  },
  showPasswordText: {
    position: "absolute",
    right: 16,
    top: 20,
    color: "#1B4371",
    fontSize: 16,
  },
});
