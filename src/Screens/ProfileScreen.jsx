import {
  ImageBackground,
  Pressable,
  StyleSheet,
  View,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import Publication from "../components/Publication";
import { AntDesign } from "@expo/vector-icons";
import Icon from "react-native-vector-icons/Feather";
import bgImage from "../../assets/images/background.jpg";
import photo from "../../assets/images/photo.jpg";
import image1 from "../../assets/images/forest.jpg";
import image2 from "../../assets/images/sea.jpg";
import image3 from "../../assets/images/house.jpg";
import ProfileHeader from "../components/ProfileHeader";

const DATA = [
  {
    id: "1",
    image: image1,
    title: "Ліс",
    comments: "8",
    location: "Ivano-Frankivs'k Region, Ukraine",
    likes: "153",
  },
  {
    id: "2",
    title: "Захід на Чорному морі",
    image: image2,
    comments: "3",
    location: "Ukraine",
    likes: "200",
  },
  {
    id: "3",
    title: "Старий будиночок у Венеції",
    image: image3,
    comments: "50",
    location: "Italy",
    likes: "200",
  },
];

const ProfileScreen = () => {
  const [avatar, setAvatar] = useState(false);
  const navigation = useNavigation();

  const handleAvatarAddPress = () => {
    if (!avatar) {
      setAvatar(true);
      return;
    }
    setAvatar(false);
  };
  return (
    <ImageBackground source={bgImage} resizeMode="cover" style={styles.bgImage}>
      <View style={styles.container}>
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
          <TouchableOpacity
            style={styles.logoutButton}
            onPress={() => navigation.navigate("Login")}
          >
            <Icon name="log-out" color="#BDBDBD" size={24} />
          </TouchableOpacity>
          <FlatList
            style={styles.listContainer}
            data={DATA}
            renderItem={({ item }) => (
              <Publication
                title={item.title}
                image={item.image}
                comments={item.comments}
                location={item.location}
                likes={item.likes}
              />
            )}
            keyExtractor={(item) => item.id}
            ListHeaderComponent={<ProfileHeader name="Natali Romanova" />}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, width: "100%", justifyContent: "flex-end" },
  bgImage: { flex: 1, width: "100%" },
  form: {
    marginTop: 60,
    paddingTop: 60,
    paddingHorizontal: 16,
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
  logoutButton: { position: "absolute", right: 16, top: 22 },
  listContainer: { width: "100%", marginTop: 2 },
});

export default ProfileScreen;
