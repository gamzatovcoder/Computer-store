import { InputHTMLAttributes } from "react";
import styles from "./input.module.scss";
import InputErrorMessage from "./inputErrorMessage/InputErrorMessage";
import { useFieldValidation } from "./useFieldValidation";
type Props = {
   name: string;
   id?: string;
   placeholder?: string;
   otherAttributes?: InputHTMLAttributes<HTMLInputElement>;
} & (
   | { required?: false; fieldEmptyError?: string }
   | { required: true; fieldEmptyError: string }
) &
   (
      | { pattern?: string; patternError?: string }
      | { pattern: string; patternError: string }
   );

const Input = ({
   name,
   id,
   placeholder,
   required,
   fieldEmptyError,
   pattern,
   patternError,
   otherAttributes,
}: Props) => {
   const { inputRef, isFieldEmpty, isFieldInvalid, onBlur, onChange } =
      useFieldValidation();

   return (
      <div>
         <input
            ref={inputRef}
            className={styles.input}
            id={id}
            name={name}
            required={required}
            pattern={pattern}
            onChange={onChange}
            onBlur={onBlur}
            placeholder={placeholder}
            {...otherAttributes}
         />
         <div>
            {isFieldInvalid && <InputErrorMessage value={patternError} />}
            {isFieldEmpty && <InputErrorMessage value={fieldEmptyError} />}
         </div>
      </div>
   );
};

export default Input;
