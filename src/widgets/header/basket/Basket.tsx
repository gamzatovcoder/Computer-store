import { Link } from "react-router-dom";
import styles from "./basket.module.scss";
import basketIcon from "@/shared/assets/icons/basket.png";

const Basket = () => {
   return (
      <div className={styles["basket-box"]}>
         <div>
            <Link to={"/basket"}>
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
