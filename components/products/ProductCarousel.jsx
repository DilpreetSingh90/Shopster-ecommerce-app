"use client";

import Link from "next/link";
import React,{useContext,useState} from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CartContext from "@/context/CartContext";
import StarRatings from "react-star-ratings";
import Image from "next/image";
import ProductModal from "./ProductModal";


const ProductCarousel = ({ title,data }) => {

  const { addItemToCart } = useContext(CartContext);
  const [hovering,setHovering] = useState(false);
  const [productId,setProductId] = useState('');
  const [showModal,setShowModal] = useState(false);
  const [product,setProduct] = useState(null);

  const handleMouseOver = (id) => {
    setProductId(id);
    setHovering(true);
  };

  const handleMouseOut = (e) => {
    setProductId('');
    setHovering(false);
  };

  const handleProduct = (product) =>{
    setProduct(product);
    setShowModal(true);
  }
  
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1000 },
      items: 6,
      slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 980, min: 540 },
      items: 3,
      slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 500, min: 0 },
      items: 2,
      slidesToSlide: 1 // optional, default to 1.
    }
};

  const CustomLeftArrow = ({ onClick, ...rest }) => {
    return (
    <button type="button" className="absolute top-[45%] left-[-3px] cursor-pointer p-[14px] translate-y-[-50%] w-12 h-12" name="previous" onClick={onClick}>
        <svg ariaHidden="true" focusable="false" role="presentation" className="inline-block vertical-align-middle fill-[#051c42] transition-all w-full h-full stroke-transparent rotate-[90deg] translate-[-0.15rem] ml-[-2rem]" viewBox="0 0 10 6">
            <path fillRule="evenodd" clipRule="evenodd" d="M9.354.646a.5.5 0 00-.708 0L5 4.293 1.354.646a.5.5 0 00-.708.708l4 4a.5.5 0 00.708 0l4-4a.5.5 0 000-.708z"></path>
        </svg>
    </button>
    );
  };

  const CustomRightArrow = ({ onClick, ...rest }) => {
    return (
    <button type="button" className="absolute top-[45%] right-[-17px] cursor-pointer p-[14px] translate-y-[-50%] w-12 h-12" name="next" onClick={onClick}>
        <svg aria-hidden="true" focusable="false" role="presentation" className="inline-block vertical-align-middle fill-[#051c42] transition-all w-full h-full stroke-transparent rotate-[-90deg] translate-[0.15rem] mr-[-0.2rem]" viewBox="0 0 10 6">
            <path fillRule="evenodd" clipRule="evenodd" d="M9.354.646a.5.5 0 00-.708 0L5 4.293 1.354.646a.5.5 0 00-.708.708l4 4a.5.5 0 00.708 0l4-4a.5.5 0 000-.708z"></path>
        </svg>
    </button>
    );
  };

  const addToCartHandler = (product) => {
    addItemToCart({
      product: product._id,
      name: product.name,
      price: product.price,
      image: product.images[0].url,
      stock: product.stock,
      seller: product.seller,
    });
  };

  return (
  <>
    {showModal && <ProductModal product={product} setShowModal={setShowModal}/>}
    <div className="mb-0">
      <div className="mb-0 capitalize border-0 relative z-100 before:absolute before:bg-[#ff7e00] before:w-[50px] lg:before:w-[80px] before:h-[3px] before:z-20 before:inline-block before:bottom-[-8px]">
        <h2 className="text-[rgba(58,58,58,1)] text-2xl md:text-3xl lg:text-3xl font-bold xl:leading-8">
          <div>{title}</div>
        </h2>
      </div>
    </div>
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
      infinite
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
        {data?.products.map((product)=>(
        <div className="md:pt-2 lg:pt-5 w-full h-auto shrink-0 relative transition-transform" onMouseOver={()=>handleMouseOver(product?._id)} onMouseOut={()=>handleMouseOut()}>
          <article className="flex flex-col relative px-2 sm:px-3 h-full " title={product.name}>
            <div className="relative shrink-0  mt-4">
              <div className="transition-all ease-in-out duration-200 overflow-hidden max-w-[230px] min-h-[250px] max-h-[250px] mx-auto relative flex items-center justify-center">
                <div className="block relative m-0">
                  <div className=""></div>
                    <img alt={product.name} src={product.images[0]?product.images[0].url:"/images/default_product.png"} className="object-cover m-auto min-w-full max-w-full min-h-full max-h-full bg-[rgba(243,246,250,1)] align-middle" />
                  </div>
                </div>
                {hovering && product?._id === productId &&
                  <div className="w-full h-full absolute top-0 pt-2.5 md:pt-3.5 z-10 flex items-center justify-center">
                    <button className="absolute z-50 top-[40%] left-[50%] translate-x-[-50%] w-[50px] h-[50px] rounded-[50%] leading-[48px] text-center shadow-[0 3px 6px 1px rgba(0,0,0,.2)] transition-all ease-in-out duration-200 px-4 py-2 bg-[rgba(255,255,255,1)] cursor-pointed hover:bg-[rgba(255,126,0,1)] hover:text-[rgba(255,255,255,1)]"
                    onClick={()=>handleProduct(product)}>
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" opacity="1">
                        <path d="M19.0144 17.9256L13.759 12.6703C14.777 11.4129 15.3899 9.81507 15.3899 8.07486C15.3899 4.04156 12.1081 0.759766 8.07483 0.759766C4.04152 0.759766 0.759766 4.04152 0.759766 8.07483C0.759766 12.1081 4.04156 15.3899 8.07486 15.3899C9.81507 15.3899 11.4129 14.777 12.6703 13.759L17.9256 19.0144C18.0757 19.1645 18.2728 19.24 18.47 19.24C18.6671 19.24 18.8642 19.1645 19.0144 19.0144C19.3155 18.7133 19.3155 18.2266 19.0144 17.9256ZM8.07486 13.8499C4.89009 13.8499 2.2998 11.2596 2.2998 8.07483C2.2998 4.89006 4.89009 2.29976 8.07486 2.29976C11.2596 2.29976 13.8499 4.89006 13.8499 8.07483C13.8499 11.2596 11.2596 13.8499 8.07486 13.8499Z" fill="currentColor"></path>
                      </svg>
                    </button>
                  </div>}
                </div>
                <div className="flex flex-col items-center mb-2 h-full overflow-hidden text-center relative">
                  <Link className="text-[rgba(58,58,58,1)] text-lg leading-5 line-clamp-2 mb-2 hover:text-[rgba(255,126,0,1)]" href={`/product/${product._id}`}>{product.name}</Link>
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
                  <div className="space-s-2 mb-4 lg:mb-4">
                    <span className="inline-block font-semibold text-[15px] lg:text-base text-[rgba(255,126,0,1)]">${product?.price}</span>
                  </div>
                  {hovering && product?._id === productId &&
                  <div className="inline-block w-full bottom-[-40px] left-0 z-120 transition ease-in-out duration-300 ">
                    <button className="min-w-[150px] px-4 py-2 bg-[rgba(255,126,0,1)] text-[rgba(255,255,255,1)] text-[13px] items-center justify-center focus:outline-none focus-visible:outline-none rounded-full"
                     onClick={()=>addToCartHandler(product)}>
                      Add to Cart
                     </button>
                  </div>}
                </div>
              </article>
            </div>
            ))}
          </Carousel>
        </>
  );
};

export default ProductCarousel;