import styles from "./contactUsForm.module.scss";

import Form from "@/shared/components/form/Form";
import ButtonPrimary from "@/shared/components/buttonPrimary/ButtonPrimary";
import Input from "@/shared/components/input/Input";
const form = () => {
   return (
      <Form>
         <div className={styles.form}>
            <div className={styles["form__title"]}>Call me back</div>
            <div className={styles["form__info"]}>
               The operator calls back during business hours within 2 hours.
            </div>
            <div className={styles["form__input-box"]}>
               <Input name={"userName"} placeholder={"name"} />
            </div>
            <div className={styles["form__input-box"]}>
               <Input
                  name={"userPhone"}
                  placeholder={"name"}
                  required={true}
                  fieldEmptyError={"fill in the phone number field"}
                  pattern={"[0-9]{9}"}
                  patternError={"check the phone number"}
               />
            </div>

            <ul className={styles["radio-list"]}>
               <li className={styles["radio-list__item"]}>
                  <input
                     className={styles["radio-list__item-radio"]}
                     type="radio"
                     name="reason"
                     value="order"
                     id="order"
                     defaultChecked
                     required
                  />
                  <label
                     className={styles["radio-list__item-text"]}
                     htmlFor="order"
                  >
                     I want to place an order
                  </label>
               </li>
               <li className={styles["radio-list__item"]}>
                  <input
                     className={styles["radio-list__item-radio"]}
                     type="radio"
                     name="reason"
                     value="Warranty-service"
                     id="Warranty-service"
                     required
                  />
                  <label
                     className={styles["radio-list__item-text"]}
                     htmlFor="Warranty-service"
                  >
                     Warranty service
                  </label>
               </li>
               <li className={styles["radio-list__item"]}>
                  <input
                     className={styles["radio-list__item-radio"]}
                     type="radio"
                     name="reason"
                     value="Consultation"
                     id="Consultation"
                     required
                  />
                  <label
                     className={styles["radio-list__item-text"]}
                     htmlFor="Consultation"
                  >
                     Consultation
                  </label>
               </li>
            </ul>
            <div className={styles["submit-box"]}>
               <ButtonPrimary value="send a request" />
            </div>
         </div>
      </Form>
   );
};

export default form;
