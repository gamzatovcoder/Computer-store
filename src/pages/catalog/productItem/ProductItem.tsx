import { useState } from "react";
import styles from "./productItem.module.scss";
import addToCartIcon from "@/shared/assets/icons/addToCart.svg";
import { useAppDispatch } from "@/shared/store/hooks";
import { setSelectedProduct } from "@/shared/store/slices/selectedProductSlice";

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

   const [addedToCart, setAddedToCart] = useState<boolean>(false);

   const getActiveRowsClass = () => {
      return `${styleRows === "rows" ? styles["product-item_rows"] : ""}`;
   };

   return (
      <div className={`${styles["product-item"]} ${getActiveRowsClass()}`}>
         <Link to={"/product"}>
            <img
               className={styles["product-item__image"]}
               src={`src/shared/assets/laptops/${image}`}
               alt="laptop"
               onClick={() => {
                  dispatch(setSelectedProduct(id));
               }}
            />
         </Link>
         <div className={styles["description"]}>
            <div className={styles["description__text"]}>
               {`${name} [display: ${display}, ${processor}, RAM ${ram}, ${storageSize}]`}
            </div>
            <div className={styles["description__price"]}>{"$" + price}</div>
            <button
               className={`${styles["add-button"]} ${addedToCart ? styles["add-button_active"] : ""}`}
               onClick={() => setAddedToCart(true)}
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
