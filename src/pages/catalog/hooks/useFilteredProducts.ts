import { useEffect, useState } from "react";
import { useAppSelector } from "@/shared/store/hooks";

type ProductType = {
   id: number;
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
   minPrice: number;
   maxPrice: number;
   brand: string[];
   processor: string[];
   ram: string[];
   storageSize: string[];
};

const useFilteredProducts = (products: ProductType[]) => {
   const currentPage = useAppSelector((state) => state.currentPage.value);

   const [currentProducts, setCurrentProducts] =
      useState<ProductType[]>(products);

   const [filteredProducts, setFilteredProducts] =
      useState<ProductType[]>(products);

   const [filters, setFilters] = useState<FiltersType | null>(null);

   useEffect(() => {
      if (products && filters !== null) {
         const checkproduct = (productProperty: string, filter: string[]) => {
            if (filter.length === 0 || filter.includes(productProperty)) {
               return true;
            }
         };
         const filteredproducts = products.filter((product) => {
            return (
               product.price >= filters.minPrice &&
               product.price <= filters.maxPrice &&
               checkproduct(product.brand, filters.brand) &&
               checkproduct(product.processor, filters.processor) &&
               checkproduct(product.ram, filters.ram) &&
               checkproduct(product.storageSize, filters.storageSize)
            );
         });

         setFilteredProducts(filteredproducts);
      } else {
         setFilteredProducts(products);
      }
   }, [products, filters]);

   useEffect(() => {
      setCurrentProducts(
         filteredProducts?.slice(currentPage * 10 - 10, currentPage * 10),
      );
   }, [currentPage, filteredProducts]);

   return { currentProducts, setFilters };
};

export default useFilteredProducts;
