import { Navbar } from "./components/navbar.jsx";
import { Products } from "./components/products.jsx";
import { DescriptionProduct } from "./components/descriptionProduct.jsx";
import { styles } from "./styles/styleSheet";
import { View, Text } from "react-native";
import { Switch, Route } from "react-router-native";
export const Main = () => {
  return (
    <View style={styles.container}>
      <View>
        <Navbar></Navbar>
        <Text>lorema</Text>
      </View>
    </View>
  );
};
