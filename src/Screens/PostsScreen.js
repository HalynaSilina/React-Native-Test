import { View, Text, StyleSheet, SafeAreaView, Image } from "react-native";
import photo from "../../assets/images/photo.jpg";
import { FlatList } from "react-native";
import PublicationsItem from "../components/PublicationsItem";
import DATA from "../../data.json";

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
        <FlatList
          data={DATA}
          renderItem={({ item }) => (
            <PublicationsItem
              image={item.image}
              title={item.title}
              comments={item.comments}
              location={item.location}
              key={item.id}
            />
          )}
          keyExtractor={(item) => item.id}
          style={styles.listContainer}
        />
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
});

export default PostsScreen;
