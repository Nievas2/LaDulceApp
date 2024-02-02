import { StyleSheet, Text, View } from "react-native";
import { styles } from "../styles/styleSheet";
import { Link, useLocation } from "react-router-native";
import Cart from "../../assets/svgs/cart.svg";
export const NavbarTab = ({ children, to }) => {
  const { pathname } = useLocation();
  const active = pathname == to;
  const textStyles = [
    styles.bold,
    active && [styles.navbarItem, styles.textWhite]];
  return (
    <Link to={to} underlayColor="transparent">
      <View style={textStyles}>
        <Text >{children}</Text>
      </View>
    </Link>
  );
};
export const Navbar = () => {
  return (
    <View style={styles.navbar}>
      <NavbarTab to="/">Inicio</NavbarTab>
      <NavbarTab to="/productos">Productos</NavbarTab>
      <NavbarTab to="/contacto">Contacto</NavbarTab>
      <NavbarTab to="/login">Login</NavbarTab>
      <NavbarTab to="/registro">Registro </NavbarTab>
      <NavbarTab to="/carrito"><Cart height={30} width={30}></Cart></NavbarTab>

    </View>
  );
};
