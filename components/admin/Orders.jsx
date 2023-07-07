"use client";

import Link from "next/link";
import React, { useContext, useEffect } from "react";
import CustomPagination from "../layouts/CustomPagination";
import OrderContext from "@/context/OrderContext";

const Orders = ({ orders }) => {
  const { deleteOrder, error, clearErrors } = useContext(OrderContext);

  useEffect(() => {
    if (error) {
      toast.error(error);
      clearErrors();
    }
  }, [error]);

  const deleteHandler = (id) => {
    deleteOrder(id);
  };
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-4">
        {orders?.ordersCount} Order{orders?.ordersCount>1?"s":""}
      </h1>
      <table className="w-2/3 md:w-full text-sm md:text-lg text-left">
        <thead className="text-gray-700 uppercase">
          <tr>
            <th scope="col" className="px-1 py-2 md:px-3 md:py-3 lg:px-3 lg:py-3">
              ID
            </th>
            <th scope="col" className="px-4 py-2 md:px-3 md:py-3 lg:px-5 lg:py-3">
              Amount Paid
            </th>
            <th scope="col" className="px-1 py-2 md:px-3 md:py-3 lg:px-3 lg:py-3">
              Status
            </th>
            <th scope="col" className="px-1 py-2 md:px-3 md:py-3 lg:px-3 lg:py-3">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {orders?.orders?.map((order) => (
            <tr className="bg-white">
              <td className="px-2 py-2 md:px-2 md:py-2 lg:px-3 lg:py-2">{order?._id}</td>
              <td className="px-2 py-2 md:px-2 md:py-2 lg:px-3 lg:py-2">${order?.paymentInfo?.amountPaid}</td>
              <td className="px-2 py-2 md:px-2 md:py-2 lg:px-3 lg:py-2">{order?.orderStatus}</td>
              <td className="px-2 py-2 md:px-2 md:py-2 lg:px-3 lg:py-2">
                <div className="flex flex-nowrap">
                  <Link
                    href={`/admin/orders/${order?._id}`}
                    className="px-1 py-1 md:px-2 md:py-2 inline-block text-yellow-600 bg-white shadow-sm border border-gray-200 rounded-md hover:bg-gray-100 cursor-pointer mr-2"
                  >
                    <i className="fa fa-pencil" aria-hidden="true"></i>
                  </Link>
                  <a
                    className="px-1 py-1 md:px-2 md:py-2 inline-block text-red-600 bg-white shadow-sm border border-gray-200 rounded-md hover:bg-gray-100 cursor-pointer"
                    onClick={() => deleteHandler(order?._id)}
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
          resPerPage={orders?.resPerPage}
          productsCount={orders?.ordersCount}
        />
      </div>
    </div>
  );
};

export default Orders;
