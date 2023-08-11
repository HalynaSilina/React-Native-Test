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
  SafeAreaView,
} from "react-native";
import { useState, useReducer } from "react";
import { useNavigation } from "@react-navigation/native";
import authReducer from "../reducers/authReducer";
import bgImage from "../../assets/images/background.jpg";

const initialState = {
  email: "",
  password: "",
  showPassword: false,
  secureTextEntry: true,
};

const LoginScreen = () =>{
  const [isFocused, setIsFocused] = useState("");

  const [state, dispatch] = useReducer(authReducer, initialState);
  const navigation = useNavigation();

  const handleInputBlur = () => {
    setIsFocused("");
  };

  const handleToggleShowPassword = () => {
    dispatch({
      type: "togglePasswordVisability",
      showPassword: !state.showPassword,
      secureTextEntry: !state.secureTextEntry,
    });
  };

  const handleEmailChange = (e) => {
    dispatch({ type: "setEmail", email: e });
  };

  const handlePasswordChange = (e) => {
    dispatch({ type: "setPassword", password: e });
  };

  const handleSubmit = () => {
    const formData = {
      email: state.email,
      password: state.password,
    };
    console.log(formData);
    dispatch({ type: "setEmail", email: "" });
    dispatch({ type: "setPassword", password: "" });
    navigation.replace("Home", { email: state.email });
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={styles.area}>
        <ImageBackground
          source={bgImage}
          resizeMode="cover"
          style={styles.image}
        >
          <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            keyboardVerticalOffset={-225}
          >
            <View style={styles.form}>
              <Text style={styles.title}>Увійти</Text>
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
                <Text style={styles.buttonText}>Увійти</Text>
              </Pressable>
              <Text
                style={styles.text}
                onPress={() => navigation.navigate("Registration")}
              >
                Немає акаунту?{" "}
                <Text
                  style={styles.linkText}
                  onPress={() => navigation.navigate("Registration")}
                >
                  Зареєструватися
                </Text>
              </Text>
            </View>
          </KeyboardAvoidingView>
        </ImageBackground>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  area: { flex: 1, width: "100%" },
  container: { flex: 1, justifyContent: "flex-end" },
  image: {
    flex: 1,
  },
  form: {
    paddingHorizontal: 16,
    paddingVertical: 32,
    backgroundColor: "#ffffff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    alignItems: "center",
  },
  title: {
    marginTop: 16,
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
    width: "100%",
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
  text: {
    color: "#1b4371",
    marginBottom: 79,
    fontSize: 16,
    fontWeight: "400",
  },
  linkText: {
    color: "#1b4371",
    marginBottom: 111,
    fontSize: 16,
    fontWeight: "400",
    textDecorationLine: "underline",
  },
  showPasswordText: {
    position: "absolute",
    right: 16,
    top: 20,
    color: "#1B4371",
    fontSize: 16,
  },
});

export default LoginScreen;