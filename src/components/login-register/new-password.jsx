import { Formik } from "formik";
import {
  Button,
  ScrollView,
  Text,
  View,
  useWindowDimensions,
} from "react-native";
import { nuevaContraseñaValidation } from "../validations/validations";
import { TextInputFormik, TextInputFormikNumber } from "../../utils/inputs";
import { nuevaContraseña } from "../../services/users";
import { useState } from "react";
import { Link } from "react-router-native";
import { styles } from "../../styles/styleSheet";
export const Newpassword = () => {
  const [finished, setFinished] = useState(false);
  const [errorCreate, setErrorCreate] = useState(false);
  const initialValues = {
    email: "",
    code: 0,
    password: "",
  };
  async function contraseñaNueva({ values }) {
    const response = await nuevaContraseña({ values });
    if (response == false) {
      setErrorCreate("email o codigo incorrectos");
    }else{
      setFinished(true);
    }
  }

  const { width } = useWindowDimensions();
  return (
    <View style={{ padding: 15 }}>
      <ScrollView
        style={{
          backgroundColor: "#c1694c",
          borderRadius: 25,
          width: width,
          padding: 15,
        }}
      >
        {finished ? (
          <>
            <Text style={[styles.title,styles.textWhite]}> Se a cambiado su contraseña</Text>
            <Link to={"/login"} underlayColor="transparent">
              <Text style={[{ fontSize: 18 }, styles.subTitle, styles.textWhite]}>para ir al login aqui</Text>
            </Link>
          </>
        ) : (
          <View>
            <Text>Nueva contraseña</Text>
            <Formik
              validationSchema={nuevaContraseñaValidation}
              initialValues={initialValues}
              onSubmit={(values) => contraseñaNueva({ values })}
            >
              {({ handleSubmit }) => {
                return (
                  <View style={{ padding: 15, margin: 15 }}>
                    <Text>Email</Text>
                    <TextInputFormik
                      name="email"
                      placeholder="Escribe tu email"
                    />
                    <TextInputFormikNumber
                      name="code"
                      placeholder="Escribe el codigo de seguridad"
                    />
                    <TextInputFormik
                      name="password"
                      placeholder="Escribe tu contraseña"
                      secureTextEntry
                    />
                    <Button onPress={handleSubmit} title="Enviar" />
                  </View>
                );
              }}
            </Formik>
            {errorCreate ? <Text>{errorCreate}</Text> : <Text> </Text>}
          </View>
        )}
      </ScrollView>
    </View>
  );
};
