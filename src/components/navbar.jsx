import { StyleSheet, Text, View,Button } from "react-native";
import { styles } from "../styles/styleSheet";
import { Link, useLocation } from "react-router-native";
import Cart from "../../assets/svgs/cart.svg";
import { useContext } from "react";
import { UserToken } from "../utils/contexts";
import AsyncStorage from "@react-native-async-storage/async-storage";
export const NavbarTab = ({ children, to }) => {

  const { pathname } = useLocation();
  const active = pathname == to;
  const textStyles = [
    styles.bold,
    active && [styles.navbarItem, styles.textWhite],
  ];

  return (
    <Link to={to} underlayColor="transparent">
      <View style={textStyles}>
        <Text style={[styles.textCenter, styles.textWhite]}>{children}</Text>
      </View>
    </Link>
  );
};
export const Navbar = () => {
  function cerrarSesion() {
    AsyncStorage.removeItem("token")
    setToken(undefined)
  }
  const {token, setToken} = useContext(UserToken);
  return (
    <View style={styles.navbar}>
      <NavbarTab to="/">Inicio</NavbarTab>
      <NavbarTab to="/productos">Productos</NavbarTab>
      <NavbarTab to="/contacto">Contacto</NavbarTab>
      {
        token ? (
          <Button title="Cerrar sesion" onPress={cerrarSesion}></Button>
        ): (
          <>
          <NavbarTab to="/login">Login</NavbarTab>
          <NavbarTab to="/registro">Registro </NavbarTab>
          </>
          
        )
      }
      
      <NavbarTab to="/carrito">
        <Cart height={30} width={30}></Cart>
      </NavbarTab>
    </View>
  );
};
