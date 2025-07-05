import { useEffect, useState } from "react";

type ProductType = {
   id: string;
   image: string;
   name: string;
   brand: string;
   processor: string;
   ram: string;
   storageType: string;
   storageSize: string;
   display: string;
   batteryLife: string;
   releaseDate: string;
   price: number;
};

type FiltersType = {
   price: number[];
   brand: string[];
   processor: string[];
   ram: string[];
   storageSize: string[];
};
const useFilterList = (products: ProductType[]) => {
   const [filtersList, setFiltersList] = useState<FiltersType>();

   useEffect(() => {
      const filterAccamulator = {
         price: [],
         brand: [],
         processor: [],
         ram: [],
         storageSize: [],
      };

      const filtersList = products?.reduce<FiltersType>(
         (filterAccamulator, product) => {
            for (const filetrItem in filterAccamulator) {
               if (
                  !filterAccamulator[filetrItem].includes(product[filetrItem])
               ) {
                  filterAccamulator[filetrItem].push(product[filetrItem]);
               }
            }
            return filterAccamulator;
         },
         filterAccamulator,
      );

      setFiltersList(filtersList);
   }, [products]);
   return { filtersList };
};

export default useFilterList;
