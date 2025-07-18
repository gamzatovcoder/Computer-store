import { Link } from "react-router-dom";
import styles from "./basket.module.scss";
import basketIcon from "@/shared/assets/icons/basket.svg";

const Basket = () => {
   return (
      <div className={styles["basket-box"]}>
         <div>
            <Link to={"/cart"}>
               <img
                  className={styles["basket-box__icon"]}
                  src={basketIcon}
                  alt="basket"
               />
            </Link>
         </div>
      </div>
   );
};

export default Basket;
