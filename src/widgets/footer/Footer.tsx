import ButtonPrimary from "@/shared/components/buttonPrimary/ButtonPrimary";
import styles from "./footer.module.scss";
import Submenu from "./submenu/Submenu";
import MesssengerLinks from "../messengerLinks/MesssengerLinks";

const Footer = () => {
   return (
      <div className={styles.footer}>
         <div className={styles["footer-content"] + " container"}>
            <div className={styles["subscribe"]}>
               <div className={styles["subscribe__description"]}>
                  <h4 className={styles["subscribe__title"]}>
                     Sign Up To Our Newsletter.
                  </h4>
                  <div className={styles["subscribe__sub-title"]}>
                     Be the first to hear about the latest offers.
                  </div>
               </div>
               <form className={styles["subscribe__input-container"]}>
                  <input
                     className={styles["subscribe__input"]}
                     type="text"
                     placeholder="Your Email"
                  />
                  <div className={styles["subscribe__submit-box"]}>
                     <ButtonPrimary value="Subscribe" />
                  </div>
               </form>
            </div>
            <div className={styles["submenu-lists"]}>
               <Submenu
                  title="Information"
                  submenuList={[
                     { name: "About Us", link: "#" },
                     { name: "About Zip", link: "#" },
                     { name: "Privacy Policy", link: "#" },
                     { name: "Search", link: "#" },
                     { name: "Terms", link: "#" },
                     { name: "Orders and Returns", link: "#" },
                     { name: "Contact Us", link: "#" },
                     { name: "Advanced Search", link: "#" },
                     { name: "Newsletter Subscription", link: "#" },
                  ]}
               />
               <Submenu
                  title="PC Parts"
                  submenuList={[
                     { name: "CPUS", link: "#" },
                     { name: "Add On Cards", link: "#" },
                     { name: "Hard Drives (Internal)", link: "#" },
                     { name: "Graphic Cards", link: "#" },
                     { name: "Keyboards / Mice", link: "#" },
                     {
                        name: "Cases / Power Supplies / Cooling Returns",
                        link: "#",
                     },
                     { name: "RAM (Memory)", link: "#" },
                     { name: "Software", link: "#" },
                     { name: "Speakers / Headsets", link: "#" },
                     { name: "Motherboards", link: "#" },
                  ]}
               />

               <Submenu
                  title="Desktop PCs"
                  submenuList={[
                     { name: "Custom PCs", link: "#" },
                     { name: "Servers", link: "#" },
                     { name: "MSI All-In-One PCs", link: "#" },
                     { name: "HP/Compaq PCs", link: "#" },
                     { name: "ASUS PCs", link: "#" },
                     { name: "Tecs PCs  ", link: "#" },
                  ]}
               />
               <Submenu
                  title="Laptops"
                  submenuList={[
                     { name: "Evryday Use Notebooks", link: "#" },
                     { name: "MSI Workstation Series", link: "#" },
                     { name: "MSI Prestige Series", link: "#" },
                     { name: "Tablets and Pads", link: "#" },
                     { name: "Netbooks", link: "#" },
                     { name: "Infinity Gaming Notebooks", link: "#" },
                  ]}
               />

               <div className={styles["submenu"]}>
                  <h5 className={styles["submenu__title"]}>Address</h5>
                  <ul className={styles["submenu-list"]}>
                     <li className={styles["submenu__item"]}>
                        Address:{" "}
                        <a className={styles["submenu__link"]} href="#">
                           1234 Street Adress City Address, 1234
                        </a>
                     </li>
                     <li className={styles["submenu__item"]}>
                        Phones: (00) 1234 5678
                     </li>
                     <li className={styles["submenu__item"]}>
                        We are open: Monday-Thursday: 9:00 AM - 5:30 PM
                     </li>
                     <li className={styles["submenu__item"]}>
                        Friday: 9:00 AM - 6:00 PM
                     </li>
                     <li className={styles["submenu__item"]}>
                        Saturday: 11:00 AM - 5:00 PM
                     </li>
                     <li className={styles["submenu__item"]}>
                        E-mail:{" "}
                        <a className={styles["submenu__link"]} href="#">
                           shop@email.com
                        </a>
                     </li>
                  </ul>
               </div>
            </div>
            <div className={styles["footer-bottom"]}>
               <div className={styles["footer-bottom__icon"]}>
                  <MesssengerLinks
                     color="#414142"
                     width="17px"
                     height="17px"
                     columnGap="15px"
                  />
               </div>
               <div></div>
            </div>
         </div>
      </div>
   );
};

export default Footer;
