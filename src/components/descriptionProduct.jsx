import {
  Dimensions,
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
import products from "../mook/products.json";
import Carousel from "react-native-reanimated-carousel";

export const DescriptionProduct = () => {
  let { id } = useParams();
  let product = {};
  products.find((element) => {
    if (element.id == id) product = element;
  });
  const width = Dimensions.get('window').width;
  const mode = 'parallax-horizontal';
  return (
    <View style={{marginTop: 50, alignSelf: "center"}}>
      <Carousel
        loop
        width={width - 50}
        height={width - 50 }
        autoPlay={true}
        mode={mode}
        modeConfig={{
          stackInterval: mode === 'parallax-horizontal' ? 8 : 18
        }}
        customConfig={() =>({type: 'positive'})}
        data={product.ImagesProductAsocciations}
        scrollAnimationDuration={1000}
        renderItem={({ index }) => (
          <View
            style={{
              flex: 1,
              justifyContent: "center",
            }}
          >
           <Image style={{width: width - 15, height : width }} source={{uri : product.ImagesProductAsocciations[index].ImageProduct.image}}></Image>
          </View>
        )}
      />
      <Link to={{ pathname: "/" }} style={{ marginTop: 200 }}>
        <View
          style={{ width: 150, height: 150, backgroundColor: "blue" }}
        ></View>
      </Link>
      <Text>{product.name}</Text>
    </View>
  );
};
