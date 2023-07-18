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
import { useEffect, useState, useReducer } from "react";
import authReducer from "../reducers/authReducer";
import bgImage from "../../assets/images/background.jpg";

const initialState = {
  email: "",
  password: "",
  showPassword: false,
  secureTextEntry: true,
};

export default function LoginScreen() {
  const [keybordHide, setKeyboardHide] = useState(true);
  const [isFocused, setIsFocused] = useState("");

  const [state, dispatch] = useReducer(authReducer, initialState);

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
                {keybordHide && (
                  <>
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
                    <Text style={styles.text}>
                      Немає акаунту?{" "}
                      <Text style={styles.linkText}>Зареєструватися</Text>
                    </Text>
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
    marginTop: 279,
    padding: 16,
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
    marginBottom: 111,
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