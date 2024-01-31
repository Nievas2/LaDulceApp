import { StyleSheet, Text, View } from "react-native";
import { styles } from "../styles/styleSheet";
import { Link } from "react-router-native";
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
    </View>
  );
};
