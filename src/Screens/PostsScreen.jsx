import { StyleSheet, FlatList } from "react-native";
import photo from "../../assets/images/photo.jpg";
import image1 from "../../assets/images/forest.jpg";
import image2 from "../../assets/images/sea.jpg";
import image3 from "../../assets/images/house.jpg";
import Publication from "../components/Publication";
import PostsHeader from "../components/PostsHeader";

const DATA = [
  {
    id: "1",
    image: image1,
    title: "Ліс",
    comments: "0",
    location: "Ivano-Frankivs'k Region, Ukraine",
    likes: null,
  },
  {
    id: "2",
    title: "Захід на Чорному морі",
    image: image2,
    comments: "0",
    location: "Ukraine",
    likes: null,
  },
  {
    id: "3",
    title: "Старий будиночок у Венеції",
    image: image3,
    comments: "0",
    location: "Italy",
    likes: null,
  },
];

const PostsScreen = () => {
  return (
    <FlatList
      style={styles.container}
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
      ListHeaderComponent={
        <PostsHeader
          photo={photo}
          name="Natali Romanova"
          email="email@example.com"
        />
      }
      showsVerticalScrollIndicator={false}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    paddingHorizontal: 16,
    backgroundColor: "#ffffff",
  },
});

export default PostsScreen;
