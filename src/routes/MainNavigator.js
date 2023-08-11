import { createStackNavigator } from "@react-navigation/stack";
import {
  LoginScreen,
  RegisterScreen,
  CommentsScreen,
  MapScreen,
} from "../Screens/index.js";
import HomeBottomNavigator from "./HomeBottomNavigator.js";

const MainStack = createStackNavigator();

export default function MainNavigator() {
  return (
    <MainStack.Navigator
      initialRouteName="Login"
      screenOptions={{ headerShown: false }}
    >
      <MainStack.Screen name="Registration" component={RegisterScreen} />
      <MainStack.Screen name="Login" component={LoginScreen} />
      <MainStack.Screen name="Home" component={HomeBottomNavigator} />
      <MainStack.Screen name="Comments" component={CommentsScreen} />
      <MainStack.Screen name="Map" component={MapScreen} />
    </MainStack.Navigator>
  );
}
