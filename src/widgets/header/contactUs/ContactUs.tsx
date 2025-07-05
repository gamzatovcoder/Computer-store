import styles from "./contactUs.module.scss";
import ContactUsForm from "../contactUsForm/ContactUsForm";
import { useState } from "react";

const ContactUs = () => {
   const [formActive, setFormActive] = useState(false);

   const toggleVisibleForm = () => {
      setFormActive((state) => !state);
   };

   return (
      <div className={styles["contact-us"]}>
         <div className={styles["contact-us__text"]}>
            Visit our showroom in 1234 Street Adress City Address, 1234{" "}
         </div>
         <div className={styles["form-toggle-box"]}>
            <div
               className={styles["form-toggle-box__toggle"]}
               onClick={() => toggleVisibleForm()}
            >
               Contact Us
            </div>
            {formActive && (
               <div className={styles["form-toggle-box__form-box"]}>
                  <ContactUsForm />
               </div>
            )}
         </div>
      </div>
   );
};

export default ContactUs;
