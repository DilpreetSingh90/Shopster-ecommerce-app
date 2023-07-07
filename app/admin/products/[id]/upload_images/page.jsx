import React from "react";
import UploadImages from "@/components/admin/UploadImages";
import mongoose from "mongoose";
import { redirect } from "next/navigation";

export const metadata = {
  title: "Shopster",
};

const HomePage = async ({ params }) => {
  const isValidId = mongoose.isValidObjectId(params?.id);

  if (!isValidId) {
    return redirect("/");
  }
  return <UploadImages id={params?.id} />;
};

export default HomePage;
