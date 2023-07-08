import React from "react";
import axios from "axios";
import { cookies } from "next/headers";
import queryString from "query-string";
import Products from "@/components/admin/Products";
import { getCookieName } from "@/helpers/helpers";

export const dynamic = 'auto'

export const metadata = {
  title: "Shopster",
};


const getProducts = async (searchParams) => {
  const nextCookies = cookies();
  const cookieName = getCookieName();
  const nextAuthSessionToken = nextCookies.get("next-auth.session-token");

  const urlParams = {
    page: searchParams.page,
  };

  const searchQuery = queryString.stringify(urlParams);

  const {data} = await axios.get(
    `${process.env.API_URL}/api/products?${searchQuery}`,{
      headers: {
        Cookie: `${nextAuthSessionToken?.name}=${nextAuthSessionToken?.value}`,
      },
    }
  );
  return data;
};

const HomePage = async ({ searchParams }) => {
  const data = await getProducts(searchParams);

  return <Products data={data} />;
};

export default HomePage;
