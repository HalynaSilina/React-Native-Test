import { useNavigation } from "@react-navigation/native";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Feather";

const Publication = ({ title, image, comments, location, likes }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.item}>
      <Image source={image} alt={title} style={styles.image} />
      <Text style={styles.imageTitle}>{title}</Text>
      <View style={styles.imageButtonsContainer}>
        <TouchableOpacity onPress={() => navigation.navigate("Comments")}>
          <View style={styles.button}>
            <Icon name="message-circle" size={24} color={"#BDBDBD"} />
            <Text style={styles.commentText}>{comments}</Text>
          </View>
        </TouchableOpacity>
        {likes && (
          <TouchableOpacity>
            <View style={styles.button}>
              <Icon name="thumbs-up" size={24} color={"#FF6C00"} />
              <Text style={styles.commentText}>{likes}</Text>
            </View>
          </TouchableOpacity>
        )}
        <TouchableOpacity onPress={() => navigation.navigate("Map")}>
          <View style={styles.button}>
            <Icon name="map-pin" size={24} color={"#BDBDBD"} />
            <Text style={styles.locationText}>{location}</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Publication;

const styles = StyleSheet.create({
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
  button: { flexDirection: "row" },
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
  },
});
