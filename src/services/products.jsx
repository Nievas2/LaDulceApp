import { useEffect, useState } from "react";
import axios from "axios";
export const ProductService = async () => {
  async function getProducts() {
    const respuesta = await globalThis
      .fetch("https://back-ladulce.fly.dev/product")
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `Error de red - Código de estado: ${response.status}`
          );
        }
        return response.json();
      })
      .then((data) => {
        console.log("Respuesta exitosa:", data);
      })
      .catch((error) => {
        console.error("Error al realizar la solicitud:", error);
      });
    let json = await respuesta.json();
    const format = await json.map((product1) => {
      let cambio = product1.description.replace(/<br>/g, "\n");
      product1.description = cambio;
    });
    json = await format;

    return json;
  }
};
