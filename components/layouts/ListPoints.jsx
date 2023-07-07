'use client';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const CustomCarousel = () => {
    
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1000 },
          items: 3,
          slidesToSlide: 1 // optional, default to 1.
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
        <button type="button" className="absolute top-[45%] left-[-15px] cursor-pointer p-[14px] translate-y-[-50%] w-12 h-12" name="previous" onClick={onClick}>
            <svg ariaHidden="true" focusable="false" role="presentation" className="inline-block vertical-align-middle fill-[#051c42] transition-all w-full h-full stroke-transparent rotate-[90deg] translate-[-0.15rem] ml-[-0.2rem]" viewBox="0 0 10 6">
                <path fillRule="evenodd" clipRule="evenodd" d="M9.354.646a.5.5 0 00-.708 0L5 4.293 1.354.646a.5.5 0 00-.708.708l4 4a.5.5 0 00.708 0l4-4a.5.5 0 000-.708z"></path>
            </svg>
        </button>
        );
      };

      const CustomRightArrow = ({ onClick, ...rest }) => {
        return (
        <button type="button" className="absolute top-[45%] right-[-15px] cursor-pointer p-[14px] translate-y-[-50%] w-12 h-12" name="next" onClick={onClick}>
            <svg aria-hidden="true" focusable="false" role="presentation" className="inline-block vertical-align-middle fill-[#051c42] transition-all w-full h-full stroke-transparent rotate-[-90deg] translate-[0.15rem] mr-[-0.2rem]" viewBox="0 0 10 6">
                <path fillRule="evenodd" clipRule="evenodd" d="M9.354.646a.5.5 0 00-.708 0L5 4.293 1.354.646a.5.5 0 00-.708.708l4 4a.5.5 0 00.708 0l4-4a.5.5 0 000-.708z"></path>
            </svg>
        </button>
        );
      };

  return (
    <>
    <Carousel
      additionalTransfrom={0}
      ssr={true}
      arrows
      autoPlaySpeed={2000}
      autoPlay={true}
      centerMode={false}
      className=""
      containerClass=""
      dotListClass=""
      draggable
      focusOnSelect={false}
      infinite
      itemClass=""
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
      swipeable
>
    <div className="w-full text-center snap-end shrink-0">
        <a className="flex items-center justify-center p-[17px 20px 17px] text-500 text-center" role="link" ariaDisabled="true" href='/'>
            <span className="mr-5">
            <i class="text-[#051c42] text-3xl fa-solid fa-truck-fast"></i>
            </span>
            <span class="text-2xl font-bold block">Free Shipping &amp; Returns</span>
        </a>
    </div>
    <div className="w-full text-center snap-end shrink-0">
        <a className="flex items-center justify-center p-[17px 20px 17px] text-500 text-center" role="link" ariaDisabled="true" href='/'>
        <span className="mr-5">
            <i class="text-[#051c42] text-3xl fa-solid fa-award"></i>
        </span>
        <span class="text-2xl font-bold block">Lowest Price Guarantee</span>
        </a>
    </div>
    <div className="w-full text-center snap-end shrink-0">
        <a className="flex items-center justify-center p-[17px 20px 17px] text-500 text-center" role="link" ariaDisabled="true" href='/'>
        <span className="mr-5">
            <i class="text-[#051c42] text-3xl fa-solid fa-trophy"></i>
        </span>
        <span class="text-2xl font-bold block">Longest Warranties Offer</span>
        </a>
    </div>
    <div className="w-full text-center snap-end shrink-0">
        <a className="flex items-center justify-center p-[17px 20px 17px] text-500 text-center" role="link" ariaDisabled="true" href='/'>
        <span className="mr-5">
            <i class="text-[#051c42] text-3xl fa-solid fa-credit-card"></i>
        </span>
        <span class="text-2xl font-bold block">Secure Payment</span>
        </a>
    </div>
    <div className="w-full text-center snap-end shrink-0">
        <a className="flex items-center justify-center p-[17px 20px 17px] text-500 text-center" role="link" ariaDisabled="true" href='/'>
        <span className="mr-5">
            <i class="text-[#051c42] text-3xl fa-solid fa-headset"></i>
        </span>
        <span class="text-2xl font-bold block">Online Support 24/7</span>
        </a>
    </div>
    </Carousel>
    </>
  )
}

export default CustomCarousel;