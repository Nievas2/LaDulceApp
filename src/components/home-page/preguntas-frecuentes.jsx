import {
  Dimensions,
  View,
  Text,
  Image,
  useWindowDimensions,
  FlatList,
  TouchableOpacity,
  Button,
  ScrollView,
  Animated,
} from "react-native";
import { styles } from "../../styles/styleSheet";
import { useState } from "react";
import { Pregunta } from "./preguntas";
export const PreguntasFrecuentes = () => {
  const preguntas = [
    {
      title: "COMO COMPRAR",
      description:
        '1. Navega por nuestra web y mira todas las opciones que tenemos <br> 2. Elegi los productos que quieras y sumalos al carrito <br>3. En cada producto podes elegir categorias y cantidades <br>4. Una vez hecho el carrito, "continuar compra", confirmar el tickety se mandara el detalle a nuestro email <br>5. Nos estaremos comunicando para confirmar fecha y disponibilidad (tambien podes escribirnos primero para ver si tenemos lugar) <br>6. Una vez cerrado los detalles, se realiza el deposito de la seña<br>7. En el dia y horario pactado entregamos tu pedido.',
      active: true,
      id: 555,
    },
    {
      title: "¿CON CUANTA ANTICIPACION DEBO HACER MI PEDIDO?",
      description:
        "2 o 3 dias minimo,una semana seria lo ideal, pero siempre depende unpoco de la disponibilidad que tengamos esa fecha por eso recomendamosprimero consultar.",
      active: false,
      id: 556,
    },
    {
      title: "¿LOS PRECIOS ESTAN ACTUALIZADOS?",
      description:
        " Si, toda la web, asi como el catalogo de whatsapp cuentan con los precios actuales.",
      active: false,
      id: 557,
    },
    {
      title: "¿HAY QUE SEÑAR LOS PEDIDOS?",
      description:
        "Si, se pide una seña para confirmar el pedido. <br>Una vez señado, el precio final se congela. <br>Los valores actuales se mantienen por 15 dias. <br>No tomamos pedidos con mas de un mes de anticipacion.",
      active: false,
      id: 558,
    },
    {
      title: "¿RELIZAN ENVIOS?",
      description:
        "Si, realizamos entregas a domicilio con costo adicional, si nospasan su ubicacion aproximada, les cotizamos el envio.<br>Tambien se pueden retirar los pedidos por nuestro domicilio. <br>(villa astolfi, pilar)",
      active: false,
      id: 559,
    },
    {
      title: "¿REALIZAN PRODUCTOS SIN TACC, VEGANOS O VEGETARIANOS?",
      description:
        "Productos veganos y vegetarianos de lunch si es posible, se puedenadaptar a las necesidades o gustos del cliente.<br>Pasteleria vegana no realizamos por el momento. <br>Sin Tacc NO REALIZAMOS por motivos de contaminacion cruzada, nocontamos con el lugar adecuado para ese tipo de productos.",
      active: false,
      id: 560,
    },
  ];
  const hasQuestions = preguntas?.length > 0;
  preguntas.map((pregunta) => {
    let cambio = pregunta.description.replace(/<br>/g, "\n");
    pregunta.description = cambio;
  });

  return (
    <>
      {preguntas.map((item) => (
        <Pregunta item={item} key={item.id}></Pregunta>
      ))}
    </>
  );
};
