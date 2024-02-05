import {
  Button,
  ScrollView,
  Text,
  View,
  useWindowDimensions,
} from "react-native";
import { Link } from "react-router-native";
import { styles } from "../../styles/styleSheet";
import { Formik } from "formik";
import { RegisterValidation } from "../validations/validations";
import { TextInputFormik } from "../../utils/inputs";

export const Registro = () => {
  const { width } = useWindowDimensions();
  const initialValues = {
    firstName: "",
    lastName: "",
    phone: "",
    password: "",
    repeatpassword: "",
    email: "",
  };
  return (
    <View>
      <ScrollView
        style={{
          backgroundColor: "#c1694c",
          borderRadius: 25,
          width: width,
          padding: 15,
          paddingBottom: 250,
        }}
      >
        <View>
          <Text style={styles.subTitle}>
            Hola! registrate en nuestra pagina para recibir novedades y que la
            proxima compra sea mas rapido.
          </Text>
        </View>
        <View>
          <Text style={styles.subTitle}>registro</Text>
        </View>

        <View>
          <Formik
            validationSchema={RegisterValidation}
            initialValues={initialValues}
            onSubmit={(values) => console.log(values)}
          >
            {({ handleSubmit }) => {
              return (
                <View style={{ padding: 15, margin: 15 }}>
                  <Text>Nombre/s</Text>
                  <TextInputFormik name="firstName" placeholder="Nombre" />
                  <Text>Apellido/s</Text>
                  <TextInputFormik name="lastName" placeholder="Apellido" />
                  <Text>Numero de telefono</Text>
                  <TextInputFormik
                    name="phone"
                    placeholder="Numero de telefono"
                  />
                  <Text>Email</Text>
                  <TextInputFormik name="email" placeholder="E-mail" />
                  <Text>Contraseña</Text>
                  <TextInputFormik
                    name="password"
                    placeholder="Contraseña"
                    secureTextEntry
                  />
                  <Text>Repetir Contraseña</Text>
                  <TextInputFormik
                    name="repeatpassword"
                    secureTextEntry
                    placeholder="Repetir contraseña"
                  />

                  <Button onPress={handleSubmit} title="Iniciar sesion" />
                </View>
              );
            }}
          </Formik>
          <View style={{marginBottom: 200 }}>
            <Link to={"/login"} underlayColor="transparent">
              <Text style={{ fontSize: 18, marginTop: -20 }}>
                Volver al login
              </Text>
            </Link>
            <Link to={"/validar-codigo"} underlayColor="transparent">
                <Text style={{ fontSize: 18 }}>
                  Para validar su codigo
                </Text>
              </Link>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
