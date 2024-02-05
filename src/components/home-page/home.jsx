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
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  HomeCarrusel,
  Recomended,
  RecomendedItem,
} from "../pags-secundarias/recomended";
import { useContext, useEffect, useRef } from "react";
import Products from "../../mook/products.json";
import { styles } from "../../styles/styleSheet";
import { PreguntasFrecuentes } from "./preguntas-frecuentes";
import { Flechitas } from "../../utils/flechitas";
import { UserToken } from "../../utils/contexts";
export const Home = () => {
  const { token, setToken } = useContext(UserToken);
  const images = [
    { image: require("../../../assets/banners/1.webp"), id: 800 },
    { image: require("../../../assets/banners/2.webp"), id: 801 },
    { image: require("../../../assets/banners/3.webp"), id: 802 },
  ];
  const { width } = useWindowDimensions();
  const products = Products.slice(-3);
  async function getToken() {
    const tokenStorage = await AsyncStorage.getItem("token");
    if (tokenStorage) {
      setToken(tokenStorage);
    }
  }
  useEffect(() => {
    getToken();
  }, []);
  return (
    <View style={{}}>
      <ScrollView>
        <View style={{ marginBottom: 200 }}>
          <View style={{ flex: 1, alignItems: "center" }}>
            <FlatList
              data={images}
              renderItem={({ item }) => <HomeCarrusel item={item} />}
              horizontal
              showsHorizontalScrollIndicator
              contentContainerStyle={{
                paddingBottom: 10,
              }}
              persistentScrollbar={true}
              pagingEnabled
              keyExtractor={(item) => item.id}
            />
          </View>
          <View style={[styles.container, { marginTop: 15 }]}>
            <Text style={styles.title}>Productos destacados</Text>
            <Flechitas top={120} />
            <Recomended product={products} />
          </View>
          <View style={[styles.container, { marginVertical: 15 }]}>
            <Text style={[styles.title, { marginVertical: 15 }]}>
              Preguntas frecuentes
            </Text>
            <PreguntasFrecuentes />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
