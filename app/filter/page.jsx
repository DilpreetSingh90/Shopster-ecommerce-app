import React from 'react'
import queryString from "query-string";
import axios from "axios";
import ListProducts from "@/components/products/ListProducts";

export const dynamic = 'auto'

export const metadata = {
    title: "Shopster",
  };

  const getProducts = async (searchParams) => {
    const urlParams = {
      keyword: searchParams.keyword,
      page: searchParams.page,
      category: searchParams.category,
      "price[gte]": searchParams.min,
      "price[lte]": searchParams.max,
      "ratings[gte]": searchParams.ratings,
    };
  
    const searchQuery = queryString.stringify(urlParams);
    console.log(searchQuery);
  
    const {data} = await axios.get(
      `${process.env.API_URL}/api/products?${searchQuery}`
    ).catch(function (error) {
      // handle error
      console.log(error);
    });
    return data;
  };

const CategoryPage = async ({ searchParams }) => {
    const productsData = await getProducts(searchParams);

  return (
    <ListProducts data={productsData?productsData:null} /> 
  )
}

export default CategoryPage;