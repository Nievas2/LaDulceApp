import { Navbar } from "./components/navbar.jsx";
import { Products } from "./components/productos/products.jsx";
import { DescriptionProduct } from "./components/pags-secundarias/descriptionProduct.jsx";
import { styles } from "./styles/styleSheet";
import { View, Text } from "react-native";
import { Switch, Routes, Route } from "react-router-native";
import { Carrito } from "./components/compras/carrito.jsx";
import { Home } from "./components/home-page/home.jsx";
import { Contacto } from "./components/contacto.jsx";
import { Registro } from "./components/login-register/register.jsx";
import { Login } from "./components/login-register/login.jsx";
import { RecuperarContraseña } from "./components/login-register/password.jsx";
import { NewCode } from "./components/login-register/code.jsx";
import { TokenProvider } from "./utils/contexts.jsx";
import { VerificacionCode } from "./components/login-register/verifyCode.jsx";
export const Main = () => {
  return (
    <View style={styles.container}>
      <TokenProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/carrito" element={<Carrito />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registro" element={<Registro />} />
          <Route path="/recuperar-contraseña" element={<RecuperarContraseña />} />
          <Route path="/validar-codigo" element={<VerificacionCode />} />
          <Route path="/nuevo-codigo" element={<NewCode />} />
          <Route path="/productos" element={<Products />} />
          <Route path="/producto/:id" element={<DescriptionProduct />} />
        </Routes>
      </TokenProvider>
    </View>
  );
};
