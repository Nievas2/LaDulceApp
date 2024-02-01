import { ScrollView, Text, View, useWindowDimensions } from "react-native";
import { Link } from "react-router-native";
import { styles } from "../../styles/styleSheet";

export const Login = () => {
  const { width } = useWindowDimensions();
  return (
    <View>
      <ScrollView
        style={{
          backgroundColor: "#c1694c",
          borderRadius: 25,
          width: width,
          padding: 15,
        }}
      >
        <View>
          <Text style={styles.subTitle}>
            Gracias por volver! Inicia sesion para realizar tu proxima compra
          </Text>
        </View>
        <View>
          <Text style={styles.subTitle}>Iniciar sesion</Text>
        </View>





        
        <View>
          <Link to={"/recuperar-contraseña"} underlayColor="transparent">
            <Text style={{fontSize: 18}}>Recuperar contraseña</Text>
          </Link>
          <Link to={"/registro"} underlayColor="transparent">
            <Text style={{fontSize: 18}}>Registro</Text>
          </Link>
          <Link to={"/nuevo-codigo"} underlayColor="transparent">
            <Text style={{fontSize: 18}}>Si tiene problemas con su código</Text>
          </Link>
        </View>
      </ScrollView>
    </View>
  );
};
