import styles from "./catalog.module.scss";
import Pagination from "./pagination/Pagination";
import ProductList from "./productList/ProductList";
import ProductFilter from "./productFilter/ProductFilter";
import usePagination from "./hooks/usePagination";
import useFilterList from "./hooks/useFilterList";
import useFilteredProducts from "./hooks/useFilteredProducts";
import { useGetProductsQuery } from "@/shared/store/services/apiProducts";

const Catalog = () => {
   const { data: products, isLoading, error } = useGetProductsQuery();
   const { filtersList } = useFilterList(products);
   const { currentProducts, filteredProducts, setFilters } =
      useFilteredProducts(products);
   const { totalPages } = usePagination(filteredProducts?.length, 10);

   return (
      <section className={styles.catalog + " container"}>
         <div className={styles["filter-box"]}>
            <ProductFilter filterList={filtersList} setFilters={setFilters} />
         </div>
         <div className={styles["right-box"]}>
            <ProductList
               isLoading={isLoading}
               error={error}
               products={currentProducts}
            />
            <Pagination totalPages={totalPages} />
         </div>
      </section>
   );
};

export default Catalog;
