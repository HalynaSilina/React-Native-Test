import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableHighlight,
} from "react-native";
import photo from "../../assets/images/photo.jpg";
import Icon from "react-native-vector-icons/Feather";
import image1 from "../../assets/images/forest.jpg";
import image2 from "../../assets/images/sea.jpg";
import image3 from "../../assets/images/house.jpg";

const PostsScreen = () => {
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
        <ScrollView>
          <View style={styles.item}>
            <Image
              source={image1}
              alt={title}
              resizeMode="contain"
              style={styles.image}
            />
            <Text>{title}</Text>
            <View>
              <TouchableHighlight>
                <Icon name="message-circle" size={24} color={"#212121CC"} />
              </TouchableHighlight>
              <Text>{commentsNumber}</Text>
              <TouchableHighlight>
                <Icon name="map-pin" size={24} color={"#212121CC"} />
              </TouchableHighlight>
              <Text>{location}</Text>
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
    paddingVertical: 32,
    backgroundColor: "#ffffff",
  },
  user: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 32,
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
  item: { width: "100%" },
  image: {
    height: 240,
    borderRadius: 8,
    overflow: "hidden",
  },
});

export default PostsScreen;
