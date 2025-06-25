import styles from "./searchField.module.scss";
import searchIcon from "@/shared/assets/icons/search.png";
const SearchField = () => {
   return (
      <form className={styles["search-box"]}>
         <input className={styles["search-box__input"]} type="text" />
         <button className={styles["search-box__button"]}>
            <img
               className={styles["search-box__button-icon"]}
               src={searchIcon}
               alt="search"
            />
         </button>
      </form>
   );
};

export default SearchField;
