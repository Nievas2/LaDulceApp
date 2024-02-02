import { Formik } from "formik";
import { Button, ScrollView, Text, View, useWindowDimensions } from "react-native";
import { NuevoCodigoValidation } from "../validations/validations";
import { TextInputFormik } from "../../utils/inputs";

export const NewCode = () => {
  const initialValues = {
    email: "",
  };
  const {width} = useWindowDimensions()
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
      <Text>Crear un nuevo codigo</Text>
        <Formik
          validationSchema={NuevoCodigoValidation}
          initialValues={initialValues}
          onSubmit={(values) => console.log(values)}
        >
          {({ handleSubmit }) => {
            return (
              <View style={{ padding: 15, margin: 15 }}>
                <Text>Email</Text>
                <TextInputFormik name="email" placeholder="Ingrese su email" />
                <Button onPress={handleSubmit} title="Enviar" />
              </View>
            );
          }}
        </Formik>
      </ScrollView>
    </View>
  );
};
