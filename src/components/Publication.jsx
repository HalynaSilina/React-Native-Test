import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Feather";

const Publication = ({ title, image, comments, location, likes = null }) => {
  const [currentLikes, setCurrentLikes] = useState(likes);
  const navigation = useNavigation();

  const handleLikeBtnPress = () => {
    setCurrentLikes(currentLikes + 1);
  };

  return (
    <View style={styles.item}>
      <Image source={image} alt={title} style={styles.image} />
      <Text style={styles.imageTitle}>{title}</Text>
      <View style={styles.imageButtonsContainer}>
        <View style={styles.reactions}>
          <TouchableOpacity onPress={() => navigation.navigate("Comments")}>
            <View style={styles.button}>
              <Icon
                name="message-circle"
                size={24}
                color={comments === 0 ? "#BDBDBD" : "#FF6C00"}
              />
              <Text
                style={[
                  styles.commentText,
                  comments !== 0 && styles.accentCommentText,
                ]}
              >
                {comments}
              </Text>
            </View>
          </TouchableOpacity>
          {likes && (
            <TouchableOpacity onPress={handleLikeBtnPress}>
              <View style={styles.button}>
                <Icon
                  name="thumbs-up"
                  size={24}
                  color={currentLikes === 0 ? "#BDBDBD" : "#FF6C00"}
                />
                <Text
                  style={[
                    styles.commentText,
                    currentLikes !== 0 && styles.accentCommentText,
                  ]}
                >
                  {currentLikes}
                </Text>
              </View>
            </TouchableOpacity>
          )}
        </View>
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
    alignItems: "baseline"
  },
  button: { flexDirection: "row"},
  reactions: { flexDirection: "row", gap: 24 },
  locationText: {
    marginLeft: 4,
    fontSize: 16,
    fontWeight: "400",
    color: "#212121",
    textDecorationLine: "underline",
  },
  commentText: {
    marginLeft: 6,
    fontSize: 16,
    fontWeight: "400",
    color: "#BDBDBD",
  },
  accentCommentText: {
    color: "#212121",
  },
});
