import Catalog from "@/pages/catalog/Catalog";
import { Routes, Route } from "react-router-dom";
const Provider = () => {
   return (
      <>
         <Routes>
            <Route path="/catalog" element={<Catalog />} />
         </Routes>
      </>
   );
};

export default Provider;
