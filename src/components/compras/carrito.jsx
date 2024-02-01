import { Text, View } from "react-native";
import { Link } from "react-router-native";
import Cart from "../../../assets/svgs/cart.svg";
import { styles } from "../../styles/styleSheet";
export const Carrito = () => {
  return (
    <View
      style={{
        backgroundColor: "#bbb",
        padding: 15,
        borderRadius: 15,
        marginBottom: 25,
      }}
    >
      <View style={{ flex: 1, flexDirection: "row" }}>
        <Cart height={80} width={80} />
        <Text style={{fontSize: 40}}>Tu carrito</Text>
      </View>
      <View style = {styles.lineStyle} />
    </View>
  );
};
