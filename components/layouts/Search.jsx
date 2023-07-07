"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

const Search = () => {
  const [keyword, setKeyword] = useState("");
  const [render,setRender] = useState(false);

  const router = useRouter();

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
    <form
      className="flex w-full relative"
      onSubmit={submitHandler}
    >
      <label htmlFor="top-bar-search" className="flex flex-1 items-center py-0.5">
        <input
          id="top-bar-search"
          className="text-heading outline-none w-full h-[45px] ps-5 md:ps-6 pe-14 md:pe-16 bg-[rgba(241,246,249,1)] text-[rgba(58,58,58,1)] text-lg  rounded-full transition-all duration-200 focus:border-[rgba(255,126,0,1)] focus:ring-1 "
          type="text"
          placeholder="Search the store"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          required
        />
      </label>
      <button onClick={submitHandler} className="w-14 md:w-16 h-full absolute top-0 end-0 flex flex-shrink-0 justify-center items-center focus:outline-none">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="w-5 h-5 text-skin-base text-opacity-40"><path d="M19.0144 17.9256L13.759 12.6703C14.777 11.4129 15.3899 9.81507 15.3899 8.07486C15.3899 4.04156 12.1081 0.759766 8.07483 0.759766C4.04152 0.759766 0.759766 4.04152 0.759766 8.07483C0.759766 12.1081 4.04156 15.3899 8.07486 15.3899C9.81507 15.3899 11.4129 14.777 12.6703 13.759L17.9256 19.0144C18.0757 19.1645 18.2728 19.24 18.47 19.24C18.6671 19.24 18.8642 19.1645 19.0144 19.0144C19.3155 18.7133 19.3155 18.2266 19.0144 17.9256ZM8.07486 13.8499C4.89009 13.8499 2.2998 11.2596 2.2998 8.07483C2.2998 4.89006 4.89009 2.29976 8.07486 2.29976C11.2596 2.29976 13.8499 4.89006 13.8499 8.07483C13.8499 11.2596 11.2596 13.8499 8.07486 13.8499Z" fill="currentColor"></path></svg>
      </button>
      {render && <div className="hidden"></div>}
    </form>
  );
};

export default Search;
