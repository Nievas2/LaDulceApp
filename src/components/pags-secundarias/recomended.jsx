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
import { Link } from "react-router-native";
export const Recomended = ({ product }) => {
  const { width } = useWindowDimensions();
  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <FlatList
        data={product}
        renderItem={({ item }) => <RecomendedItem item={item} />}
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
  );
};
export const RecomendedItem = ({ item }) => {
  const { width } = useWindowDimensions();
  return (
    <Link
      to={{
        pathname: `/producto/${item.id}`,
      }}
      underlayColor="transparent"
    >
      <View style={[styles.container, { width }]} key={item.id}>
        <View style={{ flex: 1 }}>
          <Image
            source={{ uri: item.image }}
            style={[
              {
                justifyContent: "center",
                width: 250,
                height: 250,
              },
            ]}
          />
        </View>
      </View>
    </Link>
  );
};

export const HomeCarrusel = ({ item }) => {
  const { width } = useWindowDimensions();
  return (
    <View style={[styles.container, { width }]} key={item.id}>
      <View>
        <Image
          source={item.image}
          style={[
            {
              justifyContent: "center",
              width: 400,
              height: 250,
            },
          ]}
        />
      </View>
    </View>
  );
};
export function seleccionarTresProductosUnicos({ product, id }) {
  const seleccionados = [];

  // Función para verificar si un producto ya fue seleccionado
  const yaSeleccionado = (id) =>
    seleccionados.some((producto) => producto.id === id);

  // Mientras no tengamos 3 productos únicos
  while (seleccionados.length < 3) {
    // Seleccionar aleatoriamente un producto del array
    const productoAleatorio =
      product[Math.floor(Math.random() * product.length)];

    // Verificar si el producto ya fue seleccionado
    if (!yaSeleccionado(productoAleatorio.id) && id != productoAleatorio.id) {
      // Agregar el producto a la lista de seleccionados
      seleccionados.push(productoAleatorio);
    }
  }

  return seleccionados;
}
