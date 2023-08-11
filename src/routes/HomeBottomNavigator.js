import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  CreatePostsScreen,
  PostsScreen,
  ProfileScreen,
} from "../Screens/index.js";
import Icon from "react-native-vector-icons/Feather";

const Tabs = createBottomTabNavigator();

const HomeBottomNavigator = () => {
  const navigation = useNavigation();
  return (
    <Tabs.Navigator
      initialRouteName="Posts"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          color = focused ? "#ffffff" : "#212121CC";
          if (route.name === "Posts") {
            iconName = "grid";
            size = 24;
          } else if (route.name === "CreatePosts") {
            iconName = "plus";
            size = 16;
          } else if (route.name === "Profile") {
            size = 24;
            iconName = "user";
          }
          return <Icon name={iconName} size={size} color={color} />;
        },
        ...tabBarOptions,
      })}
    >
      <Tabs.Screen
        name="Posts"
        component={PostsScreen}
        options={{
          title: "Публікації",
          headerRight: () => (
            <TouchableOpacity
              style={{ marginRight: 10 }}
              onPress={() => navigation.navigate("Login")}
            >
              <Icon name="log-out" color="#BDBDBD" size={24} />
            </TouchableOpacity>
          ),
        }}
      />
      <Tabs.Screen
        name="CreatePosts"
        component={CreatePostsScreen}
        options={({ navigation }) => ({
          title: "Створити публікацію",
          tabBarStyle: { display: "none" },
          headerLeft: () => (
            <TouchableOpacity
              style={{ marginLeft: 16 }}
              onPress={() => navigation.goBack()}
            >
              <Icon name="arrow-left" color="#212121CC" size={24} />
            </TouchableOpacity>
          ),
        })}
      />
      <Tabs.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ headerShown: false }}
      />
    </Tabs.Navigator>
  );
};

export default HomeBottomNavigator;

const tabBarOptions = {
  tabBarShowLabel: false,
  tabBarStyle: {
    height: 60,
    paddingHorizontal: 82,
    paddingTop: 9,
    backgroundColor: "#ffffff",
    borderTopColor: "#0000004D",
  },
  tabBarActiveBackgroundColor: "#FF6C00",
  tabBarInactiveBackgroundColor: "#ffffff",
  tabBarItemStyle: {
    height: 40,
    width: 70,
    borderRadius: 20,
  },
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
  headerTitleAlign: "center",
};
