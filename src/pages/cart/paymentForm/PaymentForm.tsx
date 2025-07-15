import styles from "./paymentForm.module.scss";
import ButtonPrimary from "@/shared/components/buttonPrimary/ButtonPrimary";
import Input from "@/shared/components/input/Input";
import { useAppSelector } from "@/shared/store/hooks";
import { useCreateOrderMutation } from "@/shared/store/services/apiOrders";
import { useState } from "react";

const PaymentForm = () => {
   const [createOrder, { isLoading, isSuccess, isError }] =
      useCreateOrderMutation();

   const [nameInput, setNameInput] = useState<string>();
   const [addressInput, setAddressInput] = useState<string>();
   const [phoneInput, setPhoneInput] = useState<number>();

   const cartProducts = useAppSelector((state) => state.cartProducts);

   const handleAddOrder = (e: React.ChangeEvent<HTMLFormElement>) => {
      e.preventDefault();

      createOrder({
         name: nameInput,
         address: addressInput,
         phone: phoneInput,
         productIds: cartProducts,
      });
   };

   return (
      <form className={styles["form"]} onSubmit={handleAddOrder}>
         <div className={styles["form__input-box"]}>
            <label className={styles["form__label"]} htmlFor="name">
               Name
            </label>
            <Input
               name={"userName"}
               required={true}
               fieldEmptyError={"fill in the name field"}
               placeholder={"Name"}
               setInputState={setNameInput}
            />
         </div>
         <div className={styles["form__input-box"]}>
            <label className={styles["form__label"]} htmlFor="address">
               Address
            </label>
            <Input
               name="address"
               placeholder={"Address"}
               required={true}
               fieldEmptyError={"fill in the address field"}
               setInputState={setAddressInput}
            />
         </div>
         <div className={styles["form__input-box"]}>
            <label className={styles["form__label"]} htmlFor="phone">
               Phone
            </label>
            <Input
               name={"userPhone"}
               placeholder={"Phone"}
               required={true}
               fieldEmptyError={"fill in the phone number field"}
               pattern={"[0-9]{9}"}
               patternError={"check the phone number"}
               setInputState={setPhoneInput}
            />
         </div>
         <div className={styles["form__submit-box"]}>
            <ButtonPrimary value="Confirm the order" />
         </div>
         {isLoading || isSuccess || isError ? (
            <div className={styles["form__submit-result"]}>
               {isLoading
                  ? "Loading..."
                  : isSuccess
                    ? "Purchase completed"
                    : "Error"}
            </div>
         ) : null}
      </form>
   );
};

export default PaymentForm;
