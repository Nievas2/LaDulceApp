import { DescriptionProduct } from "./src/components/descriptionProduct";
import { Navbar } from "./src/components/navbar";
import { Products } from "./src/components/products";
import { Main } from "./src/main";
import { NativeRouter, Route, Routes } from "react-router-native";
export default function App() {
  return (
    <>
   
    <NativeRouter>
      
      <Routes>
      <Route path="/" element={<Products/>} />
      <Route path="/producto/:id" element={<DescriptionProduct/>} />
      
      </Routes>
    </NativeRouter>
    </>
  );
}
