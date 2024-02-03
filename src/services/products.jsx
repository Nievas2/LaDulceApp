import { useEffect, useState } from "react";
import axios from "axios";
import { FlatList, Text } from "react-native";
import { Card } from "../components/productos/card";
export const ProductsList = () => {
  const [productsList, setProductsList] = useState(null);

  const fetchProducts = async () => {
    const response = await globalThis.fetch(
      "https://back-ladulce.fly.dev/product"
    );
    const json = await response.json();
    setProductsList(json);
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  const ProductFormated = productsList 
  ? productsList.map((product)=>{
    let cambio = product.description.replace(/<br>/g, "\n");
    product.description = cambio;
  } ): []
  return (
    <FlatList
      data={productsList}
      ItemSeparatorComponent={() => <Text> </Text>}
      renderItem={({ item }) => <Card product={item} key={item.id}></Card>}
    />
  );
};
