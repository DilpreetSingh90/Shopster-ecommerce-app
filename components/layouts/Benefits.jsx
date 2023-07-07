'use client';

import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useMediaQuery } from 'react-responsive'

const Benefits = () => {

  const isMobileorTablet = useMediaQuery({ minWidth:0,maxWidth:1000});

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1000 },
      items: 4,
      slidesToSlide: 0 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 980, min: 540 },
      items: 2,
      slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 500, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
};

  const CustomLeftArrow = ({ onClick, ...rest }) => {
    return (
    <button type="button" className="absolute top-[35%] left-[-5px] md:top-[45%] md:left-[-3px] cursor-pointer p-[14px] translate-y-[-50%] w-12 h-12" name="previous" onClick={onClick}>
        <svg ariaHidden="true" focusable="false" role="presentation" className="inline-block vertical-align-middle fill-white transition-all w-full h-full stroke-transparent rotate-[90deg] translate-[-0.15rem] ml-[-2rem]" viewBox="0 0 10 6">
            <path fillRule="evenodd" clipRule="evenodd" d="M9.354.646a.5.5 0 00-.708 0L5 4.293 1.354.646a.5.5 0 00-.708.708l4 4a.5.5 0 00.708 0l4-4a.5.5 0 000-.708z"></path>
        </svg>
    </button>
    );
  };

  const CustomRightArrow = ({ onClick, ...rest }) => {
    return (
    <button type="button" className="absolute top-[35%] right-[-5px] md:top-[45%] md:right-[-18px] cursor-pointer p-[14px] translate-y-[-50%] w-12 h-12" name="next" onClick={onClick}>
        <svg aria-hidden="true" focusable="false" role="presentation" className="inline-block vertical-align-middle fill-white transition-all w-full h-full stroke-transparent rotate-[-90deg] translate-[0.15rem] mr-[-0.2rem]" viewBox="0 0 10 6">
            <path fillRule="evenodd" clipRule="evenodd" d="M9.354.646a.5.5 0 00-.708 0L5 4.293 1.354.646a.5.5 0 00-.708.708l4 4a.5.5 0 00.708 0l4-4a.5.5 0 000-.708z"></path>
        </svg>
    </button>
    );
  };

  return (
    <>
      <div className="block relative w-full mt-10 max-w-full bg-[#1b2483] lg:bg-[url('/images/benefitsbg.jpg')]">
        <div className='flex flex-col items-center justify-center p-16 relative'>
          <div className="relative text-center">   
            <h3 className="mb-[30px] md:mb-[40px] leading-[34px] mt-[1px] text-[30px] md:text-[40px] font-bold relative font-[Rubik] capitalize">
              <span className=" bg-transparent inline-block align-top px-[20px] relative">
                <strong className="whitespace-nowrap tracking-tight font-bold text-white">
                  <span className="text-[#10ffda]">Why shop</span> with us?
                </strong>
              </span>
            </h3>
          </div>
          <div className='w-full h-[250px] shrink-0 relative'>
            <Carousel
            additionalTransfrom={0}
            ssr={true}
            arrows
            autoPlay={false}
            centerMode={false}
            className=""
            containerClass=""
            dotListClass=""
            draggable
            focusOnSelect={false}
            infinite={false}
            keyBoardControl
            minimumTouchDrag={80}
            pauseOnHover
            customLeftArrow={<CustomLeftArrow />}
            customRightArrow={<CustomRightArrow />}
            renderArrowsWhenDisabled={false}
            renderButtonGroupOutside={false}
            renderDotsOutside={false}
            responsive={responsive}
            rewind={false}
            rewindWithAnimation={false}
            rtl={false}
            shouldResetAutoplay
            showDots={false}
            slidesToSlide={1}
            swipeable>
              <div className="flex flex-col items-center justify-center text-center">
                <img className="relative p-6" src="/images/b1.png" alt='' />
                <div className="text-center text-white">
                  <span className="mb-2 font-semibold text-2xl">Free Shipping On First Order</span>
                  <p className="mb-1 text-lg">Enjoy free shipping on all your orders.</p>
                  <a href="/" className="text-lg underline hover:text-[#4169e1]">Learn more</a>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center text-center">
                <img className="relative p-6" src="/images/b2.png" alt='' />
                <div className="text-center text-white">
                  <span className="mb-2 font-semibold text-2xl">Weekly Flash Sale</span>
                  <p className="mb-1 text-lg">Buy your favorite products on our weekly sales.</p>
                  <a href="/" className="text-lg underline hover:text-[#4169e1]">Learn more</a>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center text-center">
                <img className="relative p-6" src="/images/b3.png" alt='' />
                <div className="text-center text-white">
                  <span className="mb-2 font-semibold text-2xl">Annual Payment Discount</span>
                  <p className="mb-1 text-lg">Get extra discount on buying our annual payment subscription.</p>
                  <a href="/" className="text-lg underline hover:text-[#4169e1]">Learn more</a>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center text-center">
                <img className="relative p-6" src="/images/b4.png" alt='' />
                <div className="text-center text-white">
                  <span className="mb-2 font-semibold text-2xl">Cashback Reward Program</span>
                  <p className="mb-1 text-lg">Earn huge cashbacks through our exclusive programs.</p>
                  <a href="/" className="mb-2 text-lg underline hover:text-[#4169e1]">Learn more</a>
                </div>
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </>
  )
}

export default Benefits