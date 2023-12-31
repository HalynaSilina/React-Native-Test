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
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useState, useReducer } from "react";
import { AntDesign } from "@expo/vector-icons";
import authReducer from "../reducers/authReducer";
import bgImage from "../../assets/images/background.jpg";
import photo from "../../assets/images/photo.jpg";

const initialState = {
  login: "",
  email: "",
  password: "",
  showPassword: false,
  secureTextEntry: true,
};

export default function RegistrationScreen() {
  const [isFocused, setIsFocused] = useState("");
  const [avatar, setAvatar] = useState(false);

  const [state, dispatch] = useReducer(authReducer, initialState);
  const navigation = useNavigation();

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
    dispatch({
      type: "togglePasswordVisability",
      showPassword: !state.showPassword,
      secureTextEntry: !state.secureTextEntry,
    });
  };

  const handleLoginChange = (e) => {
    dispatch({ type: "setLogin", login: e });
  };

  const handleEmailChange = (e) => {
    dispatch({ type: "setEmail", email: e });
  };

  const handlePasswordChange = (e) => {
    dispatch({ type: "setPassword", password: e });
  };

  const handleSubmit = () => {
    const formData = {
      login: state.login,
      email: state.email,
      password: state.password,
    };
    console.log(formData);
    dispatch({ type: "setLogin", login: "" });
    dispatch({ type: "setEmail", email: "" });
    dispatch({ type: "setPassword", password: "" });
    navigation.replace("Home")
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ImageBackground source={bgImage} resizeMode="cover" style={styles.image}>
        <KeyboardAvoidingView
          style={styles.container}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          keyboardVerticalOffset={-180}
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
              value={state.login}
              style={[
                styles.input,
                isFocused === "loginFocused" && styles.inputFocused,
              ]}
              placeholder="Логін"
              placeholderTextColor="#bdbdbd"
              onFocus={() => setIsFocused("loginFocused")}
              onBlur={handleInputBlur}
              onChangeText={handleLoginChange}
            />
            <TextInput
              value={state.email}
              style={[
                styles.input,
                isFocused === "emailFocused" && styles.inputFocused,
              ]}
              placeholder="Адреса електронної пошти"
              placeholderTextColor="#bdbdbd"
              onFocus={() => setIsFocused("emailFocused")}
              onBlur={handleInputBlur}
              onChangeText={handleEmailChange}
            />
            <View style={styles.passwordInput}>
              <TextInput
                value={state.password}
                style={[
                  styles.input,
                  isFocused === "passwordFocused" && styles.inputFocused,
                ]}
                placeholder="Пароль"
                placeholderTextColor="#bdbdbd"
                onFocus={() => setIsFocused("passwordFocused")}
                onBlur={handleInputBlur}
                onChangeText={handlePasswordChange}
                secureTextEntry={state.secureTextEntry}
                autoComplete="off"
              />
              {!state.showPassword ? (
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
            <Pressable
              style={({ pressed }) => [
                styles.button,
                {
                  backgroundColor: pressed ? "#DF650C" : "#ff6c00",
                },
              ]}
              onPress={handleSubmit}
            >
              <Text
                style={styles.buttonText}
              >
                Зареєстуватися
              </Text>
            </Pressable>
            <Text
              style={styles.linkText}
              onPress={() => navigation.navigate("Login")}
            >
              Вже є акаунт? Увійти
            </Text>
          </View>
        </KeyboardAvoidingView>
      </ImageBackground>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  image: { flex: 1, width: "100%" },
  container: { flex: 1, justifyContent: "flex-end" },
  form: {
    paddingHorizontal: 16,
    paddingVertical: 45,
    backgroundColor: "#ffffff",
    alignItems: "center",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
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
    marginTop: 47,
    marginBottom: 24,
    color: "#212121",
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
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
    width: "100%",
    borderRadius: 100,
    alignItems: "center",
    paddingVertical: 16,
    paddingHorizontal: 32,
    marginTop: 37,
    marginBottom: 16,
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 16,
  },
  linkText: {
    color: "#1b4371",
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
