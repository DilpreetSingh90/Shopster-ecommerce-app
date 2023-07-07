import React from "react";
import axios from "axios";
import queryString from "query-string";
import CustomCarousel from "@/components/layouts/CustomCarousel";
import ListPoints from '@/components/layouts/ListPoints';
import Categories from "@/components/layouts/Categories";
import ProductCarousel from '@/components/products/ProductCarousel';
import Benefits from "@/components/layouts/Benefits";

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

  const {data} = await axios.get(
    `${process.env.API_URL}/api/products?${searchQuery}`
  ).catch(function (error) {
    // handle error
    console.log(error);
  });
  return data;
};

const getAllProducts = async () => {
  const {data} = await axios.get(
    `${process.env.API_URL}/api/products/all`
  ).catch(function (error) {
    // handle error
    console.log(error);
  });
  return data;
}

const HomePage = async () => {
  // const productsData = await getProducts(searchParams);
  const productsData = await getAllProducts();
  const mobiles ={
    category: 'Smartphone'
  }
  const laptops = {
    category: 'Laptop'
  }
  const mobileData = await getProducts(mobiles);
  const cameraData = await getProducts(laptops);

  return (
      <div>
        <CustomCarousel />
        <div className="block relative w-full px-[15px] mx-auto mt-10 max-w-[1400px]">
          <ListPoints />
        </div>
        <div className="block relative w-full px-[15px] mx-auto mt-16 max-w-[1500px]">
          <ProductCarousel title="Best Sellers" data={productsData}/>
        </div>
        <Benefits />
        <div className="block relative w-full px-[15px] mx-auto mt-10 max-w-[1500px]">
          <Categories />
        </div>
        <div className="block relative w-full px-[15px] mx-auto mt-16 max-w-[1500px]">
          <ProductCarousel title="Top Smartphones" data={mobileData}/>
        </div>
        <div className="block relative w-full px-[15px] mx-auto mt-16 mb-20 max-w-[1500px]">
          <ProductCarousel title="Top Laptops" data={cameraData}/>
        </div>
      </div>
  );
};

export default HomePage;
