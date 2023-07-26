import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import {
  LoginScreen,
  RegisterScreen,
  Home,
  CommentsScreen,
  MapScreen,
} from "./src/Screens/index";

const MainStack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <MainStack.Navigator initialRouteName="Login" screenOptions={{headerShown: false}}>
        <MainStack.Screen name="Registration" component={RegisterScreen} />
        <MainStack.Screen name="Login" component={LoginScreen} />
        <MainStack.Screen name="Home" component={Home} />
        <MainStack.Screen name="Comments" component={CommentsScreen} />
        <MainStack.Screen name="Map" component={MapScreen} />
      </MainStack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
};
