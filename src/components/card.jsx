import { View, Text, Image, TouchableOpacity, Button } from "react-native";
import { styles } from "../styles/styleSheet";
import { Link } from "react-router-native";
export const Card = ({ product }) => {
  return (
    <View style={styles.card}>
      <TouchableOpacity>
        <Link
          to={{
            pathname: `/producto/${product.id}`,
            state: { product },
          }}
          underlayColor="transparent"
        >
          <View key={product.id}>
            <Image source={{ uri: product.image }} style={styles.image} />
            <Text style={styles.title}>{product.name}</Text>
            <Text numberOfLines={3} ellipsizeMode="tail" >
              {product.description}
            </Text>
          </View>
        </Link>
      </TouchableOpacity>
    </View>
  );
};
