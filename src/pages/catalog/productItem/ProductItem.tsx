import { useState } from "react";
import styles from "./productItem.module.scss";
import addToCartIcon from "@/shared/assets/icons/addToCart.svg";
import { useAppDispatch, useAppSelector } from "@/shared/store/hooks";
import { setSelectedProduct } from "@/shared/store/slices/selectedProductSlice";
import { addCartProductById } from "@/shared/store/slices/cartProductsSlice";

import { Link } from "react-router-dom";

type Props = {
   styleRows: "grid" | "rows";
   id: number;
   image: string;
   name: string;
   price: number;
   display: string;
   processor: string;
   ram: string;
   storageSize: string;
};

const ProductItem = ({
   styleRows,
   id,
   image,
   name,
   price,
   display,
   processor,
   ram,
   storageSize,
}: Props) => {
   const dispatch = useAppDispatch();
   const productAdded = useAppSelector((state) =>
      state.cartProducts.some((product) => product.id === id),
   );

   const getActiveRowsClass = () => {
      return `${styleRows === "rows" ? styles["product_rows"] : ""}`;
   };

   return (
      <div className={`${styles["product"]} ${getActiveRowsClass()}`}>
         <Link to={"/product"}>
            <img
               className={styles["product__image"]}
               src={`src/shared/assets/laptops/${image}`}
               alt="laptop"
               onClick={() => {
                  dispatch(setSelectedProduct(id));
               }}
            />
         </Link>
         <div className={styles["description"]}>
            <Link to={"/product"}>
               <div className={styles["description__text"]}>
                  {`${name} [display: ${display}, ${processor}, RAM ${ram}, ${storageSize}]`}
               </div>
            </Link>

            <div className={styles["description__price"]}>{"$" + price}</div>
            <button
               className={`${styles["add-button"]} ${productAdded ? styles["add-button_active"] : ""}`}
               onClick={() => dispatch(addCartProductById(id))}
            >
               <img
                  className={styles["add-button__icon"]}
                  src={addToCartIcon}
               />
               <div className={styles["add-button__text"]}>Add</div>
            </button>
         </div>
      </div>
   );
};

export default ProductItem;
