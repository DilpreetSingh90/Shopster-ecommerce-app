'use client';

import Link from 'next/link';
import React, { useState,useContext } from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CartContext from "@/context/CartContext";
import StarRatings from "react-star-ratings";

const ProductModal = ({product,setShowModal}) => {

    const { addItemToCart } = useContext(CartContext);
    const [quantity,setQuantity]= useState(1);

    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1000 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 980, min: 540 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 500, min: 0 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        }
    };

    const addToCartHandler = (product) => {
        addItemToCart({
          product: product._id,
          name: product.name,
          price: product.price,
          image: product.images[0].url,
          stock: product.stock,
          seller: product.seller,
          quantity: quantity,
        });
    };

    const increaseQty = () =>{
        setQuantity((prev)=>prev+1<product.stock?prev+1:product.stock);
    }

    const decreaseQty = () =>{
        setQuantity((prev)=>prev-1>0?prev-1:1);
    }

    const CustomLeftArrow = ({ onClick, ...rest }) => {
        return (
            <button onClick={onClick} className="absolute top-[50%] left-0 w-7 h-7 md:w-8 md:h-8 lg:w-9 lg:h-9 xl:w-10 xl:h-10 text-base lg:text-lg xl:text-xl flex items-center cursor-pointer justify-center rounded-full bg-[rgb(255,255,255)] transition duration-300 hover:bg-[rgb(255,126,0)] hover:text-[rgb(255,255,255)] focus:outline-none transform translate-y-[-50%] shadow-[0 3px 6px rgba(115,125,144,0.25)] ">
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M217.9 256L345 129c9.4-9.4 9.4-24.6 0-33.9-9.4-9.4-24.6-9.3-34 0L167 239c-9.1 9.1-9.3 23.7-.7 33.1L310.9 417c4.7 4.7 10.9 7 17 7s12.3-2.3 17-7c9.4-9.4 9.4-24.6 0-33.9L217.9 256z"></path>
                </svg>
            </button>
        );
    };
    
    const CustomRightArrow = ({ onClick, ...rest }) => {
    return (
        <button onClick={onClick} className="absolute top-[50%] right-0 w-7 h-7 md:w-8 md:h-8 lg:w-9 lg:h-9 xl:w-10 xl:h-10 text-base lg:text-lg xl:text-xl flex items-center cursor-pointer justify-center rounded-full bg-[rgb(255,255,255)] transition duration-300 hover:!bg-[rgb(255,126,0)] hover:text-[rgb(255,255,255)] focus:outline-none transform translate-y-[-50%] shadow-[0 3px 6px rgba(115,125,144,0.25)]">
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"></path>
            </svg>
        </button>
    );
    }; 


  return (
    <>
        <div className="fixed inset-0 z-50 overflow-y-auto overflow-x-hidden" role="dialog">
            <div className="min-h-screen lg:px-4 text-center">
                <div className="fixed bg-[rgba(58,58,58,0.7)] inset-0 z-40 cursor-pointer"></div>
                    <span className="h-screen align-middle inline-block">​</span>
                    <div className="w-full md:w-auto inline-block p-4 md:p-6 xl:p-8 overflow-hidden text-start align-middle transition-all transform shadow-xl relative z-50"><div className="relative rounded-md">
                        <button className="opacity-0 absolute top-2 md:top-4 end-2 md:end-4" tabindex="0"></button>
                        <div class="md:w-[600px] lg:w-[940px] xl:w-[1180px] mx-auto p-1 lg:p-0 xl:p-3 bg-[rgba(255,255,255,1)] rounded-md">
                            <button onClick={()=>setShowModal(false)} className="fixed z-10 inline-flex items-center justify-center w-12 h-12 transition duration-200 text-[rgba(58,58,58,0.5)] focus:outline-none hover:text-opacity-100 top-4 md:top-6 lg:top-7 xl:top-10 end-4 md:end-6 lg:end-7 xl:end-10 lg:bg-transparent rounded-full">
                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="text-xl lg:text-2xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z"></path>
                                </svg>
                            </button>
                            <div className="overflow-hidden">
                                <div className="px-2 md:px-5 mb-2 lg:mb-2 pt-4 md:pt-7 ">
                                    <div className="lg:flex items-start justify-between gap-8">
                                        <div className="block h-full relative w-full px-[25px] mx-auto max-w-[500px]">
                                                <Carousel
                                                    additionalTransfrom={0}
                                                    ssr={true}
                                                    customLeftArrow={<CustomLeftArrow />}
                                                    customRightArrow={<CustomRightArrow />}
                                                    autoPlay={false}
                                                    centerMode={false}
                                                    className=""
                                                    containerClass=""
                                                    dotListClass=""
                                                    draggable
                                                    focusOnSelect
                                                    infinite={false}
                                                    itemClass=""
                                                    keyBoardControl
                                                    minimumTouchDrag={80}
                                                    pauseOnHover
                                                    renderArrowsWhenDisabled={false}
                                                    renderButtonGroupOutside={false}
                                                    renderDotsOutside={false}
                                                    responsive={responsive}
                                                    rewind={false}
                                                    rewindWithAnimation={false}
                                                    rtl={false}
                                                    shouldResetAutoplay
                                                    showDots={false}
                                                    partialVisbile
                                                    slidesToSlide={1}
                                                    swipeable>
                                                    {product.images.map((img)=>(
                                                    <div className='mt-4 flex items-center justify-center md:mt-4 lg:mt-0'>
                                                        <img src={img.url} className="'w-[250px] max-h-[250px] md:max-h-[250px] md:w-[250px] md:h-[250px] lg:max-h-[370px] lg:w-[450px] lg:h-[375px]" />
                                                    </div>))}
                                            </Carousel>
                                        </div>
                                        <div className="shrink-0 flex flex-col lg:w-[430px] xl:w-[520px] 2xl:w-[520px]">
                                            <div className="pt-5 lg:pt-0 pb-5"><div className="mb-2 md:mb-2.5 block mt-[-0.375rem]">
                                                <h2 className="text-[rgb(58,58,58)] text-lg md:text-xl xl:text-2xl font-medium transition-colors duration-300 hover:text-[rgb(255,126,0)]">
                                                    <Link href={`/product/${product._id}`}>{product.name}</Link>
                                                </h2>
                                            </div>
                                            <div className="flex flex-wrap items-center space-s-2 mb-2">
                                                <div className="ratings">
                                                    <div className="my-1">
                                                        <StarRatings
                                                        rating={product?.ratings}
                                                        starRatedColor="#ffb829"
                                                        numberOfStars={5}
                                                        starDimension="18px"
                                                        starSpacing="1px"
                                                        name="rating"
                                                        />
                                                    </div>
                                                </div>
                                                <b className="text-gray-300">•</b>
                                                <span className="ml-1 text-yellow-500">{product?.ratings}</span>
                                            </div>
                                            <div className="flex items-center mt-5">
                                                <div className="text-[rgb(255,126,0)] font-semibold text-base md:text-xl xl:text-[30px]">${product.price}</div>
                                            </div>
                                        </div>
                                        <div className="pb-2">
                                            <span className="text-sm font-medium text-[rgb(249,143,20)]">Only {product.stock} item left!</span>
                                        </div>
                                        <div className="pt-1.5 lg:pt-3 xl:pt-4 space-y-2.5 md:space-y-3.5">
                                            <div className="button--mutiqty flex items-center justify-between rounded overflow-hidden shrink-0 h-11 md:h-14 bg-[rgb(243,245,249)]">
                                                <button onClick={decreaseQty} className="flex items-center justify-center flex-shrink-0 h-full transition-all ease-in-out duration-300 focus:outline-none focus-visible:outline-none w-10 h-10 rounded-full transform scale-80 lg:scale-100 text-[rgb(58,58,58)] hover:bg-[rgb(229,234,241)] ms-auto">
                                                    <span className="whitespace-nowrap absolute w-[1px] h-[1px] overflow-hidden m-[-1px]">button-minus</span>
                                                    <svg className="transition-all" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <g opacity="1">
                                                            <path d="M3.15109 11.8438L10.174 11.8439L11.8264 11.8438L18.8493 11.8439C19.0772 11.8439 19.284 11.7515 19.4335 11.602C19.5831 11.4524 19.6755 11.2455 19.6754 11.0177C19.6755 10.5608 19.3062 10.1915 18.8493 10.1916L11.8264 10.1915L10.1741 10.1915L3.15109 10.1915C2.69427 10.1915 2.32496 10.5608 2.32496 11.0177C2.32486 11.4746 2.69416 11.8439 3.15109 11.8438Z" fill="currentColor" stroke="currentColor" stroke-width="0.5"></path>
                                                        </g>
                                                    </svg>
                                                </button>
                                                <span className="font-semibold text-[rgb(58,58,58)] flex items-center justify-center h-full transition-colors duration-250 ease-in-out cursor-default shrink-0 text-base md:text-[17px] w-12 md:w-20 xl:w-28">{quantity}</span>
                                                <button onClick={increaseQty} class="group flex flex items-center justify-center flex-shrink-0 h-full transition-all ease-in-out duration-300 focus:outline-none focus-visible:outline-none w-10 h-10 rounded-full transform scale-80 lg:scale-100 text-[rgb(58,58,58)] hover:bg-[rgb(229,234,241)] me-auto">
                                                    <span className="whitespace-nowrap absolute w-[1px] h-[1px] overflow-hidden m-[-1px]">button-plus</span>
                                                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <g opacity="1">
                                                            <path d="M10.174 11.8439L3.15109 11.8438C2.69416 11.8439 2.32486 11.4746 2.32496 11.0177C2.32496 10.5608 2.69427 10.1915 3.15109 10.1915L10.1741 10.1915L10.174 3.16858C10.1741 2.71165 10.5433 2.34245 11.0002 2.34245C11.4571 2.34234 11.8264 2.71165 11.8263 3.16858L11.8264 10.1915L18.8493 10.1916C19.3062 10.1915 19.6755 10.5608 19.6754 11.0177C19.6755 11.2455 19.5831 11.4524 19.4335 11.602C19.284 11.7515 19.0772 11.8439 18.8493 11.8439L11.8264 11.8438L11.8264 18.8668C11.8264 19.0947 11.734 19.3015 11.5845 19.451C11.4349 19.6006 11.2281 19.6929 11.0002 19.6929C10.5433 19.693 10.174 19.3237 10.1741 18.8668L10.174 11.8439Z" fill="currentColor" stroke="currentColor" strokeWidth="0.5"></path>
                                                        </g>
                                                    </svg>
                                                </button>
                                            </div>
                                            <button  onClick={()=>addToCartHandler(product)} className="group text-sm lg:text-15px leading-4 inline-flex items-center cursor-pointer transition ease-in-out duration-300 font-body font-semibold text-center justify-center tracking-[0.2px] rounded placeholder-white focus-visible:outline-none focus:outline-none h-12 md:h-14 bg-[rgb(255,126,0)] text-[rgb(255,255,255)] tracking-widest px-5 md:px-6 lg:px-8 py-4 md:py-3.5 lg:py-4 hover:text-white hover:bg-opacity-90 w-full px-1.5">
                                                <svg width="18" height="18" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" className="me-3">
                                                    <g clipPath="url(#clip0)">
                                                        <path d="M19.7999 19.0172L18.5402 4.8319C18.5132 4.51697 18.2478 4.27853 17.9374 4.27853H15.3459C15.31 1.91207 13.3754 0 10.9999 0C8.62447 0 6.68991 1.91207 6.65392 4.27853H4.06251C3.74758 4.27853 3.48664 4.51697 3.45965 4.8319L2.19993 19.0172C2.19993 19.0352 2.19543 19.0532 2.19543 19.0712C2.19543 20.6863 3.6756 22 5.49768 22H16.5022C18.3243 22 19.8044 20.6863 19.8044 19.0712C19.8044 19.0532 19.8044 19.0352 19.7999 19.0172ZM10.9999 1.21472C12.705 1.21472 14.0952 2.58241 14.1312 4.27853H7.86864C7.90464 2.58241 9.29482 1.21472 10.9999 1.21472ZM16.5022 20.7853H5.49768C4.35494 20.7853 3.42815 20.0294 3.41016 19.0982L4.61588 5.49775H6.64942V7.34233C6.64942 7.67975 6.91936 7.94969 7.25678 7.94969C7.59421 7.94969 7.86415 7.67975 7.86415 7.34233V5.49775H14.1312V7.34233C14.1312 7.67975 14.4012 7.94969 14.7386 7.94969C15.076 7.94969 15.3459 7.67975 15.3459 7.34233V5.49775H17.3795L18.5897 19.0982C18.5717 20.0294 17.6404 20.7853 16.5022 20.7853Z" fill="#ffffff" stroke="#ffffff" strokeWidth="0.1"></path>
                                                    </g>
                                                </svg>
                                                Add to Cart
                                            </button>
                                        </div>
                                        <div className="pt-6 xl:pt-8 pb-6">
                                            <h3 className="text-[rgb(58,58,58)] mb-3 lg:mb-3.5 text-15px sm:text-base font-medium">Product Details:</h3>
                                            <p className="text-sm leading-[1.85em]">
                                            {product.description.substring(0,150)}
                                             {product.description.length>150 && <Link href={`/product/${product._id}`}><span className="text-[rgb(255,126,0)] ms-0.5">Read More</span></Link>}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</>
  )
}

export default ProductModal