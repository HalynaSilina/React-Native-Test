import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { TouchableHighlight } from "react-native";
import { useNavigation } from "@react-navigation/native";
import CreatePostsScreen from "./CreatePostsScreen";
import PostsScreen from "./PostsScreen";
import ProfileScreen from "./ProfileScreen";
import Icon from "react-native-vector-icons/Feather";

const Tabs = createBottomTabNavigator();

const Home = () => {
  const navigation = useNavigation();
  return (
    <Tabs.Navigator
      initialRouteName="Posts"
      screenOptions={{
        headerStyle: {
          backgroundColor: "#ffffff",
          borderBottomColor: "#0000004D",
          borderBottomWidth: 0.5,
        },
        headerTintColor: "#212121",
        headerTitleStyle: {
          fontFamily: "Roboto",
          fontSize: 17,
          fontWeight: "bold",
          textAlign: "center",
          letterSpacing: -0.41,
        },
      }}
    >
      <Tabs.Screen
        name="Posts"
        component={PostsScreen}
        options={{ title: "Публікації",  headerRight: () => (
          <TouchableHighlight
            onPress={() => navigation.navigate("Registration")}
          >
            <Icon name="log-out" color="#BDBDBD" size={24} />
          </TouchableHighlight>
        ), }}
      />
      <Tabs.Screen
        name="CreatePosts"
        component={CreatePostsScreen}
        options={{ title: "Створити публікацію" }}
      />
      <Tabs.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ headerShown: false }}
      />
    </Tabs.Navigator>
  );
};

export default Home;
