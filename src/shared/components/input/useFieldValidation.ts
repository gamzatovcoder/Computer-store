import { useRef, useState } from "react";

export const useFieldValidation = () => {
   const inputRef = useRef<HTMLInputElement | null>(null);

   const checkValidity = () => inputRef.current.checkValidity();

   const [isFieldEmpty, setIsFieldEmpty] = useState<boolean>(false);
   const [isFieldInvalid, setIsFieldInvalid] = useState<boolean>(false);

   const setFieldEmpty = () => {
      setIsFieldEmpty(true);
      setIsFieldInvalid(false);
   };
   const setFieldInvalid = () => {
      setIsFieldInvalid(true);
      setIsFieldEmpty(false);
   };
   const resetFieldState = () => {
      setIsFieldEmpty(false);
      setIsFieldInvalid(false);
   };
   const validityChecks = () => {
      const input = inputRef.current;

      if (!checkValidity()) {
         if (input.value) {
            setFieldInvalid();
         } else {
            setFieldEmpty();
         }
      } else {
         resetFieldState();
      }
   };
   const form: HTMLFormElement = inputRef.current?.form;
   if (form) {
      form.addEventListener("submit", validityChecks);
   }
   const [toggleOnChange, setToggleOnChange] = useState(false);
   const onBlur = () => {
      validityChecks();
      setToggleOnChange(true);
   };
   const onChange = () => {
      if (toggleOnChange) {
         const input = inputRef.current;
         if (!checkValidity() && input.value) {
            setFieldInvalid();
         } else if (checkValidity()) {
            resetFieldState();
         }
      }
   };
   return {
      inputRef,
      isFieldEmpty,
      isFieldInvalid,
      onBlur,
      onChange,
   };
};
