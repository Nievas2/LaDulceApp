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
  import React, { useState, useRef } from "react";
  import { styles } from "../../styles/styleSheet";
  import { useParams } from "react-router-native";
  import { Link } from "react-router-native";
  import products from "../../mook/products.json";
import { Flechitas } from "../../utils/flechitas";
  export const ItemsCarousel = ({ item }) => {
    const { width } = useWindowDimensions();
    return (
      <View style={[styles.container, { width }]}>
        <View >
          <Image
            source={{ uri: item.ImageProduct.image }}
            style={[
              
              {
               
                justifyContent: "center",
                width: 250,
                height: 250
              },
            ]}
          />
        </View>
      </View>
    );
  };
  export const Carrusel = () => {
    let { id } = useParams();
    let product = {};
    const scrollX = useRef(new Animated.Value(0)).current; 
    const { width } = useWindowDimensions();
    products.find((element) => {
      if (element.id == id) product = element;
    });
  
    return (
      <View style={{ flex: 1, alignItems: "center" }}>
        <FlatList
          data={product.ImagesProductAsocciations}
          renderItem={({ item }) => <ItemsCarousel item={item} />}
          horizontal
          showsHorizontalScrollIndicator
          contentContainerStyle={{
            margin: 0,
            paddingBottom: 10,

          }}
          persistentScrollbar={true}
          pagingEnabled
          bounces={false}
          keyExtractor={(item) => item.id}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX  } } }],
            {
              useNativeDriver: false,
            }
          )}
        />
      </View>
    );
  };