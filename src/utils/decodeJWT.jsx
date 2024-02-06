import "core-js/stable/atob";
import { jwtDecode } from "jwt-decode";
import { useContext } from "react";
import { UserToken } from "./contexts";

export function decodeJWT({ token }) {
  const decodedToken = jwtDecode(token);
  return decodedToken;
}
