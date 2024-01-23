import { View, Text, Image, FlatList } from "react-native";
import products from "../mook/products.json";
import { styles } from "../styles/styleSheet";
import { Link } from "react-router-native";
import { Card } from "./card";
export const Products = () => {
  const hasProducts = products?.length > 0;
  products.map((product) => {
    let cambio = product.description.replace(/<br>/g, "\n");
    product.description = cambio;
  });

  return (
    <FlatList
      data={products}
      renderItem={({ item: product }) => (
      <Card product={product}></Card>
      )}
    ></FlatList>
  );
};