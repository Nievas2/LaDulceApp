import { Formik } from "formik";
import {
  Button,
  ScrollView,
  Text,
  View,
  useWindowDimensions,
} from "react-native";
import { recuperarContraseñaValidation } from "../validations/validations";
import { TextInputFormik } from "../../utils/inputs";

export const RecuperarContraseña = () => {
  const initialValues= {
    email: "",
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
        <View>
          <Text>Recuperar</Text>
          <Formik
            validationSchema={recuperarContraseñaValidation}
            initialValues={initialValues}
            onSubmit={(values) => console.log(values)}
          >
            {({ handleSubmit }) => {
              return (
                <View style={{ padding: 15, margin: 15 }}>
                  <Text>Email</Text>
                  <TextInputFormik
                    name="email"
                    placeholder="Escribe tu email"
                  />
                  <Button onPress={handleSubmit} title="Enviar" />
                </View>
              );
            }}
          </Formik>
        </View>
      </ScrollView>
    </View>
  );
};
