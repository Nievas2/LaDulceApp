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
import { useState } from "react";
import { crearUser } from "../../services/users";
import { NavbarTab } from "../navbar";

export const Registro = () => {
  const { width } = useWindowDimensions();
  const [errorForm, setErrorForm] = useState(null);
  const [errorBack, setErrorBack] = useState(null);
  const [register, setRegister] = useState(null);
  const initialValues = {
    firstName: "",
    lastName: "",
    phone: "",
    password: "",
    repeatpassword: "",
    email: "",
  };
  async function crearUsuario({ values }) {
    if (values.password == values.repeatpassword) {
      const response = await crearUser({ values });
      if (response.message == "Validation error") {
        setErrorBack(
          "hubo un fallo en su registro revise los datos ingresados o intentelo mas tarde"
        );
      } else {
        setErrorBack(null);
        setErrorForm(null);
        setRegister(
          "Se ha registrado correctamente! revise su email para activar su cuenta"
        );
      }
    } else if (values.password != values.repeatpassword) {
      setErrorForm("las contraseñas deben ser iguales");
    } else {
      setErrorForm(
        "Hubo un erorr al registrarse, revise los datos ingresados o intentelo mas tarde"
      );
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
          {register ? (
            <View style={styles.textCenter}>
              <Text style={(styles.textWhite, styles.bold, styles.title)}>
                {register}
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
                <NavbarTab to="/login">ir al inicio de sesion</NavbarTab>
              </View>
            </View>
          ) : (
            <>
              <View>
                <Text style={styles.subTitle}>registro</Text>
              </View>
              <Formik
                validationSchema={RegisterValidation}
                initialValues={initialValues}
                onSubmit={(values) => crearUsuario({ values })}
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

                      <Button onPress={handleSubmit} title="Registrarse" />
                    </View>
                  );
                }}
              </Formik>
            </>
          )}
          {errorBack ? <Text style={[styles.textWhite,styles.title]}>{errorBack}</Text> : <Text></Text>}
          <View>
            {errorForm ? (
              <Text style={[styles.title, { marginBottom: 200 }]}>
                {errorForm}
              </Text>
            ) : (
              <Text></Text>
            )}
          </View>

          <View style={{ marginBottom: 200 }}>
            <Link to={"/login"} underlayColor="transparent">
              <Text style={{ fontSize: 18, marginTop: -20 }}>
                Volver al login
              </Text>
            </Link>
            <Link to={"/validar-codigo"} underlayColor="transparent">
              <Text style={{ fontSize: 18 }}>Para validar su codigo</Text>
            </Link>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
