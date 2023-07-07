import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e] text-white">
        <div className="mx-auto mx-auto max-w-[1870px] px-4 md:px-6 lg:px-8 2xl:px-20">
            <div className="grid grid-cols-12 md:grid-cols-10 lg:grid-cols-12 gap-6 sm:gap-10 lg:gap-11 xl:gap-7 pb-[50px] pt-10 md:pt-16">
                <div className="col-span-12 ml-20 mr-20 md:ml-10 md:mr-6 md:col-span-4 lg:col-span-6 lg:ml-40">
                    <div className="text-sm max-w-[350px] mx-auto sm:ms-0 pb-2">
                        <a className="inline-flex focus:outline-none mb-3 lg:mb-6 md:ps-0 lg:mx-0" href="/">
                            <span className="bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] via-[#B38728] via-[#FBF5B7] to-[#AA771C] text-transparent inline-block bg-clip-text font-bold font-[Helvetica] text-2xl md:text-3xl lg:text-4xl">SHOPSTER</span>
                        </a>
                        <div className="bg-[url(/images/icon-phone.png)] bg-no-repeat min-h-[60px] mb-0 pl-16 xl:pl-20 md:text-[16px] lg:text-lg">
                            <p className="ml-4 text-white mb-2 lg:mb-0 lg:ml-2">Hotline Free 24/24:</p>
                            <p className="ml-4 text-white text-md duration-200 hover:text-white lg:ml-2">(XXXX)-XXX-XXXX</p>
                        </div>
                    </div>
                </div>
                <div className="pb-3.5 sm:pb-0 ml-6 col-span-6 md:col-span-3 lg:col-span-3">
                    <h3 className="text-[rgba(255,126,0,1)] mb-4 sm:mb-5 lg:mb-6 pb-0.5 md:text-xl lg:text-[24px] lg:leading-7 font-medium">Information</h3>
                    <ul className="text-sm flex flex-col space-y-3 md:text-lg lg:text-xl">
                        <li className="flex items-baseline">
                            <a className="duration-200 hover:text-skin-primary" href="/about">About us</a>
                        </li>
                        <li className="flex items-baseline">
                            <a className="duration-200 hover:text-skin-primary" href="/contact">Contact us</a>
                        </li>
                        <li className="flex items-baseline">
                            <a className="duration-200 hover:text-skin-primary" href="/privacy">Privacy Policy</a>
                        </li>
                        <li className="flex items-baseline">
                            <a className="duration-200 hover:text-skin-primary" href="/tc">Terms & Condition</a>
                        </li>
                        <li className="flex items-baseline">
                            <a className="duration-200 hover:text-skin-primary" href="/faq">FAQ</a>
                        </li>
                    </ul>
                </div>
                <div className="pb-3.5 mr-2 sm:pb-0 col-span-6 md:col-span-3 lg:col-span-3">
                    <h3 className="text-[rgba(255,126,0,1)] mb-4 sm:mb-5 lg:mb-6 pb-0.5 md:text-xl lg:text-[24px] lg:leading-7 font-medium">Categories</h3>
                    <ul className="text-sm lg:text-14px flex flex-col space-y-3 md:text-lg lg:text-xl">
                        <li className="flex items-baseline">
                            <a className="duration-200 hover:text-skin-primary" href="/filter?category=Smartphone">Smartphones</a>
                        </li>
                        <li className="flex items-baseline">
                            <a className="duration-200 hover:text-skin-primary" href="/filter?category=Camera">Cameras</a>
                        </li>
                        <li className="flex items-baseline">
                            <a className="duration-200 hover:text-skin-primary" href="/filter?category=Laptop">Laptops</a>
                        </li>
                        <li className="flex items-baseline">
                            <a className="duration-200 hover:text-skin-primary" href="/filter?category=Accessories">PC Accessories</a>
                        </li>
                        <li className="flex items-baseline">
                            <a className="duration-200 hover:text-skin-primary" href="/filter?category=Headphone">Headphones</a>
                        </li>
                        <li className="flex items-baseline">
                            <a className="duration-200 hover:text-skin-primary" href="/filter?category=Television">Televisions</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="border-t border-[rbga(255,255,255,0.1)]  pt-5 pb-16 sm:pb-20 md:pb-5 mb-2 sm:mb-0">
            <div className="mx-auto mx-auto max-w-[1870px] px-4 md:px-6 lg:px-8 2xl:px-20">
                <div className="flex justify-evenly text-center">
                    <p className="text-gray-400 text-sm leading-7 lg:leading-[27px]">©&nbsp;Copyright 2023&nbsp;
                        <a className="text-[rgba(255,126,0,1)] transition-colors duration-200 ease-in-out hover:text-[rgb(255,255,255)]" href="#">Shopster Inc.</a>
                            &nbsp; All rights reserved
                    </p>
                    <ul className="">
                        <li className="inline-block vertical-align-top m-[5px 0 5px 15px]">
                            <svg className="w-auto h-8 stroke-transparent inline-block vertical-align-middle" viewBox="0 0 38 24" xmlns="http://www.w3.org/2000/svg" role="img" width="38" height="24">
                                <title id="pi-visa">Visa</title>
                                <path opacity=".07" d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z"></path>
                                <path fill="#fff" d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32"></path>
                                <path d="M28.3 10.1H28c-.4 1-.7 1.5-1 3h1.9c-.3-1.5-.3-2.2-.6-3zm2.9 5.9h-1.7c-.1 0-.1 0-.2-.1l-.2-.9-.1-.2h-2.4c-.1 0-.2 0-.2.2l-.3.9c0 .1-.1.1-.1.1h-2.1l.2-.5L27 8.7c0-.5.3-.7.8-.7h1.5c.1 0 .2 0 .2.2l1.4 6.5c.1.4.2.7.2 1.1.1.1.1.1.1.2zm-13.4-.3l.4-1.8c.1 0 .2.1.2.1.7.3 1.4.5 2.1.4.2 0 .5-.1.7-.2.5-.2.5-.7.1-1.1-.2-.2-.5-.3-.8-.5-.4-.2-.8-.4-1.1-.7-1.2-1-.8-2.4-.1-3.1.6-.4.9-.8 1.7-.8 1.2 0 2.5 0 3.1.2h.1c-.1.6-.2 1.1-.4 1.7-.5-.2-1-.4-1.5-.4-.3 0-.6 0-.9.1-.2 0-.3.1-.4.2-.2.2-.2.5 0 .7l.5.4c.4.2.8.4 1.1.6.5.3 1 .8 1.1 1.4.2.9-.1 1.7-.9 2.3-.5.4-.7.6-1.4.6-1.4 0-2.5.1-3.4-.2-.1.2-.1.2-.2.1zm-3.5.3c.1-.7.1-.7.2-1 .5-2.2 1-4.5 1.4-6.7.1-.2.1-.3.3-.3H18c-.2 1.2-.4 2.1-.7 3.2-.3 1.5-.6 3-1 4.5 0 .2-.1.2-.3.2M5 8.2c0-.1.2-.2.3-.2h3.4c.5 0 .9.3 1 .8l.9 4.4c0 .1 0 .1.1.2 0-.1.1-.1.1-.1l2.1-5.1c-.1-.1 0-.2.1-.2h2.1c0 .1 0 .1-.1.2l-3.1 7.3c-.1.2-.1.3-.2.4-.1.1-.3 0-.5 0H9.7c-.1 0-.2 0-.2-.2L7.9 9.5c-.2-.2-.5-.5-.9-.6-.6-.3-1.7-.5-1.9-.5L5 8.2z" fill="#142688"></path>
                            </svg>
                        </li>
                        <li className="inline-block vertical-align-top m-[5px 0 5px 15px]">
                            <svg className="w-auto h-8 stroke-transparent inline-block vertical-align-middle" viewBox="0 0 38 24" xmlns="http://www.w3.org/2000/svg" role="img" width="38" height="24">
                                <title id="pi-master">Mastercard</title>
                                <path opacity=".07" d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z"></path>
                                <path fill="#fff" d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32"></path>
                                <circle fill="#EB001B" cx="15" cy="12" r="7"></circle><circle fill="#F79E1B" cx="23" cy="12" r="7"></circle>
                                <path fill="#FF5F00" d="M22 12c0-2.4-1.2-4.5-3-5.7-1.8 1.3-3 3.4-3 5.7s1.2 4.5 3 5.7c1.8-1.2 3-3.3 3-5.7z"></path>
                            </svg>
                        </li>
                        <li className="inline-block vertical-align-top m-[5px 0 5px 15px]">
                            <svg className="w-auto h-8 stroke-transparent inline-block vertical-align-middle" viewBox="0 0 38 24" xmlns="http://www.w3.org/2000/svg" width="38" height="24" role="img">
                                <title id="pi-maestro">Maestro</title>
                                <path opacity=".07" d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z"></path>
                                <path fill="#fff" d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32"></path>
                                <circle fill="#EB001B" cx="15" cy="12" r="7"></circle>
                                <circle fill="#00A2E5" cx="23" cy="12" r="7"></circle>
                                <path fill="#7375CF" d="M22 12c0-2.4-1.2-4.5-3-5.7-1.8 1.3-3 3.4-3 5.7s1.2 4.5 3 5.7c1.8-1.2 3-3.3 3-5.7z"></path>
                            </svg>
                        </li>
                        <li className="inline-block vertical-align-top m-[5px 0 5px 15px]">
                            <svg className="w-auto h-8 stroke-transparent inline-block vertical-align-middle" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 38 24" width="38" height="24">
                                <title id="pi-american_express">American Express</title>
                                <g fill="none">
                                    <path fill="#000" d="M35,0 L3,0 C1.3,0 0,1.3 0,3 L0,21 C0,22.7 1.4,24 3,24 L35,24 C36.7,24 38,22.7 38,21 L38,3 C38,1.3 36.6,0 35,0 Z" opacity=".07"></path>
                                    <path fill="#006FCF" d="M35,1 C36.1,1 37,1.9 37,3 L37,21 C37,22.1 36.1,23 35,23 L3,23 C1.9,23 1,22.1 1,21 L1,3 C1,1.9 1.9,1 3,1 L35,1"></path>
                                    <path fill="#FFF" d="M8.971,10.268 L9.745,12.144 L8.203,12.144 L8.971,10.268 Z M25.046,10.346 L22.069,10.346 L22.069,11.173 L24.998,11.173 L24.998,12.412 L22.075,12.412 L22.075,13.334 L25.052,13.334 L25.052,14.073 L27.129,11.828 L25.052,9.488 L25.046,10.346 L25.046,10.346 Z M10.983,8.006 L14.978,8.006 L15.865,9.941 L16.687,8 L27.057,8 L28.135,9.19 L29.25,8 L34.013,8 L30.494,11.852 L33.977,15.68 L29.143,15.68 L28.065,14.49 L26.94,15.68 L10.03,15.68 L9.536,14.49 L8.406,14.49 L7.911,15.68 L4,15.68 L7.286,8 L10.716,8 L10.983,8.006 Z M19.646,9.084 L17.407,9.084 L15.907,12.62 L14.282,9.084 L12.06,9.084 L12.06,13.894 L10,9.084 L8.007,9.084 L5.625,14.596 L7.18,14.596 L7.674,13.406 L10.27,13.406 L10.764,14.596 L13.484,14.596 L13.484,10.661 L15.235,14.602 L16.425,14.602 L18.165,10.673 L18.165,14.603 L19.623,14.603 L19.647,9.083 L19.646,9.084 Z M28.986,11.852 L31.517,9.084 L29.695,9.084 L28.094,10.81 L26.546,9.084 L20.652,9.084 L20.652,14.602 L26.462,14.602 L28.076,12.864 L29.624,14.602 L31.499,14.602 L28.987,11.852 L28.986,11.852 Z"></path>
                                </g>
                            </svg>
                        </li>
                        <li className="inline-block vertical-align-top m-[5px 0 5px 15px]">
                            <svg className="w-auto h-8 stroke-transparent inline-block vertical-align-middle" version="1.1" xmlns="http://www.w3.org/2000/svg" role="img" x="0" y="0" width="38" height="24" viewBox="0 0 165.521 105.965">
                                <title id="pi-apple_pay">Apple Pay</title>
                                <path fill="#000" d="M150.698 0H14.823c-.566 0-1.133 0-1.698.003-.477.004-.953.009-1.43.022-1.039.028-2.087.09-3.113.274a10.51 10.51 0 0 0-2.958.975 9.932 9.932 0 0 0-4.35 4.35 10.463 10.463 0 0 0-.975 2.96C.113 9.611.052 10.658.024 11.696a70.22 70.22 0 0 0-.022 1.43C0 13.69 0 14.256 0 14.823v76.318c0 .567 0 1.132.002 1.699.003.476.009.953.022 1.43.028 1.036.09 2.084.275 3.11a10.46 10.46 0 0 0 .974 2.96 9.897 9.897 0 0 0 1.83 2.52 9.874 9.874 0 0 0 2.52 1.83c.947.483 1.917.79 2.96.977 1.025.183 2.073.245 3.112.273.477.011.953.017 1.43.02.565.004 1.132.004 1.698.004h135.875c.565 0 1.132 0 1.697-.004.476-.002.952-.009 1.431-.02 1.037-.028 2.085-.09 3.113-.273a10.478 10.478 0 0 0 2.958-.977 9.955 9.955 0 0 0 4.35-4.35c.483-.947.789-1.917.974-2.96.186-1.026.246-2.074.274-3.11.013-.477.02-.954.022-1.43.004-.567.004-1.132.004-1.699V14.824c0-.567 0-1.133-.004-1.699a63.067 63.067 0 0 0-.022-1.429c-.028-1.038-.088-2.085-.274-3.112a10.4 10.4 0 0 0-.974-2.96 9.94 9.94 0 0 0-4.35-4.35A10.52 10.52 0 0 0 156.939.3c-1.028-.185-2.076-.246-3.113-.274a71.417 71.417 0 0 0-1.431-.022C151.83 0 151.263 0 150.698 0z"></path>
                                <path fill="#FFF" d="M150.698 3.532l1.672.003c.452.003.905.008 1.36.02.793.022 1.719.065 2.583.22.75.135 1.38.34 1.984.648a6.392 6.392 0 0 1 2.804 2.807c.306.6.51 1.226.645 1.983.154.854.197 1.783.218 2.58.013.45.019.9.02 1.36.005.557.005 1.113.005 1.671v76.318c0 .558 0 1.114-.004 1.682-.002.45-.008.9-.02 1.35-.022.796-.065 1.725-.221 2.589a6.855 6.855 0 0 1-.645 1.975 6.397 6.397 0 0 1-2.808 2.807c-.6.306-1.228.511-1.971.645-.881.157-1.847.2-2.574.22-.457.01-.912.017-1.379.019-.555.004-1.113.004-1.669.004H14.801c-.55 0-1.1 0-1.66-.004a74.993 74.993 0 0 1-1.35-.018c-.744-.02-1.71-.064-2.584-.22a6.938 6.938 0 0 1-1.986-.65 6.337 6.337 0 0 1-1.622-1.18 6.355 6.355 0 0 1-1.178-1.623 6.935 6.935 0 0 1-.646-1.985c-.156-.863-.2-1.788-.22-2.578a66.088 66.088 0 0 1-.02-1.355l-.003-1.327V14.474l.002-1.325a66.7 66.7 0 0 1 .02-1.357c.022-.792.065-1.717.222-2.587a6.924 6.924 0 0 1 .646-1.981c.304-.598.7-1.144 1.18-1.623a6.386 6.386 0 0 1 1.624-1.18 6.96 6.96 0 0 1 1.98-.646c.865-.155 1.792-.198 2.586-.22.452-.012.905-.017 1.354-.02l1.677-.003h135.875"></path>
                                <g>
                                    <g>
                                        <path fill="#000" d="M43.508 35.77c1.404-1.755 2.356-4.112 2.105-6.52-2.054.102-4.56 1.355-6.012 3.112-1.303 1.504-2.456 3.959-2.156 6.266 2.306.2 4.61-1.152 6.063-2.858"></path>
                                        <path fill="#000" d="M45.587 39.079c-3.35-.2-6.196 1.9-7.795 1.9-1.6 0-4.049-1.8-6.698-1.751-3.447.05-6.645 2-8.395 5.1-3.598 6.2-.95 15.4 2.55 20.45 1.699 2.5 3.747 5.25 6.445 5.151 2.55-.1 3.549-1.65 6.647-1.65 3.097 0 3.997 1.65 6.696 1.6 2.798-.05 4.548-2.5 6.247-5 1.95-2.85 2.747-5.6 2.797-5.75-.05-.05-5.396-2.101-5.446-8.251-.05-5.15 4.198-7.6 4.398-7.751-2.399-3.548-6.147-3.948-7.447-4.048"></path>
                                    </g>
                                    <g>
                                        <path fill="#000" d="M78.973 32.11c7.278 0 12.347 5.017 12.347 12.321 0 7.33-5.173 12.373-12.529 12.373h-8.058V69.62h-5.822V32.11h14.062zm-8.24 19.807h6.68c5.07 0 7.954-2.729 7.954-7.46 0-4.73-2.885-7.434-7.928-7.434h-6.706v14.894z"></path>
                                        <path fill="#000" d="M92.764 61.847c0-4.809 3.665-7.564 10.423-7.98l7.252-.442v-2.08c0-3.04-2.001-4.704-5.562-4.704-2.938 0-5.07 1.507-5.51 3.82h-5.252c.157-4.86 4.731-8.395 10.918-8.395 6.654 0 10.995 3.483 10.995 8.89v18.663h-5.38v-4.497h-.13c-1.534 2.937-4.914 4.782-8.579 4.782-5.406 0-9.175-3.222-9.175-8.057zm17.675-2.417v-2.106l-6.472.416c-3.64.234-5.536 1.585-5.536 3.95 0 2.288 1.975 3.77 5.068 3.77 3.95 0 6.94-2.522 6.94-6.03z"></path>
                                        <path fill="#000" d="M120.975 79.652v-4.496c.364.051 1.247.103 1.715.103 2.573 0 4.029-1.09 4.913-3.899l.52-1.663-9.852-27.293h6.082l6.863 22.146h.13l6.862-22.146h5.927l-10.216 28.67c-2.34 6.577-5.017 8.735-10.683 8.735-.442 0-1.872-.052-2.261-.157z"></path>
                                    </g>
                                </g>
                        </svg>
                    </li>
                </ul>         
            </div>
        </div>
    </div>
</footer>
  )
}

export default Footer;