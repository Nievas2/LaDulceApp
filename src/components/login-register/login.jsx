import {
  Button,
  ScrollView,
  Text,
  View,
  useWindowDimensions,
} from "react-native";
import { Link } from "react-router-native";
import { styles } from "../../styles/styleSheet";
import { TextInputFormik } from "../../utils/inputs";
import { loginValidation } from "../validations/validations";
import { Formik } from "formik";

export const Login = () => {
  const { width } = useWindowDimensions();
  initialValues={
    email:"",
    password:""
  }
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

        <View style={{ marginVertical: 15 }}>
          <Formik
            validationSchema={loginValidation}
            initialValues={initialValues}
            onSubmit={(values) => console.log(values)}
          >
            {({ handleSubmit }) => {
              return (
                <View style={{ padding: 15, margin: 15 }}>
                  <TextInputFormik name="email" placeholder="E-mail" />
                  <TextInputFormik
                    name="password"
                    placeholder="Contraseña"
                    secureTextEntry
                  />

                  <Button onPress={handleSubmit} title="Iniciar sesion" />
                </View>
              );
            }}
          </Formik>
        </View>

        <View>
          <Link to={"/recuperar-contraseña"} underlayColor="transparent">
            <Text style={{ fontSize: 18 }}>Recuperar contraseña</Text>
          </Link>
          <Link to={"/registro"} underlayColor="transparent">
            <Text style={{ fontSize: 18 }}>Registro</Text>
          </Link>
          <Link to={"/nuevo-codigo"} underlayColor="transparent">
            <Text style={{ fontSize: 18 }}>
              Si tiene problemas con su código
            </Text>
          </Link>
        </View>
      </ScrollView>
    </View>
  );
};
