import { TouchableHighlight } from "react-native";
import { StyleSheet, Text, View, Image } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import defaultImage from "../../assets/images/no-image.jpg";

const PublicationsItem = ({ image, title, comments, location }) => {
  const commentsNumber = comments.length;
  return (
    <View style={styles.item}>
      <Image
        source={{ uri: image, }}
        defaultSource={defaultImage}
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
  );
};

const styles = StyleSheet.create({ item: { width: "100%" },
 image: {
    height: 240,
    borderRadius: 8,
    overflow: "hidden"
 }});

export default PublicationsItem;
