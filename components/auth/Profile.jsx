"use client";

import React, { useContext } from "react";
import UserAddresses from "../user/UserAddresses";
import Link from "next/link";
import AuthContext from "@/context/AuthContext";

const Profile = ({ addresses }) => {
  const { user } = useContext(AuthContext);

  return (
    <>
      <figure className="flex items-start items-center">
        <div className="relative">
          <img
            className="w-10 h-10 md:w-16 md:h-16 lg:w-16 lg:h-16 rounded-full mr-2 md:mr-4 lg:mr-4 "
            src={user?.avatar ? user?.avatar?.url : "/images/default.png"}
            alt={user?.name}
          />
        </div>
        <figcaption>
          <h5 className="font-semibold text-md md:text-xl lg:text-xl">{user?.name}</h5>
          <p className="font-semibold text-sm md:text-lg lg:text-lg">
            <span className="mr-2">Email:</span><span className="font-normal">{user?.email}</span>
            <br/> 
            <span className="mr-2">Joined On:</span>
            <span className="font-normal">{user?.createdAt.substring(0, 10)}</span>
          </p>
        </figcaption>
      </figure>

      <hr className="my-0 md:my-2 lg:my-2" />

      <UserAddresses addresses={addresses} />

      <Link href="/address/new">
        <button className="px-2 py-1 md:px-4 lg:px-4 md:py-2 lg:py-2 text-sm md:text-lg lg:text-lg inline-block text-blue-600 border border-gray-300 rounded-md hover:bg-gray-100">
          <i className="mr-1 fa fa-plus"></i> Add new address
        </button>
      </Link>

      <hr className="my-1 md:my-2 lg:my-2" />
    </>
  );
};

export default Profile;
