import styles from "./checkboxList.module.scss";

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
   listTitle: string;
   filtersList: FiltersListType;
   newFilters: FiltersType;
   filter: string;
   setNewFilters: React.Dispatch<React.SetStateAction<FiltersType>>;
};

const CheckboxList = ({
   listTitle,
   filtersList,
   setNewFilters,
   filter,
   newFilters,
}: Props) => {
   const toggleFilterValueItem = (valueItem: string) => {
      const filters = { ...newFilters };

      if (!filters[filter].includes(valueItem)) {
         filters[filter].push(valueItem);
      } else {
         filters[filter] = filters[filter].filter(
            (item: string) => item !== valueItem,
         );
      }
      setNewFilters(filters);
   };
   return (
      <div className={styles["checkbox"]}>
         <div className={styles["checkbox__title"]}>
            {listTitle.charAt(0).toUpperCase() + listTitle.slice(1)}
         </div>
         <div className={styles["checkbox-list"]}>
            {filtersList?.[filter]?.map((item: string, index: number) => (
               <div className={styles["checkbox-item"]} key={index}>
                  <input
                     className={styles["checkbox-input"]}
                     id={`${item}${index}`}
                     type="checkbox"
                     name=""
                     onClick={() => toggleFilterValueItem(item)}
                  />

                  <label
                     className={styles["checkbox-label"]}
                     htmlFor={`${item}${index}`}
                  >
                     {item}
                  </label>
               </div>
            ))}
         </div>
      </div>
   );
};

export default CheckboxList;
