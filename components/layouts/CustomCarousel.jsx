'use client';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useMediaQuery } from 'react-responsive'

const CustomCarousel = () => {

  const isMobile = useMediaQuery({ minWidth:0,maxWidth:1000});
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
  return (
    <>
    <Carousel
      additionalTransfrom={0}
      ssr={true}
      arrows={isMobile?false:true}
      autoPlaySpeed={3000}
      autoPlay={true}
      centerMode={false}
      className=""
      containerClass=""
      dotListClass=""
      draggable
      focusOnSelect
      infinite
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
      slidesToSlide={1}
      swipeable
>
  <img
    src={isMobile?"/images/ecommerce1mob.jpg":"/images/ecommerce2.jpg"}
    className="block m-auto mt-20 w-[100vw] h-[40vh] md:mt-16 lg:m-auto md:h-[50vh] lg:h-[65vh]"
  />
  <img
    src={isMobile?"/images/ecommerce3mob.jpg":"/images/ecommerce3.jpg"}
    className="block m-auto mt-20 w-[100vw] h-[40vh] md:mt-16 lg:m-auto md:h-[50vh] lg:h-[65vh]"
  />
  <img
    src={isMobile?"/images/ecommerce2mob.jpg":"/images/ecommerce2.jpeg"}
    className="block m-auto mt-20 w-[100vw] h-[40vh]  md:mt-16 lg:m-auto md:h-[50vh] lg:h-[65vh]"
  />
  <img
    src={isMobile?"/images/ecommerce4mob.jpg":"/images/ecommerce4.jpg"}
    className="block m-auto mt-20 w-[100vw] h-[40vh] md:mt-16 lg:m-auto md:h-[50vh] lg:h-[65vh]"
  />
    </Carousel>
    </>
  )
}

export default CustomCarousel;