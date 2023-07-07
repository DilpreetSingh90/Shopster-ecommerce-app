import React from 'react'

const Categories = () => {
  return (
    <>
            <div className="mb-8 lg:mb-20 md:mb-10">
                <div className="mb-0 capitalize border-0 relative z-100 before:absolute before:bg-[#ff7e00] before:w-[50px] lg:before:w-[90px] before:h-[3px] before:z-20 before:inline-block before:bottom-[-8px]">
                    <h2 className="text-[rgba(58,58,58,1)] text-2xl md:text-3xl lg:text-3xl font-bold xl:leading-8">
                        <div>Product Categories</div>
                    </h2>
                </div>
            </div>   
                <div className="text-center mb-20">     
                    <div className="flex flex-wrap mx-[-5px] gap-2 md:gap-8 lg:gap-16 items-center justify-center">    
                        <div className="w-[calc(100% / 6)] px-[5px] hover:scale-105 hover:will-change-transform hover:transition-transform hover:duration-640 hover:ease hover:text-[#0a6cdc]">
                            <div className="mb-[10px] transition-all">
                                <div className="w-full align-middle">
                                    <a href="/filter?category=Smartphone" className="py-2.5 transition-all overflow-hidden relative text-[#232323] cursor-pointer">         
                                        <img data-srcset="//new-ella-demo.myshopify.com/cdn/shop/files/mobile-phones.png?v=10616357514144629263" alt="Smartphones" className="w-full h-full max-w-[170px] min-h-[15px] m-[0 auto] will-change-transform transition-[transform .64s ease]" srcset="//new-ella-demo.myshopify.com/cdn/shop/files/mobile-phones.png?v=10616357514144629263" />
     
                                    </a>    
                                </div>
                                <div className="w-full align-middle p-[8px 10px] text-lg inline-block ">
                                    <a className="ease duration-100 transition-all" href="/">
                                        <span>Smartphones</span>
                                    </a>
                                </div>                
                            </div>
                        </div>
                        <div className="w-[calc(100% / 6)] px-[5px] hover:scale-105 hover:will-change-transform hover:transition-transform hover:duration-640 hover:ease hover:text-[#0a6cdc]">
                            <div className="mb-[10px] transition-all">
                                <div className="w-full align-middle">
                                    <a href="/filter?category=Camera" className="py-2.5 transition-all overflow-hidden relative text-[#232323] cursor-pointer">         
                                        <img data-srcset="//new-ella-demo.myshopify.com/cdn/shop/files/cameras.png?v=10468174360605840515" alt="Cameras" className="w-full h-full max-w-[170px] min-h-[15px] m-[0 auto] will-change-transform transition-[transform .64s ease]" srcset="//new-ella-demo.myshopify.com/cdn/shop/files/cameras.png?v=10468174360605840515"/>
     
                                    </a>    
                                </div>
                                <div className="w-full align-middle p-[8px 10px] text-lg inline-block ">
                                    <a className="ease duration-100 transition-all" href="/">
                                        <span>Cameras</span>
                                    </a>
                                </div>                
                            </div>
                        </div>
                        <div className="w-[calc(100% / 6)] px-[5px] hover:scale-105 hover:will-change-transform hover:transition-transform hover:duration-640 hover:ease hover:text-[#0a6cdc]">
                            <div className="mb-[10px] transition-all">
                                <div className="w-full align-middle">
                                    <a href="/filter?category=Laptop" className="py-2.5 transition-all overflow-hidden relative text-[#232323] cursor-pointer">         
                                        <img data-srcset="//new-ella-demo.myshopify.com/cdn/shop/files/laptops-tablets.png?v=17546078654541140209" alt="Laptops &amp; Tablets" className="w-full h-full max-w-[170px] min-h-[15px] m-[0 auto] will-change-transform transition-[transform .64s ease]" srcset="//new-ella-demo.myshopify.com/cdn/shop/files/laptops-tablets.png?v=17546078654541140209" />
     
                                    </a>    
                                </div>
                                <div className="w-full align-middle p-[8px 10px] text-lg inline-block ">
                                    <a className="ease duration-100 transition-all" href="/">
                                        <span>Laptops</span>
                                    </a>
                                </div>                
                            </div>
                        </div>
                        <div className="w-[calc(100% / 6)] px-[5px] hover:scale-105 hover:will-change-transform hover:transition-transform hover:duration-640 hover:ease hover:text-[#0a6cdc]">
                            <div className="mb-[10px] transition-all">
                                <div className="w-full align-middle">
                                    <a href="/filter?category=Accessories" className="py-2.5 transition-all overflow-hidden relative text-[#232323] cursor-pointer">         
                                        <img data-srcset="//new-ella-demo.myshopify.com/cdn/shop/files/pcs-accessories.png?v=7913320403362682840" alt="PCs &amp; Accessories" className="w-full h-full max-w-[170px] min-h-[15px] m-[0 auto] will-change-transform transition-[transform .64s ease]" srcset="//new-ella-demo.myshopify.com/cdn/shop/files/pcs-accessories.png?v=7913320403362682840" />
     
                                    </a>    
                                </div>
                                <div className="w-full align-middle p-[8px 10px] text-lg inline-block ">
                                    <a className="ease duration-100 transition-all" href="/">
                                        <span>PC Accessories</span>
                                    </a>
                                </div>                
                            </div>
                        </div>
                        <div className="w-[calc(100% / 6)] px-[5px] hover:scale-105 hover:will-change-transform hover:transition-transform hover:duration-640 hover:ease hover:text-[#0a6cdc]">
                            <div className="mb-[10px] transition-all">
                                <div className="w-full align-middle">
                                    <a href="//filter?category=Headphone" className="py-2.5 transition-all overflow-hidden relative text-[#232323] cursor-pointer">         
                                        <img data-srcset="//new-ella-demo.myshopify.com/cdn/shop/files/accessories.png?v=16090558546215869367" alt="Accessories" className="w-full h-full max-w-[170px] min-h-[15px] m-[0 auto] will-change-transform transition-[transform .64s ease]" srcset="//new-ella-demo.myshopify.com/cdn/shop/files/accessories.png?v=16090558546215869367" />
     
                                    </a>    
                                </div>
                                <div className="w-full align-middle p-[8px 10px] text-lg inline-block ">
                                    <a className="ease duration-100 transition-all" href="/">
                                        <span>Headphones</span>
                                    </a>
                                </div>                
                            </div>
                        </div>
                        <div className="w-[calc(100% / 6)] px-[5px] hover:scale-105 hover:will-change-transform hover:transition-transform hover:duration-640 hover:ease hover:text-[#0a6cdc]">
                            <div className="mb-[10px] transition-all">
                                <div className="w-full align-middle">
                                    <a href="/filter?category=Television" className="py-2.5 transition-all overflow-hidden relative text-[#232323] cursor-pointer">         
                                        <img data-srcset="//new-ella-demo.myshopify.com/cdn/shop/files/televisions.png?v=792225267698738137" alt="Televisions" className="w-full h-full max-w-[170px] min-h-[15px] m-[0 auto] " srcset="//new-ella-demo.myshopify.com/cdn/shop/files/televisions.png?v=792225267698738137" />
     
                                    </a>    
                                </div>
                                <div className="w-full align-middle p-[8px 10px] text-lg inline-block ">
                                    <a className="ease duration-100 transition-all" href="/">
                                        <span>Televisions</span>
                                    </a>
                                </div>                
                            </div>
                        </div>
                    </div>
                </div>
    </>
  )
}

export default Categories