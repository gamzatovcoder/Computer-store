import styles from "./inputErrorMessage.module.scss";
type Props = {
   value: string;
};
const InputErrorMessage = ({ value }: Props) => {
   return <span className={styles["error-message"]}>{value}</span>;
};

export default InputErrorMessage;
