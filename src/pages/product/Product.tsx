import styles from "./product.module.scss";
import { SerializedError } from "@reduxjs/toolkit";
import { useAppSelector } from "@/shared/store/hooks";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { useGetProductsQuery } from "@/shared/store/services/apiProducts";
import { useEffect } from "react";

type Product = {
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
};

type GetProductsType = {
   data: Product[];
   isLoading: boolean;
   error: FetchBaseQueryError | SerializedError;
};

const Product = () => {
   const {
      data: products,
      isLoading,
      error,
   } = useGetProductsQuery<GetProductsType>();

   const productId = useAppSelector((state) => state.selectedProduct.value);
   const product = products?.find((item) => item.id === productId);
   if (!product) {
      return <div className={styles["message-error"]}>Error</div>;
   }
   const {
      image,
      name,
      brand,
      processor,
      ram,
      storageType,
      storageSize,
      display,
      batteryLife,
      releaseDate,
      price,
   } = product;

   if (isLoading)
      return <div className={styles["message-loading"]}>Loading...</div>;

   if (error) return <div className={styles["message-error"]}>Error</div>;

   return (
      <div className={styles.product}>
         <div className={styles["product-content"] + " container"}>
            <div className={styles.specifications}>
               <ul className={styles["specifications-list"]}>
                  <li className={styles["specifications-list__item"]}>
                     <span>Name:</span> name{name}
                  </li>
                  <li className={styles["specifications-list__item"]}>
                     <span>Brand:</span> brand{brand}
                  </li>
                  <li className={styles["specifications-list__item"]}>
                     <span>Processor:</span> {processor}
                  </li>
                  <li className={styles["specifications-list__item"]}>
                     <span>Ram:</span> {ram}
                  </li>
                  <li className={styles["specifications-list__item"]}>
                     <span>Storage type:</span> {storageType}
                  </li>
                  <li className={styles["specifications-list__item"]}>
                     <span>Storage size:</span> {storageSize}
                  </li>
                  <li className={styles["specifications-list__item"]}>
                     <span>Display:</span> {display}
                  </li>
                  <li className={styles["specifications-list__item"]}>
                     <span>Battery life:</span> {batteryLife}
                  </li>
                  <li className={styles["specifications-list__item"]}>
                     <span>Release date:</span> {releaseDate}
                  </li>
                  <li className={styles["specifications-list__item"]}>
                     <span>Price:</span> {price}
                  </li>
               </ul>
            </div>
            <div className={styles["product-content__image-box"]}>
               <img src={`src/shared/assets/laptops/${image}`} />
            </div>
         </div>
      </div>
   );
};

export default Product;
