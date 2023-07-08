import axios from "axios";
import React from "react";
import mongoose from "mongoose";
import { cookies } from "next/headers";
import UpdateOrder from "@/components/admin/UpdateOrder";
import { redirect } from "next/navigation";
import { getCookieName } from "@/helpers/helpers";

export const metadata = {
  title: "Shopster",
};


const getOrder = async (id) => {
  const nextCookies = cookies();
  const cookieName = getCookieName();
  const nextAuthSessionToken = nextCookies.get(cookieName);

  const { data } = await axios.get(
    `${process.env.API_URL}/api/admin/orders/${id}`,
    {
      headers: {
        Cookie: `${nextAuthSessionToken?.name}=${nextAuthSessionToken?.value}`,
      },
    }
  );

  return data;
};

const AdminOrderDetailsPage = async ({ params }) => {
  const isValidId = mongoose.isValidObjectId(params?.id);

  if (!isValidId) {
    return redirect("/");
  }

  const data = await getOrder(params?.id);

  return <UpdateOrder order={data?.order} />;
};

export default AdminOrderDetailsPage;
