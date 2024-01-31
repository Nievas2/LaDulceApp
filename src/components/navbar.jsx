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
    </View>
  );
};
