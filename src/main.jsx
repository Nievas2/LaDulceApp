import { Navbar } from "./components/navbar.jsx";
import { Products } from "./components/products.jsx";
import { DescriptionProduct } from "./components/pags.Secundarias/descriptionProduct.jsx";
import { styles } from "./styles/styleSheet";
import { View, Text } from "react-native";
import { Switch, Routes, Route } from "react-router-native";
import { Carrito } from "./components/carrito.jsx";
import { Home } from "./components/home-page/home.jsx";
export const Main = () => {
  return (
    <View style={styles.container}>
      <View>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/carrito" element={<Carrito />} />
          <Route path="/productos" element={<Products />} />
          <Route path="/producto/:id" element={<DescriptionProduct />} />
        </Routes>
      </View>
    </View>
  );
};
