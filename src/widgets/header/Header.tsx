import styles from "./header.module.scss";
import ContactUs from "./contactUs/ContactUs";
import MainMenu from "./mainMenuList/MainMenu";
import SearchField from "./searchField/SearchField";
import Basket from "./basket/Basket";
import facebookIcon from "@/shared/assets/icons/facebook.png";
import logoIcon from "@/shared/assets/icons/logo.png";

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
                  <a
                     className={styles["our-contacts__messenger-link "]}
                     href="https://www.facebook.com/"
                  >
                     <img
                        className={styles["our-contacts__messenger-icon"]}
                        src={facebookIcon}
                        alt="facebook"
                     />
                  </a>
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
