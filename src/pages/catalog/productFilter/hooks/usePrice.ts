import { useEffect, useState } from "react";

type FiltersListType = {
   price: number[];
   brand: string[];
   processor: string[];
   ram: string[];
   storageSize: string[];
};

const usePrice = (filterList: FiltersListType) => {
   const [totalPriceRange, setTotalPriceRange] = useState<{
      min: number;
      max: number;
   }>({
      min: 0,
      max: 1000000,
   });

   const [currentPriceRange, setCurrentPriceRange] = useState<{
      min: number;
      max: number;
   }>({
      min: 0,
      max: 0,
   });

   useEffect(() => {
      if (filterList) {
         const min = Math.min(...filterList.price);
         const max = Math.max(...filterList.price);
         setTotalPriceRange({
            min: min,
            max: max,
         });
         setCurrentPriceRange({
            min: min,
            max: max,
         });
      }
   }, [filterList]);

   const handlePriceInputChange = (
      e: React.ChangeEvent<HTMLInputElement>,
      type: "min" | "max",
   ) => {
      const value = Number(e.target.value);

      if (type === "min") {
         setCurrentPriceRange((prevPrice) => ({ ...prevPrice, min: value }));
      }

      if (type === "max") {
         setCurrentPriceRange((prevPrice) => ({ ...prevPrice, max: value }));
      }
   };

   return { totalPriceRange, currentPriceRange, handlePriceInputChange };
};

export default usePrice;
