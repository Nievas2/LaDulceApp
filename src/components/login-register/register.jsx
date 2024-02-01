import { ScrollView, Text, View, useWindowDimensions } from "react-native";
import { Link } from "react-router-native";
import { styles } from "../../styles/styleSheet";

export const Registro =() =>{
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
              Hola! registrate en nuestra pagina para recibir novedades y que la proxima compra sea mas rapido.
              </Text>
            </View>
            <View>
              <Text style={styles.subTitle}>registro</Text>
            </View>
    
    
    
    
    
            
            <View>
              <Link to={"/login"} underlayColor="transparent">
                <Text style={{fontSize: 18}}>Login</Text>
              </Link>
            </View>
          </ScrollView>
        </View>
      );
}