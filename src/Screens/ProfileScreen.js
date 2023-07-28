import {
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import Icon from "react-native-vector-icons/Feather";
import bgImage from "../../assets/images/background.jpg";
import photo from "../../assets/images/photo.jpg";
import image1 from "../../assets/images/forest.jpg";
import image2 from "../../assets/images/sea.jpg";
import image3 from "../../assets/images/house.jpg";

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
          <Text style={styles.title}>Natali Romanova</Text>
          <ScrollView style={styles.listContainer}>
            <View style={styles.item}>
              <Image source={image1} alt={"Ліс"} style={styles.image} />
              <Text style={styles.imageTitle}>Ліс</Text>
              <View style={styles.imageButtonsContainer}>
                <TouchableOpacity
                  onPress={() => navigation.navigate("Comments")}
                >
                  <View style={styles.button}>
                    <Icon name="message-circle" size={24} color={"#FF6C00"} />
                    <Text style={styles.commentText}>8</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity>
                  <View style={styles.button}>
                    <Icon name="thumbs-up" size={24} color={"#FF6C00"} />
                    <Text style={styles.commentText}>153</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("Map")}>
                  <View style={styles.button}>
                    <Icon name="map-pin" size={24} color={"#BDBDBD"} />
                    <Text style={styles.locationText}>
                      Ivano-Frankivs'k Region, Ukraine
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.item}>
              <Image
                source={image2}
                alt={"Захід на Чорному морі"}
                style={styles.image}
              />
              <Text style={styles.imageTitle}>Захід на Чорному морі</Text>
              <View style={styles.imageButtonsContainer}>
                <TouchableOpacity
                  onPress={() => navigation.navigate("Comments")}
                >
                  <View style={styles.button}>
                    <Icon name="message-circle" size={24} color={"#FF6C00"} />
                    <Text style={styles.commentText}>3</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity>
                  <View style={styles.button}>
                    <Icon name="thumbs-up" size={24} color={"#FF6C00"} />
                    <Text style={styles.commentText}>200</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("Map")}>
                  <View style={styles.button}>
                    <Icon name="map-pin" size={24} color={"#BDBDBD"} />
                    <Text style={styles.locationText}>Ukraine</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.item}>
              <Image
                source={image3}
                alt={"Старий будиночок у Венеції"}
                style={styles.image}
              />
              <Text style={styles.imageTitle}>Старий будиночок у Венеції</Text>
              <View style={styles.imageButtonsContainer}>
                <TouchableOpacity
                  onPress={() => navigation.navigate("Comments")}
                >
                  <View style={styles.button}>
                    <Icon name="message-circle" size={24} color={"#FF6C00"} />
                    <Text style={styles.commentText}>50</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity>
                  <View style={styles.button}>
                    <Icon name="thumbs-up" size={24} color={"#FF6C00"} />
                    <Text style={styles.commentText}>200</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("Map")}>
                  <View style={styles.button}>
                    <Icon name="map-pin" size={24} color={"#BDBDBD"} />
                    <Text style={styles.locationText}>Italy</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, width: "100%", justifyContent: "flex-end" },
  bgImage: { flex: 1, width: "100%" },
  form: {
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
  title: {
    marginVertical: 32,
    color: "#212121",
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
  },
  listContainer: { width: "100%", height: 400 },
  item: { marginBottom: 32 },
  image: {
    width: "100%",
    height: 240,
    borderRadius: 8,
    resizeMode: "cover",
    overflow: "hidden",
  },
  imageTitle: {
    marginVertical: 8,
    fontSize: 16,
    fontWeight: "bold",
    color: "#212121",
  },
  imageButtonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  button: { flexDirection: "row"},
  locationText: {
    marginLeft: 6,
    fontSize: 16,
    fontWeight: "400",
    color: "#212121",
    textDecorationLine: "underline",
  },
  commentText: {
    marginLeft: 6,
    fontSize: 16,
    fontWeight: "400",
    color: "#212121",
  },
});

export default ProfileScreen;
