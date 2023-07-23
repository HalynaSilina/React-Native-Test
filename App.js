import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
// import LoginScreen from "./src/Screens/LoginScreen";
import RegisterScreen from "./src/Screens/RegistrationScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <RegisterScreen/>
      {/* <LoginScreen/> */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
