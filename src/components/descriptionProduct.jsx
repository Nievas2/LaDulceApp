import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  Button,
} from "react-native";
import { styles } from "../styles/styleSheet";
import { useParams } from "react-router-native";
import { Link } from "react-router-native";
import products from '../mook/products.json'
export const DescriptionProduct = () => {
  
  let {id} = useParams();
  let product = {}
  products.find((element)=>{
    if(element.id == id ) product = element
  });
  return (
    <View>
      <Link to={{ pathname: "/" }} style={{ marginTop: 200 }}>
        <View
          style={{ width: 150, height: 150, backgroundColor: "blue" }}  
        ></View>
      </Link>
      <Text>{product.name}</Text>
    </View>
  );
};
