import { useEffect, useState } from "react";
import axios from "axios";
import { FlatList, Text } from "react-native";
import { Card } from "../components/productos/card";
export const ProductsList = () => {
  const [productsList, setProductsList] = useState(null);

  async function getproducts() {
    const response = await fetch("https://back-ladulcetradicion.fly.dev/product", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const valores = await response.json();
    
    return valores;
  }
  async function setProducts(){
    const products = await getproducts();
    setProductsList(products)
  }

  useEffect(() => {
    setProducts()
  }, []);
/*   const ProductFormated = productsList 
  ? productsList.map((product)=>{
    let cambio = product.description.replace(/<br>/g, "\n");
    product.description = cambio;
  } ): [] */

 /*  setProductsList(ProductFormated) */
  return (
    <FlatList
      data={productsList}
      ItemSeparatorComponent={() => <Text> </Text>}
      renderItem={({ item }) => <Card product={item} key={item.id}></Card>}
      contentContainerStyle={{
        padding: 5,
        paddingBottom: 600,
        gap: 5,
      }}
    />
  );
};
