import { View, Text, Image, FlatList } from "react-native";
/* import products from "../../mook/products.json";
 */ import { ObtencionPoductos } from "../../services/products";
import categories from "../../mook/categories.json";
import { styles } from "../../styles/styleSheet";
import { Link } from "react-router-native";
import { Card } from "./card";
import { ItemCategories } from "./itemCategories";
import { useEffect, useState } from "react";

export const Products = () => {
  const [products, setProducts] = useState(null);
  const lsaldjkf = async() => {
    const respuesta = await ObtencionPoductos();
    return respuesta
  };
  let hasProducts
  useEffect(() => {
    const respuesta = lsaldjkf();
    hasProducts = respuesta?.length > 0;
    
    setProducts(respuesta);
  }, []);

  return (
    <View>
      <View>
        <View>
          <FlatList
            data={categories}
            renderItem={({ item }) => <ItemCategories categories={item} />}
            horizontal={true}
            keyExtractor={(item) => item.id}
            contentContainerStyle={{
              padding: 5,
              paddingBottom: 10,
              gap: 5,
            }}
            persistentScrollbar={true}
            showsHorizontalScrollIndicator
          />

          <FlatList
            data={products}
            renderItem={({ item: product }) => <Card product={product}></Card>}
            contentContainerStyle={{
              padding: 5,
              paddingBottom: 600,
              gap: 5,
            }}
          ></FlatList>
        </View>
      </View>
    </View>
  );
};
