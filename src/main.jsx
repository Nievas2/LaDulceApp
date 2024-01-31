import { Navbar } from "./components/navbar.jsx";
import { Products } from "./components/products.jsx";
import { DescriptionProduct } from "./components/Pags.Secundarias/descriptionProduct.jsx";
import { styles } from "./styles/styleSheet";
import { View, Text } from "react-native";
import { Switch, Routes, Route } from "react-router-native";
import { Carrito } from "./components/Carrito.jsx";
export const Main = () => {
  return (
    <View style={styles.container}>
      <View>
        <Navbar />
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/carrito" element={<Carrito />} />
          <Route path="/producto/:id" element={<DescriptionProduct />} />
        </Routes>
      </View>
    </View>
  );
};
