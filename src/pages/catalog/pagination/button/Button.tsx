import styles from "./button.module.scss";
import { useAppDispatch, useAppSelector } from "@/shared/store/hooks";
import { setCurrentPage } from "../../storeSlices/currentPageSlice";

const Button = ({ currentPage }: { currentPage: number }) => {
   const page = useAppSelector((state) => state.currentPage.value);
   const dispatch = useAppDispatch();
   const getActiveButtonClass = () => {
      return `${page === currentPage ? styles["button-active"] : ""}`;
   };
   return (
      <div
         onClick={() => dispatch(setCurrentPage(currentPage))}
         className={`${styles.button} ${getActiveButtonClass()}`}
      >
         {currentPage}
      </div>
   );
};

export default Button;
