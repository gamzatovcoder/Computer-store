const usePagination = (totalProducts: number, itemsPerPage) => {
   const totalPages: number = Math.ceil(totalProducts / itemsPerPage);

   return { totalPages };
};

export default usePagination;
