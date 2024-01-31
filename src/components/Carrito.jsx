import { Text, View } from "react-native"
import { Link } from "react-router-native"
import { styles } from "../styles/styleSheet"

export const Carrito = ()=>{
    return (
        <View style= {{backgroundColor: "#bbb",
        padding: 15,
        borderRadius: 15,
        marginBottom: 25,}}>
            <View style= {{flex: 1, marginTop: 150}}>
            <Link to={{ pathname: "/" }} style={{ margin: 15 }} underlayColor="transparent">
                <View
                  style={{
                    backgroundColor: "#c1694c",
                    padding: 19,
                    borderRadius: 15,
                    marginBottom: 45,
                  }}
                >
                  <Text style={{ textAlign: "center" }}>Volver</Text>
                </View>
              </Link>
            <Text style={styles.title}>Tas pidiendo una banda vos 😭 lo empece ayer 🤕</Text>
            </View>
        </View>
    )
}