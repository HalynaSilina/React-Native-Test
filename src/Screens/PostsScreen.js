import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableHighlight,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import photo from "../../assets/images/photo.jpg";
import Icon from "react-native-vector-icons/Feather";
import image1 from "../../assets/images/forest.jpg";
import image2 from "../../assets/images/sea.jpg";
import image3 from "../../assets/images/house.jpg";

const PostsScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.area}>
      <View style={styles.container}>
        <View style={styles.user}>
          <Image source={photo} style={styles.photo} />
          <View>
            <Text style={styles.name}>Natali Romanova</Text>
            <Text style={styles.email}>email@example.com</Text>
          </View>
        </View>
        <ScrollView style={styles.listContainer}>
          <View style={styles.item}>
            <Image source={image1} alt={"Ліс"} style={styles.image} />
            <Text style={styles.imageTitle}>Ліс</Text>
            <View style={styles.imageButtonsContainer}>
              <TouchableHighlight
                onPress={() => navigation.navigate("Comments")}
              >
                <View style={styles.button}>
                  <Icon name="message-circle" size={24} color={"#BDBDBD"} />
                  <Text style={styles.commentText}>0</Text>
                </View>
              </TouchableHighlight>
              <TouchableHighlight onPress={() => navigation.navigate("Map")}>
                <View style={styles.button}>
                  <Icon name="map-pin" size={24} color={"#BDBDBD"} />
                  <Text style={styles.locationText}>
                    Ivano-Frankivs'k Region, Ukraine
                  </Text>
                </View>
              </TouchableHighlight>
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
              <TouchableHighlight
                onPress={() => navigation.navigate("Comments")}
              >
                <View style={styles.button}>
                  <Icon name="message-circle" size={24} color={"#BDBDBD"} />
                  <Text style={styles.commentText}>0</Text>
                </View>
              </TouchableHighlight>
              <TouchableHighlight onPress={() => navigation.navigate("Map")}>
                <View style={styles.button}>
                  <Icon name="map-pin" size={24} color={"#BDBDBD"} />
                  <Text style={styles.locationText}>Ukraine</Text>
                </View>
              </TouchableHighlight>
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
              <TouchableHighlight
                onPress={() => navigation.navigate("Comments")}
              >
                <View style={styles.button}>
                  <Icon name="message-circle" size={24} color={"#BDBDBD"} />
                  <Text style={styles.commentText}>0</Text>
                </View>
              </TouchableHighlight>
              <TouchableHighlight onPress={() => navigation.navigate("Map")}>
                <View style={styles.button}>
                  <Icon name="map-pin" size={24} color={"#BDBDBD"} />
                  <Text style={styles.locationText}>Italy</Text>
                </View>
              </TouchableHighlight>
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  area: { flex: 1, width: "100%" },
  container: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    paddingHorizontal: 16,
    backgroundColor: "#ffffff",
  },
  user: {
    marginVertical: 32,
    flexDirection: "row",
    alignItems: "center",
  },
  photo: {
    width: 60,
    height: 60,
    marginRight: 8,
    borderRadius: 16,
    overflow: "hidden",
  },
  name: {
    fontSize: 13,
    fontWeight: "bold",
    color: "#212121",
  },
  email: {
    fontSize: 11,
    fontWeight: "regular",
    color: "#212121CC",
  },
  listContainer: { width: "100%" },
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
  },
  button: { flexDirection: "row"},
  locationText: {
    fontSize: 16,
    fontWeight: "400",
    color: "#212121",
    textDecorationLine: "underline",
  },
  commentText: {
    fontSize: 16,
    fontWeight: "400",
    color: "#BDBDBD",
  }
});

export default PostsScreen;
