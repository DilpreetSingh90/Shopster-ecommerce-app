import React from "react";
import axios from "axios";
import UpdateProduct from "@/components/admin/UpdateProduct";
import mongoose from "mongoose";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { getCookieName } from "@/helpers/helpers";

export const dynamic = 'auto';

export const metadata = {
  title: "Shopster",
};


const getProduct = async (id) => {
  const nextCookies = cookies();
  const cookieName = getCookieName();
  const nextAuthSessionToken = nextCookies.get(cookieName);
  
  const { data } = await axios.get(`${process.env.API_URL}/api/products/${id}`,{
    headers: {
      Cookie: `${nextAuthSessionToken?.name}=${nextAuthSessionToken?.value}`,
    },
  });
  return data;
};

const HomePage = async ({ params }) => {
  const isValidId = mongoose.isValidObjectId(params?.id);

  if (!isValidId) {
    return redirect("/");
  }

  const data = await getProduct(params.id);

  return <UpdateProduct data={data.product} />;
};

export default HomePage;
