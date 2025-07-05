import { Link } from "react-router-dom";
import styles from "./mainMenu.module.scss";
const MainMenu = () => {
   type MenuList = {
      link: string;
      value: string;
   };

   const menuList: MenuList[] = [
      {
         link: "/catalog",
         value: "Catalog",
      },
      {
         link: "/guarantee",
         value: "Guarantee",
      },
      {
         link: "/aboutUS",
         value: "About us",
      },
   ];
   return (
      <nav>
         <ul className={styles.list}>
            {menuList.map((item) => (
               <Link key={item.value} to={item.link}>
                  <li className={styles.item} key={item.link}>
                     {item.value}
                  </li>
               </Link>
            ))}
         </ul>
      </nav>
   );
};

export default MainMenu;
