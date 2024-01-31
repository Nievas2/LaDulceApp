import { DescriptionProduct } from "./src/components/Pags.Secundarias/descriptionProduct";
import { Navbar } from "./src/components/navbar";
import { Products } from "./src/components/products";
import { Main } from "./src/main";
import { NativeRouter, Route, Routes } from "react-router-native";
export default function App() {
  return (
    <>
      <NativeRouter>
        <Main></Main>
      </NativeRouter>
    </>
  );
}
