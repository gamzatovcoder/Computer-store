import { useState } from "react";

const usePagination = (totalProducts: number, itemsPerPage: number = 10) => {
   const [currentPage, setCurrentPage] = useState<number>(1);
   const totalPages: number = Math.ceil(totalProducts / itemsPerPage);

   const setPage = (page: number) => {
      if (page >= 1 && page <= totalPages) {
         setCurrentPage(page);
      }
   };

   return { currentPage, totalPages, setPage };
};

export default usePagination;
