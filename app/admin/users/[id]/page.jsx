import axios from "axios";
import React from "react";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import mongoose from "mongoose";
import UpdateOrder from "@/components/admin/UpdateOrder";
import UpdateUser from "@/components/admin/UpdateUser";
import { getCookieName } from "@/helpers/helpers";

export const metadata = {
  title: "Shopster",
};

const getUser = async (id) => {
  const nextCookies = cookies();
  const cookieName = getCookieName();
  const nextAuthSessionToken = nextCookies.get(cookieName);

  const { data } = await axios.get(
    `${process.env.API_URL}/api/admin/users/${id}`,
    {
      headers: {
        Cookie: `${nextAuthSessionToken?.name}=${nextAuthSessionToken?.value}`,
      },
    }
  );

  return data;
};

const AdminUserDetailsPage = async ({ params }) => {
  const isValidId = mongoose.isValidObjectId(params?.id);

  if (!isValidId) {
    return redirect("/");
  }
  const data = await getUser(params?.id);

  return <UpdateUser user={data?.user} />;
};

export default AdminUserDetailsPage;
