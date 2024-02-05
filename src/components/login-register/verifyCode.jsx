import {
  Button,
  Text,
  View,
  useWindowDimensions,
  ScrollView,
} from "react-native";
import { styles } from "../../styles/styleSheet";
import { Formik } from "formik";
import { validationsCode } from "../validations/validations";
import { TextInputFormik, TextInputFormikNumber } from "../../utils/inputs";
import { nuevoCodigo, validationCode } from "../../services/users";
import { useState } from "react";
import { Link } from "react-router-native";

export const VerificacionCode = () => {
  const [errorFrom, setErrorFrom] = useState(false);
  const [finished, setFinished] = useState(false);
  initialValues = {
    email: "",
    code: 0,
  };

  let errorVerifi = "el codigo o el correo son incorrectos";
  async function verificiarCode({ values }) {
    const response = await validationCode({ values });
    if (response.message == "Error: incorrect code") {
      setErrorFrom(true);
    } else {
      setFinished(true);
    }
  }
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
          <View>
            <Text style={styles.subTitle}>Activar Cuenta</Text>
          </View>
          {!finished ? (
            <View style={{ marginVertical: 15 }}>
              <Formik
                validationSchema={validationsCode}
                initialValues={initialValues}
                onSubmit={(values) => verificiarCode({ values })}
              >
                {({ handleSubmit }) => {
                  return (
                    <View style={{ padding: 15, margin: 15 }}>
                      <TextInputFormik name="email" placeholder="E-mail" />
                      <TextInputFormikNumber name="code" placeholder="Codigo" />

                      <Button onPress={handleSubmit} title="Validar" />
                    </View>
                  );
                }}
              </Formik>
              {errorFrom ? <Text>{errorVerifi}</Text> : <Text></Text>}
            </View>
          ) : (
            <>
              <Text style={styles.subTitle}>
                el codigo funciono correctamente
              </Text>
              <Link to={"/"} underlayColor="transparent">
                <Text style={[{ fontSize: 18 }, styles.title]}>
                  Vuelva al inicio desde aqui
                </Text>
              </Link>
            </>
          )}
        </View>
      </ScrollView>
    </View>
  );
};
