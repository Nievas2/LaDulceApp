import { Image, View, useWindowDimensions } from "react-native";
import { styles } from "../../styles/styleSheet";

export const ItemCategories = ({categories}) => {
    const { width } = useWindowDimensions();
  return (
        <View style={[{marginHorizontal: 10,
                  padding: 10,
                  borderRadius: 34,
                  backgroundColor: "#fff",
                  alignItems: "center",}]}>
            <Image style={styles.itemCategory} source={{uri: categories.image}}/>
        </View>

  );
};
