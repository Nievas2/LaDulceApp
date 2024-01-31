import { View, Text, Image, FlatList } from "react-native";
import products from "../../mook/products.json";
import categories from "../../mook/categories.json";
import { styles } from "../../styles/styleSheet";
import { Link } from "react-router-native";
import { Card } from "./card";
import { ItemCategories } from "./itemCategories";
export const Products = () => {
  const hasProducts = products?.length > 0;
  products.map((product) => {
    let cambio = product.description.replace(/<br>/g, "\n");
    product.description = cambio;
  });

  return (
    <View >
        <FlatList
          data={categories}
          renderItem={({ item }) => <ItemCategories categories={item}/>}
          horizontal = {true}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{
            padding: 5,
            gap: 5
          }}
          showsHorizontalScrollIndicator={false}
        />
 

      <FlatList
        data={products}
        renderItem={({ item: product }) => <Card product={product}></Card>}
      ></FlatList>
    </View>
  );
};
