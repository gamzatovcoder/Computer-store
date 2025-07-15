import styles from "./cart.module.scss";
import { SerializedError } from "@reduxjs/toolkit";
import { useAppSelector } from "@/shared/store/hooks";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { useGetProductsQuery } from "@/shared/store/services/apiProducts";

import Product from "./product/Product";
import { useEffect, useState } from "react";
import PaymentForm from "./paymentForm/PaymentForm";

interface ProductType {
   id: number;
   image: string;
   name: string;
   brand: string;
   processor: string;
   ram: string;
   storageType: string;
   storageSize: string;
   display: string;
   batteryLife: string;
   releaseDate: string;
   price: number;
}

type GetProductsType = {
   data: ProductType[];
   isLoading: boolean;
   error: FetchBaseQueryError | SerializedError;
};

interface ProductAndCountType extends ProductType {
   count: number;
}

const Cart = () => {
   const {
      data: products,
      isLoading,
      error,
   } = useGetProductsQuery<GetProductsType>();

   const cartProducts = useAppSelector((state) => state.cartProducts);
   const [currentProducts, setCurrentProducts] = useState<
      ProductAndCountType[] | null
   >(null);
   useEffect(() => {
      setCurrentProducts(
         cartProducts.map((cartProduct) => {
            const currentProduct = products.find(
               (product) => product.id === cartProduct.id,
            );
            return { ...currentProduct, count: cartProduct.count };
         }),
      );
   }, [cartProducts]);
   if (isLoading)
      return <div className={styles["message-loading"]}>Loading...</div>;

   if (error) return <div className={styles["message-error"]}>Error</div>;

   return (
      <div className={styles.cart + " container"}>
         {currentProducts?.length > 0 ? (
            <ul className={styles["cart__product-list"]}>
               {currentProducts.map((product) => (
                  <li>
                     <Product
                        key={product.id}
                        id={product.id}
                        name={product.name}
                        image={product.image}
                        price={product.price}
                        display={product.display}
                        processor={product.processor}
                        ram={product.ram}
                        storageSize={product.storageSize}
                        count={product.count}
                     />
                  </li>
               ))}
            </ul>
         ) : (
            <div className={styles["cart__empty"]}>Cart is empty</div>
         )}

         <PaymentForm />
      </div>
   );
};

export default Cart;
