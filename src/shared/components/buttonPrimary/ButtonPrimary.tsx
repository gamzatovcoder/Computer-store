import styles from "./buttonPrimary.module.scss";
type Props = {
   value: string;
};
const ButtonPrimary = ({ value }: Props) => {
   return <button className={styles.button}>{value}</button>;
};

export default ButtonPrimary;
