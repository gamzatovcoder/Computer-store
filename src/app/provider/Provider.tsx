import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "@/pages/main/Main";

const router = createBrowserRouter([{ path: "/", element: <Main /> }]);

const Provider = () => {
   return (
      <>
         <RouterProvider router={router} />
      </>
   );
};

export default Provider;
