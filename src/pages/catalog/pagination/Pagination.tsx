import styles from "./pagination.module.scss";
import Button from "./button/Button";

const Pagination = ({ totalPages }: { totalPages: number }) => {
   const buttons = Array.from({ length: totalPages }, (_, index) => (
      <Button key={index} currentPage={index + 1} />
   ));
   return <div className={styles.pagination}>{buttons}</div>;
};

export default Pagination;
