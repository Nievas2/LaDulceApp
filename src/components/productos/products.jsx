import { View, Text, Image, FlatList } from "react-native";
import products from '../../mook/products.json'
import categories from "../../mook/categories.json";
import { styles } from "../../styles/styleSheet";
import { Link } from "react-router-native";
import { Card } from "./card";
import { ItemCategories } from "./itemCategories";
import { useEffect, useState } from "react";
import { ProductsList } from "../../services/products";


export const Products = () => {
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
          {/* <ProductsList></ProductsList> */}
        </View>
      </View>
    </View>
  );
};
