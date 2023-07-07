"use client";

import React, { useState } from "react";
import StarRatings from "react-star-ratings";
import {useRouter} from "next/navigation";
import { getPriceQueryParams } from "@/helpers/helpers";
import { useMediaQuery } from 'react-responsive'


const Filters = () => {
  const [min, setMin] = useState("");
  const [max, setMax] = useState("");
  const [keyword, setKeyword] = useState("");
  const [render,setRender] = useState(false);

  const router = useRouter();

  const isMobile = useMediaQuery({ minWidth:0,maxWidth:500});

  let queryParams;

  function handleClick(e,checkbox) {
    if (typeof window !== "undefined") {
      queryParams = new URLSearchParams(window.location.search);
    }

    const checkboxes = document.getElementsByName(checkbox.name);

    checkboxes.forEach((item) => {
      if (item !== checkbox) item.checked = false;
    });

    if (checkbox.checked === false) {
      // Delete the filter from query
      queryParams.delete(checkbox.name);
    } else {
      // Set filter in the query
      if (queryParams.has(checkbox.name)) {
        queryParams.set(checkbox.name, checkbox.value);
      } else {
        queryParams.append(checkbox.name, checkbox.value);
      }
    }
    const path = window.location.pathname + "?" + queryParams.toString();
    router.push(path);
    setRender((prev)=>!prev);
  }

  function handleButtonClick(e) {
    if (typeof window !== "undefined") {
      queryParams = new URLSearchParams(window.location.search);

      queryParams = getPriceQueryParams(queryParams, "min", min);
      queryParams = getPriceQueryParams(queryParams, "max", max);

      const path = window.location.pathname + "?" + queryParams.toString();
      router.push(path);
      setRender((prev)=>!prev);
    }
  };

  function checkHandler(checkBoxType, checkBoxValue) {
    if (typeof window !== "undefined") {
      queryParams = new URLSearchParams(window.location.search);

      const value = queryParams.get(checkBoxType);
      if (checkBoxValue === value) return true;
      return false;
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (keyword) {
      router.push(`/filter/?keyword=${keyword}`);
    } else {
      router.push("/filter");
    }
    setRender((prev)=>!prev);
  };

  return (
    <aside className="w-1/3 md:w-1/3 lg:w-1/4 px-4">
      {/* <a
        className="hidden md:hidden mb-5 mt-20  w-full text-center px-4 py-2 inline-block text-lg text-gray-700 bg-white shadow-sm border border-gray-200 rounded-md hover:bg-gray-100 hover:text-blue-600"
        href="/filter"
      >
        Filter by
      </a> */}
      {render && <div className="hidden"></div>}
      <div className="md:block md:px-6 md:py-4 md:border md:border-gray-200 md:bg-white md:rounded md:shadow-sm lg:px-6 lg:py-4 lg:border lg:border-gray-200 lg:bg-white lg:rounded lg:shadow-sm">
        <div className="lg:hidden mb-4">
          {render && <div className="hidden"></div>}
          <form
            className="flex w-full relative items-center justify-center"
            onSubmit={submitHandler}>
              <input
                id="top-bar-search"
                className="text-heading outline-none w-full h-[45px] bg-[rgba(241,246,249,1)] text-[rgba(58,58,58,1)] text-md md:text-md rounded-xl transition-all duration-200 hover:border-gray-400 focus:outline-none focus:border-gray-400 "
                type="text"
                placeholder="Search a keyword"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                required
              />
            <button onClick={submitHandler} className="ml-4 md:ml-0 h-full flex shrink-0 justify-center items-center focus:outline-none">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="w-4 h-4 md:w-5 md:h-5 text-skin-base text-opacity-40"><path d="M19.0144 17.9256L13.759 12.6703C14.777 11.4129 15.3899 9.81507 15.3899 8.07486C15.3899 4.04156 12.1081 0.759766 8.07483 0.759766C4.04152 0.759766 0.759766 4.04152 0.759766 8.07483C0.759766 12.1081 4.04156 15.3899 8.07486 15.3899C9.81507 15.3899 11.4129 14.777 12.6703 13.759L17.9256 19.0144C18.0757 19.1645 18.2728 19.24 18.47 19.24C18.6671 19.24 18.8642 19.1645 19.0144 19.0144C19.3155 18.7133 19.3155 18.2266 19.0144 17.9256ZM8.07486 13.8499C4.89009 13.8499 2.2998 11.2596 2.2998 8.07483C2.2998 4.89006 4.89009 2.29976 8.07486 2.29976C11.2596 2.29976 13.8499 4.89006 13.8499 8.07483C13.8499 11.2596 11.2596 13.8499 8.07486 13.8499Z" fill="currentColor"></path></svg>
            </button>
            {render && <div className="hidden"></div>}
          </form>
        </div>
        <h3 className="font-semibold mb-1 md:mb-2 lg:mb-2">Price ($)</h3>
        <div className="grid md:grid-cols-3 md:gap-x-2 lg:gap-x-2 gap-x-0">
          <div className="mb-0 md:mb-4 lg:mb-4">
            <input
              name="min"
              className="appearance-none border border-gray-200 bg-gray-100 rounded-md py-1 md:py-2 lg:py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full"
              type="number"
              placeholder="Min"
              value={min}
              onChange={(e) => setMin(e.target.value)}
            />
          </div>

          <div className="mb-2 md:mb-4 lg:mb-4">
            <input
              name="max"
              className="appearance-none border border-gray-200 bg-gray-100 rounded-md py-1 md:py-2 lg:py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full"
              type="number"
              placeholder="Max"
              value={max}
              onChange={(e) => setMax(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <button
              className="px-1 py-1 md:py-2 lg:py-2 text-center w-full inline-block text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700"
              onClick={(e)=>handleButtonClick(e)}
            >
              Go
            </button>
          </div>
        </div>
      </div>

      <div className="md:block md:px-6 md:py-4 md:border md:border-gray-200 md:bg-white md:rounded md:shadow-sm lg:px-6 lg:py-4 lg:border lg:border-gray-200 lg:bg-white lg:rounded lg:shadow-sm md:block">
        <h3 className="font-semibold mb-2">Category</h3>

        <ul className="space-y-1">
          <li>
            <label className="flex items-center">
              <input
                name="category"
                type="checkbox"
                value="Smartphone"
                className="h-4 w-4"
                defaultChecked={checkHandler("category", "Smartphone")}
                onClick={(e) => handleClick(e,e.target)}
              />
              <span className="ml-2 text-gray-500"> Smartphones </span>
            </label>
          </li>
          <li>
            <label className="flex items-center">
              <input
                name="category"
                type="checkbox"
                value="Laptop"
                className="h-4 w-4"
                defaultChecked={checkHandler("category", "Laptop")}
                onClick={(e) => handleClick(e,e.target)}
              />
              <span className="ml-2 text-gray-500"> Laptops </span>
            </label>
          </li>
          <li>
            <label className="flex items-center">
              <input
                name="category"
                type="checkbox"
                value="Camera"
                className="h-4 w-4"
                defaultChecked={checkHandler("category", "Camera")}
                onClick={(e) => handleClick(e,e.target)}
              />
              <span className="ml-2 text-gray-500"> Cameras </span>
            </label>
          </li>
          <li>
            <label className="flex items-center">
              <input
                name="category"
                type="checkbox"
                value="Headphone"
                className="h-4 w-4"
                defaultChecked={checkHandler("category", "Headphone")}
                onClick={(e) => handleClick(e,e.target)}
              />
              <span className="ml-2 text-gray-500"> Headphones </span>
            </label>
          </li>
          <li>
            <label className="flex items-center">
              <input
                name="category"
                type="checkbox"
                value="Accessories"
                className="h-4 w-4"
                defaultChecked={checkHandler("category", "Accessories")}
                onClick={(e) => handleClick(e,e.target)}
              />
              <span className="ml-2 text-gray-500"> PC Accessories </span>
            </label>
          </li>
          <li>
            <label className="flex items-center">
              <input
                name="category"
                type="checkbox"
                value="Television"
                className="h-4 w-4"
                defaultChecked={checkHandler("category", "Television")}
                onClick={(e) => handleClick(e,e.target)}
              />
              <span className="ml-2 text-gray-500"> Televisions </span>
            </label>
          </li>
        </ul>

        <hr className="my-4" />

        <h3 className="font-semibold mb-2">Ratings</h3>
        <ul className="space-y-1">
          <li>
            {[5, 4, 3, 2, 1].map((rating) => (
              <label key={rating} className="flex items-center">
                <input
                  name="ratings"
                  type="checkbox"
                  value={rating}
                  className="h-3 w-3 md:h-4 md:w-4 lg:w-4 lg:h-4"
                  defaultChecked={checkHandler("ratings", `${rating}`)}
                  onClick={(e) => handleClick(e,e.target)}
                />
                <span className="ml-1 md:ml-2 lg:ml-2 text-gray-500">
                  {" "}
                  <StarRatings
                    rating={rating}
                    starRatedColor="#ffb829"
                    numberOfStars={5}
                    starDimension={isMobile?"12px":"20px"}
                    starSpacing="2px"
                    name="rating"
                  />{" "}
                </span>
              </label>
            ))}
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Filters;
