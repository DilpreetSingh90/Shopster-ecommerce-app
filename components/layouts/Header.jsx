"use client";
import React, { useContext, useEffect, useState } from "react";
import Link from "next/link";
import Search from "./Search";
import Image from "next/image";
import CartContext from "@/context/CartContext";
import { useSession } from "next-auth/react";
import AuthContext from "@/context/AuthContext";
import Drawer from '@mui/material/Drawer';


const Header = () => {

  const { user, setUser } = useContext(AuthContext);
  const { data } = useSession();
  const [search,setSearch] = useState(false);
  const [dropdown,setDropdown] = useState(false);

  const handleDropdown = () =>{
    setDropdown((prev)=>!prev);
  }

  const handleSearch = () =>{
    setSearch((prev)=>!prev);
  }

  useEffect(() => {
    if (data) {
      setUser(data?.user);
    }
  }, [data]);

  const { cart } = useContext(CartContext);
  const cartItems = cart?.cartItems;
  const [draw, setDraw] = useState(false);

  const openDrawer = async () => {
    setDraw(true);
  }

  const backdrop ={
    backgroundColor: 'rgba(0, 0, 255, 0)', 
  }

  return (
    <header className="bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e] fixed top-0 z-50 lg:relative w-full">
      <div className="mx-auto max-w-[1870px] px-4 md:px-6 lg:px-8 2xl:px-20">
        <div className="flex flex-wrap items-center justify-between py-2 md:py-4">
            <a href="/" className="focus:outline-none md:ps-0 lg:mx-0">
                {/* <Image
                  src="/images/logo.png"
                  height="50"
                  width="50"
                  alt="Shopster"
                  className='overflow-hidden w-[150px] h-[50px]'
                /> */}
                {/* <div className="flex items-center gap-2"> */}
                  <span className="bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] via-[#B38728] via-[#FBF5B7] to-[#AA771C] text-transparent inline-block bg-clip-text font-semibold font-[Helvetica] ml-2 text-2xl md:text-3xl md:ml-2 lg:text-3xl lg:ml-0">SHOPSTER</span>
                  {/* <i class="text-white text-2xl fa-solid fa-store fa-fade"></i> */}
                {/* </div> */}
            </a>
            <div>

            </div>
          <div className="w-full transition-all duration-200 ease-in-out hidden lg:flex lg:max-w-[450px] xl:max-w-[650px] 2xl:max-w-[900px] lg:mx-10">
            <div className="overlay cursor-pointer"></div>
            <div className="w-full flex flex-col justify-center flex-shrink-0 relative z-30">
              <div className="flex flex-col mx-auto w-full">  
                <Search />
              </div>
            </div>
          </div>
          <div className="flex gap-10 space-s-5 xl:space-s-10 lg:max-w-[33%]">
            <div className="hidden lg:hidden md:flex">
                {!search && <button onClick={handleSearch}>
                  <i class="text-3xl text-white fa-solid fa-magnifying-glass"></i>
                </button>}
                {search &&<div className="flex items-center justify-center mt-4 w-[100vw] order-1"><div className="w-7/12">
                    <Search />
                </div>
                <button className="w-1/12" onClick={handleSearch}>
                  <i class="text-2xl text-white fa-solid fa-xmark"></i>
                </button></div> }
            </div>
            <div className="hidden md:flex lg:flex items-center flex-shrink-0 ">
                <Link
                  href="/cart"
                  className="relative flex items-center bg-transparent px-3 py-2 inline-block text-center text-white-700 shadow-sm hover:scale-125"
                >
                  <span className="w-[22px] h-[22px] py-2 text-[14px] flex items-center justify-center bg-white text-black absolute -top-0 start-1 rounded-full font-bold">{cartItems?.length || 0}</span>
                  <i className="text-white text-3xl fa fa-shopping-cart"></i>
                  <span className="hidden lg:inline ml-2 text-white text-lg">
                    CART
                  </span>
              </Link>
            </div>
            {!user ? (
              <div className="hidden lg:flex items-center flex-shrink-0 ">
                <Link
                  href="/login"
                  className="px-3 py-2 inline-block text-center text-white-700 bg-transparent shadow-sm rounded-md hover:scale-110"
                >
                  <i className="text-white text-2xl fa fa-user"></i>
                  <span className="hidden lg:inline ml-2 text-white text-lg">ACCOUNT</span>
                </Link>
              </div>
            ) : (
              <div className="hidden md:flex lg:flex items-center flex-shrink-0 ">
                <Link href="/me">
                  <div className="flex items-center mb-2 space-x-3 mt-2 cursor-pointer">
                    <img
                      className="w-10 h-10 rounded-full"
                      src={
                        user?.avatar ? user?.avatar?.url : "/images/default.png"
                      }
                    />
                    <div className="hidden lg:inline space-y-1 font-medium">
                      <p className="block text-sm text-white text-xl">
                        {user?.name}
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            )}
            <div className=" flex items-center shrink-0  lg:hidden">
              <button type='button' className="border border-[rgba(231,236,240,0.4)] rounded-md focus:outline-none shrink-0 text-md  text-[rgba(255,255,255,1)] px-2.5 md:px-3 lg:px-[18px] py-2 md:py-2.5 lg:py-3 flex items-center transition-all"
                onClick={openDrawer}>
                <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="text-2xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <line x1="3" y1="12" x2="21" y2="12"></line>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <line x1="3" y1="18" x2="21" y2="18"></line>
                </svg>
              </button>
              <Drawer
                sx={{
                  width: '55%',
                  flexShrink: 0,
                  '& .MuiDrawer-paper': {
                    // backgroundColor: 'rgba(255, 255, 255, 2)',
                    width: '55%',
                    boxSizing: 'border-box',
                  },
                }}
                variant="persistent"
                anchor="right"
                open={draw}
                hideBackdrop={true}
                >
                  <div className="text-white flex flex-col justify-start place-content-center bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e] w-full h-full ">
                    <button className="text-black flex text-2xl p-2 md:p-4 ml-4 focus:outline-none" 
                    onClick={()=>setDraw(false)}>
                      <i class="text-xl md:text-3xl text-white fa-solid fa-xmark"></i>
                    </button>
                    <div className="mt-4 flex flex-col items-center w-full">
                      {!user ? (
                        <div className="p-2 md:p-4 ml-4 flex items-center shrink-0 ">
                          <Link
                            href="/login"
                            className="px-3 py-2 inline-block text-center text-white-700 bg-transparent shadow-sm rounded-md hover:scale-110"
                          >
                            <i className="text-white text-lg md:text-2xl fa fa-user"></i>
                            <span className="ml-2 text-white text-lg">Sign Up</span>
                          </Link>
                        </div>
                      ) : (
                        <div className="p-2 flex items-center shrink-0  ">
                          <Link href="/me">
                            <div className="flex items-center mb-2 space-x-3 mt-2 cursor-pointer">
                              <img
                                className="w-8 h-8 md:w-10 md:h-10 rounded-full"
                                src={
                                  user?.avatar ? user?.avatar?.url : "/images/default.png"
                                }
                              />
                              <div className="space-y-1 font-medium">
                                <p className="block text-white text-lg md:text-xl">
                                  {user?.name}
                                </p>
                              </div>
                            </div>
                          </Link>
                        </div>
                      )}
                      <span className="bg-white h-[1px] w-full" />
                      <div className="p-2 flex items-center shrink-0 ">
                        <Link
                          href="/cart"
                          className="relative flex items-center bg-transparent px-3 py-2 inline-block text-center text-white-700 shadow-sm hover:scale-125"
                        >
                          <span className="w-[16px] h-[16px] text-[12px] md:w-[22px] md:h-[22px] py-2 md:text-[14px] flex items-center justify-center bg-white text-black absolute -top-0 start-1 rounded-full font-bold">{cartItems?.length || 0}</span>
                          <i className="text-white text-xl md:text-3xl fa fa-shopping-cart"></i>
                          <span className="ml-2 text-white text-lg md:text-xl font-semibold">
                            Cart
                          </span>
                        </Link>
                      </div>
                      <span className="bg-white h-[1px] w-full" />
                      <button className='p-2 flex items-center justify-between' onClick={handleDropdown}>
                        <span className="text-lg md:text-2xl font-semibold p-2 md:p-4 ml-4">Categories</span>
                        {!dropdown?
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="text-lg md:text-xl text-white transition duration-200 ease-in-out transform rotate-0 mr-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                          <path d="M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z"></path>
                        </svg>:
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="text-lg md:text-xl text-white transition duration-200 ease-in-out transform rotate-[-180deg] mr-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                          <path d="M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z"></path>
                        </svg>}
                      </button>
                      {dropdown && <div className="text-md md:text-xl w-full flex flex-col text-center">
                        <a className="duration-200 hover:text-skin-primary py-1" href="/filter?category=Smartphone">Smartphones</a>
                        <a className="duration-200 hover:text-skin-primary py-1" href="/filter?category=Camera">Cameras</a>
                        <a className="duration-200 hover:text-skin-primary py-1" href="/filter?category=Laptop">Laptops</a>
                        <a className="duration-200 hover:text-skin-primary py-1" href="/filter?category=Accessories">PC Accessories</a>
                        <a className="duration-200 hover:text-skin-primary py-1" href="/filter?category=Headphone">Headphones</a>
                        <a className="duration-200 hover:text-skin-primary mb-2" href="/filter?category=Television">Televisions</a>
                      </div>}
                      <span className="bg-white h-[1px] w-full" />
                      <a className="text-lg md:text-2xl font-semibold p-2 md:p-4" href="/about">About us</a>
                      <span className="bg-white h-[1px] w-full" />
                      <a className="text-lg md:text-2xl font-semibold p-2 md:p-4" href="/contact">Contact us</a>
                      <span className="bg-white h-[1px] w-full" />
                      <a className="text-lg md:text-2xl font-semibold p-2 md:p-4" href="/privacy">Privacy Policy</a>
                      <span className="bg-white h-[1px] w-full" />
                      <a className="text-lg md:text-2xl font-semibold p-2 md:p-4" href="/tc">Terms & Condition</a>
                      <span className="bg-white h-[1px] w-full" />
                      <a className="text-lg md:text-2xl font-semibold p-2 md:p-4" href="/faq">FAQ</a>
                      <span className="bg-white h-[1px] w-full" />
                    </div>
                  </div>
                </Drawer>
              </div>
            </div>
          {/* <div className="lg:hidden ml-2">
            <button
              type="button"
              className="bg-white p-3 inline-flex items-center rounded-md text-black hover:bg-gray-200 hover:text-gray-800 border border-transparent"
            >
              <span className="sr-only">Open menu</span>
              <i className="fa fa-bars fa-lg"></i>
            </button>
          </div> */}
        </div>
      </div>
    </header>
  );
};

export default Header;
