import {
  Dimensions,
  View,
  Text,
  Image,
  useWindowDimensions,
  FlatList,
  TouchableOpacity,
  Button,
  ScrollView,
  Animated,
} from "react-native";
import {
  HomeCarrusel,
  Recomended,
  RecomendedItem,
} from "../pags-secundarias/recomended";
import { useRef } from "react";
import Products from "../../mook/products.json";
import { styles } from "../../styles/styleSheet";
import { PreguntasFrecuentes } from "./preguntas-frecuentes";
export const Home = () => {
  const images = [
    { image: require("../../../assets/carrusel/1.webp") },
    { image: require("../../../assets/carrusel/2.webp") },
    { image: require("../../../assets/carrusel/3.webp") },
  ];
  const { width } = useWindowDimensions();
  const scrollX = useRef(new Animated.Value(0)).current;
  const products = Products.slice(-3);
  return (
    <View style={{ padding: 15 }}>
      <ScrollView>
        <View style={{ flex: 1, marginBottom: 200 }}>
          <View style={{ flex: 1 }}>
            <View
              style={{
                alignItems: "center",
              }}
            >
              <FlatList
                data={images}
                renderItem={({ item }) => <HomeCarrusel item={item} />}
                horizontal
                showsHorizontalScrollIndicator
                pagingEnabled
                bounces={false}
                keyExtractor={(item) => item.id}
                onScroll={Animated.event(
                  [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                  {
                    useNativeDriver: false,
                  }
                )}
              />
            </View>
          </View>
          <View style={[styles.container]}>
            <Text style={styles.title}>Productos destacados</Text>
            <Recomended product={products} />
          </View>
          <View style={[styles.container]}>
            <PreguntasFrecuentes />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
