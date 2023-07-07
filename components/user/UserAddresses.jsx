import Link from "next/link";
import React from "react";

const UserAddresses = ({ addresses }) => {
  return addresses?.map((address) => (
    <Link href={`/address/${address._id}`} key={address._id}>
      <div className="lg:mb-5 gap-1">
        <figure className="w-full flex align-center bg-gray-100 p-1 md:p-2 lg:p-4 rounded-md cursor-pointer">
          <div className="mr-0 md:mr-1 lg:mr-3">
            <span className="flex items-center justify-center text-yellow-500 w-12 h-12 bg-white rounded-full shadow mt-2">
              <i className="text-lg md:text-xl lg:text-2xl fa fa-map-marker-alt"></i>
            </span>
          </div>
          <figcaption className="text-gray-600">
            <p className="text-sm md:text-lg lg:text-lg">
              {address.street} <br /> {address.city}, {address.state},{" "}
              {address.zipCode}, {address.country}
              <br />
              Phone no: {address.phoneNo}
            </p>
          </figcaption>
        </figure>
      </div>
    </Link>
  ));
};

export default UserAddresses;
