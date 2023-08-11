import { View, Text, StyleSheet, Image } from "react-native";

const PostsHeader = ({ photo, name, email }) => {
  return (
    <View style={styles.user}>
      <Image source={photo} style={styles.photo} />
      <View>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.email}>{email}</Text>
      </View>
    </View>
  );
};

export default PostsHeader;

const styles = StyleSheet.create({
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
});
