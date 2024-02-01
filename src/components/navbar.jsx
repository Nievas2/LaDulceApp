import { StyleSheet, Text, View } from "react-native";
import { styles } from "../styles/styleSheet";
import { Link } from "react-router-native";
import Cart from "../../assets/svgs/cart.svg";
export const Navbar = () => {
  return (
    <View style={styles.navbar}>
      <Link to={"/"} underlayColor="transparent">
        <View>
          <Text>Inicios</Text>
        </View>
      </Link>
      <Link to={"/productos"} underlayColor="transparent">
        <View>
          <Text>Productos</Text>
        </View>
      </Link>
      <Link to={"/contacto"} underlayColor="transparent">
        <View>
          <Text>Contactanos</Text>
        </View>
      </Link>
      <Link to={"/login"} underlayColor="transparent">
        <View>
          <Text>login</Text>
        </View>
      </Link>
      <Link to={"/registro"} underlayColor="transparent">
        <View>
          <Text>registro</Text>
        </View>
      </Link>
      <Link to={"/carrito"} underlayColor="transparent">
        <View >
          <Cart height={40} width={40} ></Cart>
        </View>
      </Link>
    </View>
  );
};
