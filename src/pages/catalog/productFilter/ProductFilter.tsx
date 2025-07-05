import styles from "./productFilter.module.scss";
import usePrice from "./hooks/usePrice";
import { useEffect, useState } from "react";
import CheckboxList from "./checkboxList/CheckboxList";
import ButtonPrimary from "@/shared/components/buttonPrimary/ButtonPrimary";

type FiltersType = {
   minPrice: number;
   maxPrice: number;
   brand: string[];
   processor: string[];
   ram: string[];
   storageSize: string[];
};
type FiltersListType = {
   price: number[];
   brand: string[];
   processor: string[];
   ram: string[];
   storageSize: string[];
};

type Props = {
   filterList: FiltersListType;
   setFilters: React.Dispatch<React.SetStateAction<FiltersType>>;
};

const ProductFilter = ({ filterList, setFilters }: Props) => {
   const [newFilters, setNewFilters] = useState<FiltersType>({
      minPrice: 0,
      maxPrice: 0,
      brand: [],
      processor: [],
      ram: [],
      storageSize: [],
   });

   const { totalPriceRange, currentPriceRange, handlePriceInputChange } =
      usePrice(filterList);

   useEffect(() => {
      setNewFilters(() => ({
         ...newFilters,
         minPrice: currentPriceRange.min,
         maxPrice: currentPriceRange.max,
      }));
   }, [currentPriceRange]);

   const hundleFormSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
      e.preventDefault();
   };

   return (
      <form onSubmit={hundleFormSubmit} className={styles.filter}>
         <h3 className={styles["filter__title"]}>Filters</h3>
         <div className={styles["price-filter"]}>
            <div className={styles["price-filter__item"]}>
               <input
                  name="minPrice"
                  className={styles["price-filter__field"]}
                  onChange={(e) => {
                     handlePriceInputChange(e, "min");
                  }}
                  type="number"
                  value={currentPriceRange.min}
                  min={totalPriceRange.min}
                  max={totalPriceRange.max}
               />
               <input
                  className={styles["price-filter__range"]}
                  onChange={(e) => handlePriceInputChange(e, "min")}
                  type="range"
                  value={currentPriceRange.min}
                  min={totalPriceRange.min}
                  max={currentPriceRange.max}
               />
            </div>
            <div className={styles["price-filter__item"]}>
               <input
                  name="maxPrice"
                  className={styles["price-filter__field"]}
                  onChange={(e) => handlePriceInputChange(e, "max")}
                  type="number"
                  value={currentPriceRange.max}
                  min={totalPriceRange.min}
                  max={totalPriceRange.max}
               />
               <input
                  className={styles["price-filter__range"]}
                  onChange={(e) => handlePriceInputChange(e, "max")}
                  type="range"
                  value={currentPriceRange.max}
                  min={currentPriceRange.min}
                  max={totalPriceRange.max}
               />
            </div>
         </div>
         <div
            className={`${styles["checkbox-container"]} ${styles["checkbox-container_border-top"]}`}
         >
            <CheckboxList
               listTitle="brand"
               filtersList={filterList}
               setNewFilters={setNewFilters}
               newFilters={newFilters}
               filter={"brand"}
            />
         </div>
         <div className={styles["checkbox-container"]}>
            <CheckboxList
               listTitle="processor family"
               filtersList={filterList}
               setNewFilters={setNewFilters}
               newFilters={newFilters}
               filter={"processor"}
            />
         </div>
         <div className={styles["checkbox-container"]}>
            <CheckboxList
               listTitle="ram size"
               filtersList={filterList}
               setNewFilters={setNewFilters}
               newFilters={newFilters}
               filter={"ram"}
            />
         </div>
         <div className={styles["checkbox-container"]}>
            <CheckboxList
               listTitle="storage size"
               filtersList={filterList}
               setNewFilters={setNewFilters}
               newFilters={newFilters}
               filter={"storageSize"}
            />
         </div>
         <div
            className={styles["filter__submit"]}
            onClick={() => {
               setFilters(newFilters);
            }}
         >
            <ButtonPrimary value="Apply Filters" />
         </div>
      </form>
   );
};

export default ProductFilter;
