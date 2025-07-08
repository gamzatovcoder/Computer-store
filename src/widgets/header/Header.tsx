import styles from "./header.module.scss";
import ContactUs from "./contactUs/ContactUs";
import MainMenu from "./mainMenuList/MainMenu";
import SearchField from "./searchField/SearchField";
import Basket from "./basket/Basket";
import logoIcon from "@/shared/assets/icons/logo.png";
import MesssengerLinks from "../messengerLinks/MesssengerLinks";

const Header = () => {
   return (
      <header className={styles.header}>
         <div className={styles["header-top"]}>
            <div className={styles["header-top__content"] + " container"}>
               <div className={styles["header-top__working-time"]}>
                  Mon-Thu: <span>9:30 AM - 5:30 PM</span>
               </div>
               <ContactUs />
               <div className={styles["our-contacts"]}>
                  <div className={styles["our-contacts__phone"]}>
                     Call Us: (00) 0000 0000
                  </div>
                  <MesssengerLinks
                     color="#FFFFFF"
                     width="14.5px"
                     height="14.5px"
                     columnGap="12px"
                  />
               </div>
            </div>
         </div>
         <div className={styles["header-bottom"]}>
            <div className={styles["header-bottom__content"] + " container"}>
               <img
                  className={styles["header-bottom__logo"]}
                  src={logoIcon}
                  alt="logo"
               />
               <div className={styles["header-bottom__main-menu-box"]}>
                  <MainMenu />
               </div>
               <div className={styles["header-bottom__search-field-box"]}>
                  <SearchField />
               </div>
               <Basket />
            </div>
         </div>
      </header>
   );
};

export default Header;
