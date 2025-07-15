import Catalog from "@/pages/catalog/Catalog";
import Product from "@/pages/product/Product";
import Cart from "@/pages/cart/Cart";
import { Routes, Route } from "react-router-dom";
const Provider = () => {
   return (
      <>
         <Routes>
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/product" element={<Product />} />
            <Route path="/cart" element={<Cart />} />
         </Routes>
      </>
   );
};

export default Provider;
