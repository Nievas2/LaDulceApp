import {
  Button,
  ScrollView,
  Text,
  View,
  useWindowDimensions,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Link, Route, redirect } from "react-router-native";
import { styles } from "../../styles/styleSheet";
import { TextInputFormik } from "../../utils/inputs";
import { loginValidation } from "../validations/validations";
import { Formik } from "formik";
import { login } from "../../services/users";
import { useContext } from "react";
import { UserToken } from "../../utils/contexts";
import { NavbarTab } from "../navbar";

export const Login = () => {
  const { token, setToken } = useContext(UserToken);
  const { width } = useWindowDimensions();
  initialValues = {
    email: "",
    password: "",
  };
  async function loginUser({ values }) {
    const response = await login({ values });
    if (response != null && response != undefined) {
      AsyncStorage.setItem("token", response.token);
      setToken(response.token);
      return redirect("/");
    }
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
        {token ? (
          <View style={styles.textCenter}>
            <Text style={(styles.textWhite, styles.bold, styles.title)}>
              Se ha logueado con exito puedes volver al inicio
            </Text>
            <View
              style={[
                {
                  alignSelf: "center",
                  backgroundColor: "#00f",
                  padding: 10,
                  width: 100,
                },
                styles.textCenter,
                styles.textWhite,
              ]}
            >
              <NavbarTab to="/">Inicio</NavbarTab>
            </View>
          </View>
        ) : (
          <View>
            <View>
              <Text style={styles.subTitle}>
                Gracias por volver! Inicia sesion para realizar tu proxima
                compra
              </Text>
            </View>
            <View>
              <Text style={styles.subTitle}>Iniciar sesion</Text>
            </View>

            <View style={{ marginVertical: 15 }}>
              <Formik
                validationSchema={loginValidation}
                initialValues={initialValues}
                onSubmit={(values) => loginUser({ values })}
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
              <Link to={"/validar-codigo"} underlayColor="transparent">
                <Text style={{ fontSize: 18 }}>
                  Para validar su codigo
                </Text>
              </Link>
            </View>
          </View>
        )}
      </ScrollView>
    </View>
  );
};
