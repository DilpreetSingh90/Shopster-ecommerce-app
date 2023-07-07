"use client";

import React from "react";
import CustomPagination from "../layouts/CustomPagination";
import Filters from "../layouts/Filters";
import ProductItem from "./ProductItem";

const ListProducts = ({ data }) => {
    
  return (
    <section className="mt-10 md:mt-10 lg:mt-0 py-12">
      <div className="container max-w-screen-xl mx-auto px-4">
        <div className="flex flex-row md:flex-row -mx-4">
          <Filters />
          <main className="w-2/3 md:w-2/3 lg:w-3/4 px-3">
            {data?.products?.map((product) => (
              <ProductItem key={product?._id} product={product} />
            ))}
            {data?.filteredProductsCount>0 &&
            <CustomPagination
              resPerPage={data?.resPerPage}
              productsCount={data?.filteredProductsCount}
            />}
          </main>
        </div>
      </div>
    </section>
  );
};

export default ListProducts;
