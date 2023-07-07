"use client";

import React, { useContext, useEffect } from "react";
import Link from "next/link";
import CustomPagination from "../layouts/CustomPagination";
import ProductContext from "@/context/ProductContext";
import { toast } from "react-toastify";

const Products = ({ data }) => {
  const { deleteProduct, error, clearErrors } = useContext(ProductContext);

  useEffect(() => {
    if (error) {
      toast.error(error);
      clearErrors();
    }
  }, [error]);

  const deleteHandler = (id) => {
    deleteProduct(id);
  };
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-4 ml-2">
        {data?.productsCount} Product{data?.productsCount>1?"s":""}
      </h1>
      <table className="w-2/3 md:w-full text-sm md:text-lg text-left">
        <thead className="text-gray-700 uppercase">
          <tr>
            <th scope="col" className="px-1 py-2 md:px-3 md:py-3 lg:px-3 lg:py-3">
              Name
            </th>
            <th scope="col" className="px-1 py-2 md:px-3 md:py-3 lg:px-3 lg:py-3">
              Stock
            </th>
            <th scope="col" className="px-1 py-2 md:px-3 md:py-3 lg:px-3 lg:py-3">
              Price
            </th>
            <th scope="col" className="px-1 py-2 md:px-3 md:py-3 lg:px-3 lg:py-3">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {data?.products?.map((product) => (
            <tr className="bg-white">
              <td className="px-2 py-2 md:px-2 md:py-2 lg:px-3 lg:py-2">{product?.name}</td>
              <td className="px-1 py-2 md:px-2 md:py-2 lg:px-3 lg:py-2">{product?.stock}</td>
              <td className="px-1 py-2 md:px-2 md:py-2 lg:px-3 lg:py-2">${product?.price}</td>
              <td className="px-2 py-2 md:px-2 md:py-2 lg:px-3 lg:py-2">
                <div>
                  <Link
                    href={`/admin/products/${product?._id}/upload_images`}
                    className="px-1 py-1 md:px-2 md:py-2 inline-block text-green-600 bg-white shadow-sm border border-gray-200 rounded-md hover:bg-gray-100 cursor-pointer mr-2"
                  >
                    <i className="fa fa-image" aria-hidden="true"></i>
                  </Link>

                  <Link
                    href={`/admin/products/${product?._id}`}
                    className="px-1 py-1 md:px-2 md:py-2 inline-block text-yellow-600 bg-white shadow-sm border border-gray-200 rounded-md hover:bg-gray-100 cursor-pointer mr-2"
                  >
                    <i className="fa fa-pencil" aria-hidden="true"></i>
                  </Link>
                  <a
                    className="px-1 py-1 md:px-2 md:py-2 inline-block text-red-600 bg-white shadow-sm border border-gray-200 rounded-md hover:bg-gray-100 cursor-pointer"
                    onClick={() => deleteHandler(product?._id)}
                  >
                    <i className="fa fa-trash" aria-hidden="true"></i>
                  </a>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mb-6">
        <CustomPagination
          resPerPage={data?.resPerPage}
          productsCount={data?.filteredProductsCount}
        />
      </div>
    </div>
  );
};

export default Products;
