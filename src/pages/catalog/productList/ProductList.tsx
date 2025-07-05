import styles from "./productList.module.scss";
import ProductItem from "../productItem/ProductItem";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { SerializedError } from "@reduxjs/toolkit";
import gridIcon from "@/shared/assets/icons/gridIcon.svg";
import rowsIcon from "@/shared/assets/icons/rowsIcon.svg";
import { useState } from "react";

type Product = {
   id: string;
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

type Props = {
   isLoading: boolean;
   error: FetchBaseQueryError | SerializedError;
   products: Product[];
};
const ProductList = ({ error, products, isLoading }: Props) => {
   const [layoutProducts, setLayoutProducts] = useState<"grid" | "rows">(
      "grid",
   );

   const getActiveButtonClass = (layout) => {
      return `${layoutProducts === layout ? styles["layout-buttons__item_acive"] : ""}`;
   };

   const getActiveRowsListClass = () => {
      return `${layoutProducts === "rows" ? styles["products__list_rows"] : ""}`;
   };

   if (isLoading)
      return <div className={styles["message-loading"]}>Loading...</div>;

   if (error) return <div className={styles["message-error"]}>Error</div>;

   return (
      <div className={styles.products}>
         <div className={`${styles["layout-buttons"]}`}>
            <button
               className={`${styles["layout-buttons__item"]}  ${getActiveButtonClass("grid")}`}
               onClick={() => setLayoutProducts("grid")}
            >
               <img
                  className={styles["layout-buttons__item-icon"]}
                  src={gridIcon}
                  alt="grid"
               />
            </button>
            <button
               className={`${styles["layout-buttons__item"]}  ${getActiveButtonClass("rows")}`}
               onClick={() => setLayoutProducts("rows")}
            >
               <img
                  className={styles["grid-buttons__item-icon"]}
                  src={rowsIcon}
                  alt="rows"
               />
            </button>
         </div>
         <div
            className={`${styles["products__list"]} ${getActiveRowsListClass()}`}
         >
            {products?.map((item) => (
               <ProductItem
                  styleRows={layoutProducts}
                  key={item.id}
                  name={item.name}
                  image={item.image}
                  price={item.price}
                  display={item.display}
                  processor={item.processor}
                  ram={item.ram}
                  storageSize={item.storageSize}
               />
            ))}
         </div>
      </div>
   );
};

export default ProductList;
