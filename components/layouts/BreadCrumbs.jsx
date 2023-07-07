import React from "react";
import Link from "next/link";

const BreadCrumbs = ({ breadCrumbs }) => {
  return (
    <section className="py-5 sm:py-7 bg-white">
      <div className="container max-w-screen-xl mx-auto px-4">
        <ol className="inline-flex flex-wrap text-lg space-x-1 md:space-x-3 items-center">
          {breadCrumbs?.map((breadCrumb, index) => (
            <li className="inline-flex items-center">
              <Link
                href={breadCrumb.url}
                className="font-semibold text-lg hover:text-[#4169e1]"
              >
                {breadCrumb.name}
              </Link>
              {breadCrumbs?.length - 1 !== index && (
                <i className="ml-3 fa fa-chevron-right"></i>
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default BreadCrumbs;
