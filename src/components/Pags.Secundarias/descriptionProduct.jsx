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
import { Recomended } from "./recomended";
import { Carrusel } from "./carrusel";

export const DescriptionProduct = () => {
  let { id } = useParams();
  let product = {};

  products.find((element) => {
    if (element.id == id) product = element;
  });
  return (
    <View
      style={{
        margin: 5,
        backgroundColor: "#fbe4dd",
        borderRadius: 15,
      }}
    >
      <ScrollView>
        <View style={{ flex: 1, marginBottom: 200 }}>
          <View style={{ flex: 1 }}>
            <Carrusel />
          </View>
          <View style={{ flex: 1, padding: 15 }}>
            <View
              style={{
                backgroundColor: "#eee",
                borderRadius: 15,
                marginBottom: 25,
              }}
            >
              <View style={{ alignSelf: "center", flex: 1 }}>
                <Text style={styles.title}>{product.name}</Text>
                <Text style={styles.subTitle}>
                  Precio: ${product.price * 1000}
                </Text>
                <Text style={styles.texts}>{product.description}</Text>
              </View>
              <View
                style={{ flexDirection: "row", flex: 2, marginBottom: 150 }}
              >
                <View style={{ flex: 1 }}>
                  <Link
                    to={{ pathname: "/" }}
                    style={{ margin: 15, width: 150 }}
                    underlayColor="transparent"
                  >
                    <View
                      style={{
                        backgroundColor: "#c1694c",
                        padding: 19,
                        borderRadius: 15,
                      }}
                    >
                      <Text style={{ textAlign: "center" }}>Volver</Text>
                    </View>
                  </Link>
                </View>
                <View style={{ flex: 1 }}>
                  <Link
                    to={{ pathname: "/carrito" }}
                    style={{ margin: 15, width: 150 }}
                    underlayColor="transparent"
                  >
                    <View
                      style={{
                        backgroundColor: "#c1694c",
                        padding: 19,
                        borderRadius: 15,
                      }}
                    >
                      <Text style={{ textAlign: "center" }}>Comprar</Text>
                    </View>
                  </Link>
                </View>
              </View>
            </View>
          </View>
          <View style={[styles.container]}>
            <Text style={styles.title}>Productos Recomendados</Text>
            <Recomended />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
