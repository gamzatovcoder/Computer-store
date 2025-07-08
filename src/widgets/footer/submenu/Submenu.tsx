import styles from "./submenu.module.scss";

type Submenu = {
   name: string;
   link: string;
};

type Props = { title: string; submenuList: Submenu[] };

const Submenu = ({ submenuList }: Props) => {
   return (
      <div className={styles["submenu"]}>
         <h5 className={styles["submenu__title"]}>Information</h5>
         <ul className={styles["submenu-list"]}>
            {submenuList.map(({ name, link }) => (
               <li className={styles["submenu__item"]}>
                  <a className={styles["submenu__link"]} href={link}>
                     {name}
                  </a>
               </li>
            ))}
         </ul>
      </div>
   );
};

export default Submenu;
