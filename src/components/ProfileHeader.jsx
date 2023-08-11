import { StyleSheet, Text } from "react-native";

const ProfileHeader = ({ name }) => {
  return (
      <Text style={styles.title}>{name}</Text>
  );
};

export default ProfileHeader;

const styles = StyleSheet.create({
  title: {
    marginVertical: 32,
    color: "#212121",
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
  },
});
