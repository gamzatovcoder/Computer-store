import styles from "./product.module.scss";
import { useAppDispatch } from "@/shared/store/hooks";
import {
   incrementCartProductById,
   decrementCartProductById,
   deleteCartProductById,
} from "@/shared/store/slices/cartProductsSlice";
import dustbinIcon from "@/shared/assets/icons/dustbin.svg";

type ProductType = {
   id: number;
   image: string;
   name: string;
   processor: string;
   ram: string;
   storageSize: string;
   display: string;
   price: number;
   count: number;
};

type Props = ProductType;

const Product = ({
   id,
   image,
   name,
   processor,
   ram,
   storageSize,
   display,
   price,
   count,
}: Props) => {
   const dispatch = useAppDispatch();
   const countStateIncrement = () => {
      dispatch(incrementCartProductById(id));
   };
   const countStateDecrement = () => {
      dispatch(decrementCartProductById(id));
   };
   const countStateDelete = () => {
      dispatch(deleteCartProductById(id));
   };

   return (
      <div className={styles.product}>
         <img
            className={styles["product__image"]}
            src={`src/shared/assets/laptops/${image}`}
         />
         <div className={styles["description"]}>
            <div className={styles["description__text"]}>
               {`${name} [display: ${display}, ${processor}, RAM ${ram}, ${storageSize}]`}
            </div>
            <div className={styles["description__price"]}>{"$" + price}</div>
            <div className={styles["count-product"]}>
               <button
                  className={styles["count-product__arrow"]}
                  onClick={countStateDecrement}
               >
                  {"-"}
               </button>
               <div className={styles["count-product__number"]}>{count}</div>
               <button
                  className={styles["count-product__arrow"]}
                  onClick={countStateIncrement}
               >
                  {"+"}
               </button>
            </div>
            <button
               className={styles["product__dustbin"]}
               onClick={countStateDelete}
            >
               <img
                  className={styles["product__dustbin-image"]}
                  src={dustbinIcon}
               />
            </button>
         </div>
      </div>
   );
};

export default Product;
