import {
  View,
  Image,
  Text,
  Linking,
  TouchableOpacity,
  ScrollView,
  useWindowDimensions,
  Button,
} from "react-native";
import { styles } from "../styles/styleSheet";
import Instragram from "../../assets/svgs/instagram.svg";
import WhatsApp from "../../assets/svgs/whatsapp.svg";
import Ubication from "../../assets/svgs/ubication.svg";
import { Formik } from "formik";
import { TextInputFormik, TextInputFormikContact } from "../utils/inputs";
import { ContactValidation } from "./validations/validations";
import { useContext, useState } from "react";
import { UserToken } from "../utils/contexts";
import { contact } from "../services/users";
import { decodeJWT } from "../utils/decodeJWT";

export const Contacto = () => {
  const { width } = useWindowDimensions();
  const { token, setToken } = useContext(UserToken);
  const [finished, setFinished] = useState(false);
  const abrirInstagram = () => {
    const url = "https://www.instagram.com/ladulcetradicionpilar";
    Linking.openURL(url);
  };
  const abrirWhatsApp = () => {
    const url = "https://wa.me/c/5491162569879";
    Linking.openURL(url);
  };
  const abrirUbicacion = () => {
    const url = "https://maps.app.goo.gl/QtHhp3iW9NbVMtwb6";
    Linking.openURL(url);
  };
  let message =
    "¡Hola! <br>¿Estas buscando hacer un evento en especial?<br>¿O tenes alguna otra consulta?<br><br>Por ejemplo con el tipo de comida que buscabas, fecha y cantidad de invitados.<br><br>Dejanos tu duda a la brevedad te estaremos respondiendo!<br><br>¡Saludos, Flor & Lucas!";
  const cambio = message.replace(/<br>/g, "\n");
  message = cambio;
  const emailPayload = () => {
    const tokenDecoded = decodeJWT({ token });
    return tokenDecoded.email;
  };
  async function sendEmail({ values }) {
    const email = emailPayload();
    const response = await contact({ values: values.contacto, email });
    if (response) {
      setFinished(true);
    }
  }
  const initialValues = { contacto: "" };
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
        <View style={[]}>
          <View style={[{ flex: 1 }]}>
            <Image
              source={require("../../assets/logo.webp")}
              style={[
                {
                  justifyContent: "center",
                  width: 350,
                  height: 150,
                },
              ]}
            />
          </View>

          <Text style={[styles.textWhite, styles.textCenter, { fontSize: 25 }]}>
            PASTELERIA Y ALGO MÁS
          </Text>
        </View>
        <View style={{ flex: 1 }}>
          <View style={[{ flex: 1 }, styles.viewCenter]}>
            <Instragram height={80} width={80}></Instragram>
            <Text style={[styles.textWhite, { fontSize: 20 }]}>INSTAGRAM</Text>
            <TouchableOpacity onPress={abrirInstagram}>
              <Text style={[styles.textWhite, { fontSize: 20 }]}>
                @ladulcetradicionpilar
              </Text>
            </TouchableOpacity>
          </View>
          <View style={[{ flex: 1 }, styles.viewCenter]}>
            <WhatsApp height={80} width={80}></WhatsApp>
            <Text style={[styles.textWhite, { fontSize: 20 }]}>WHATSAPP</Text>
            <TouchableOpacity onPress={abrirWhatsApp}>
              <Text style={[styles.textWhite, { fontSize: 20 }]}>
                11-6256-9879
              </Text>
            </TouchableOpacity>
          </View>
          <View style={[{ flex: 1 }, styles.viewCenter]}>
            <Ubication height={80} width={80}></Ubication>
            <Text style={[styles.textWhite, { fontSize: 20 }]}>UBICACIÓN</Text>
            <TouchableOpacity onPress={abrirUbicacion}>
              <Text style={[styles.textWhite, { fontSize: 20 }]}>
                PILAR,BUENOS AIRES,ARGENTINA
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        {!finished ? (
          <View style={{ marginTop: 15, marginBottom: 400 }}>
            {token ? (
              <View>
                <Text style={[{ fontSize: 22 }, styles.textWhite]}>
                  {message}
                </Text>
                <Formik
                  validationSchema={ContactValidation}
                  initialValues={initialValues}
                  onSubmit={(values) => sendEmail({ values })}
                >
                  {({ handleSubmit }) => {
                    return (
                      <View style={{ padding: 15, margin: 15 }}>
                        <TextInputFormikContact
                          name="contacto"
                          placeholder="Contactanos"
                        />
                        <Button onPress={handleSubmit} title="Enviar" />
                      </View>
                    );
                  }}
                </Formik>
              </View>
            ) : (
              <Text style={styles.title}>
                Es necesario estar logueado para enviar mensajes
              </Text>
            )}
          </View>
        ) : (
          <Text style={[styles.title, styles.textWhite]}>
            Mensaje enviado correctamente pronto recibira respuestas
          </Text>
        )}
      </ScrollView>
    </View>
  );
};
