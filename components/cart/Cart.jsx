"use client";

import React, { useContext } from "react";

import CartContext from "@/context/CartContext";
import Link from "next/link";

const Cart = () => {
  const { addItemToCart, deleteItemFromCart, cart, saveOnCheckout } =
    useContext(CartContext);

  const increaseQty = (cartItem) => {
    const newQty = cartItem?.quantity + 1;
    const item = { ...cartItem, quantity: newQty };

    if (newQty > Number(cartItem.stock)) return;

    addItemToCart(item);
  };

  const decreaseQty = (cartItem) => {
    const newQty = cartItem?.quantity - 1;
    const item = { ...cartItem, quantity: newQty };

    if (newQty <= 0) return;

    addItemToCart(item);
  };

  const amountWithoutTax = cart?.cartItems?.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0
  );

  const taxAmount = (amountWithoutTax * 0.15).toFixed(2);

  const totalAmount = (Number(amountWithoutTax) + Number(taxAmount)).toFixed(2);

  const checkoutHandler = () => {
    const data = {
      amount: amountWithoutTax,
      tax: taxAmount,
      totalAmount,
    };

    saveOnCheckout(data);
  };

  return (
    <>
      <section className="mt-20 text-center lg:text-left lg:mt-0 md:py-5 md:py-7 lg:py-5 lg:py-7 bg-white">
        <div className="container max-w-screen-xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-2">
            {cart?.cartItems?.length || 0} Item{cart?.cartItems?.length>1?"s":""} in Cart
          </h2>
        </div>
      </section>

      {cart?.cartItems?.length > 0 && (
        <section className="py-10">
          <div className="container max-w-screen-xl mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-4">
              <main className="md:w-3/4">
                <article className="border border-gray-200 bg-white shadow-sm rounded mb-5 p-3 lg:p-5">
                  {cart?.cartItems?.map((cartItem) => (
                    <div>
                      <div className="flex flex-wrap lg:flex-row gap-5  mb-4">
                        <div className="w-full lg:w-2/5 xl:w-2/4">
                          <figure className="flex leading-5">
                            <div>
                              <div className="block w-16 h-16 rounded border border-gray-200 overflow-hidden">
                                <img src={cartItem.image} alt={cartItem.name} />
                              </div>
                            </div>
                            <figcaption className="ml-3">
                              <p>
                                <Link href={`/product/${cartItem.product}`}>
                                <span className="text-lg font-semibold hover:text-blue-600">
                                  {cartItem.name}
                                </span>
                                </Link>
                              </p>
                              <p className="mt-1 text-gray-600">
                                {" "}
                                Seller: {cartItem.seller}
                              </p>
                            </figcaption>
                          </figure>
                        </div>
                        <div className="h-8 w-16 md:h-10 md:w-20 lg:h-12 lg:w-28 rounded-3xl border-[#4169e1] border-[0.5px] border-solid flex items-center">
                            <button
                              data-action="decrement"
                              className="bg-white-300 ml-1 md:ml-2 md:text-black-500 lg:text-black-600 w-3/12 lg:ml-2 cursor-pointer outline-none"
                              onClick={() => decreaseQty(cartItem)}
                            >
                              <span className="text-md md:text-lg lg:text-2xl text-[#4169e1] font-semibold">
                                −
                              </span>
                            </button>
                            <input
                              type="number"
                              className="outline:none focus:outline-none text-[#4169e1] text-center flex items-center justify-center lg:ml-3 w-6/12 bg-white-300 font-semibold text-sm md:text-md lg:text-lg hover:text-black focus:text-black outline-none "
                              name="custom-input-number"
                              value={cartItem.quantity}
                              readOnly
                            />
                            <button
                              data-action="increment"
                              className="bg-white-300 md:mr-2 md:text-black-500 lg:text-black-600 w-3/12 mr-2 cursor-pointer "
                              onClick={() => increaseQty(cartItem)}
                            >
                              <span className="text-md md:text-lg text-[#4169e1] lg:text-2xl font-semibold">
                                +
                              </span>
                            </button>
                        </div>
                        <div>
                          <div className="leading-5">
                            <p className="text-lg font-semibold not-italic">
                              ${cartItem.price * cartItem.quantity.toFixed(2)}
                            </p>
                            <small className="text-gray-500">
                              {" "}
                              ${cartItem.price} / per item{" "}
                            </small>
                          </div>
                        </div>
                        <div className="flex-auto">
                          <div className="float-right">
                            <a
                              className="px-4 py-2 inline-block text-red-600 bg-white shadow-sm border border-gray-200 rounded-md hover:bg-gray-100 cursor-pointer"
                              onClick={() =>
                                deleteItemFromCart(cartItem?.product)
                              }
                            >
                              Remove
                            </a>
                          </div>
                        </div>
                      </div>

                      <hr className="my-4" />
                    </div>
                  ))}
                </article>
              </main>
              <aside className="md:w-1/4">
                <article className="border border-gray-200 bg-white shadow-sm rounded mb-5 p-3 lg:p-5">
                  <ul className="mb-5">
                    <li className="flex justify-between text-gray-600  mb-1">
                      <span>Base Price:</span>
                      <span className="text-green-500">${amountWithoutTax}</span>
                    </li>
                    <li className="flex justify-between text-gray-600  mb-1">
                      <span>Total Units:</span>
                      <span className="text-green-500">
                        {cart?.cartItems?.reduce(
                          (acc, item) => acc + item.quantity,
                          0
                        )}{" "}
                       
                      </span>
                    </li>
                    <li className="flex justify-between text-gray-600  mb-1">
                      <span>Tax:</span>
                      <span className="text-green-500">${taxAmount}</span>
                    </li>
                    <li className="text-lg font-bold border-t flex justify-between mt-3 pt-3">
                      <span>Total Price:</span>
                      <span className="text-green-500">${totalAmount}</span>
                    </li>
                  </ul>

                  <a
                    className="px-4 py-3 mb-2 inline-block text-lg w-full text-center font-medium text-white bg-green-600 border border-transparent rounded-md hover:bg-green-700 cursor-pointer"
                    onClick={checkoutHandler}
                  >
                    Continue
                  </a>

                  <Link
                    href="/"
                    className="px-4 py-3 inline-block text-lg w-full text-center font-medium text-green-600 bg-white shadow-sm border border-gray-200 rounded-md hover:bg-gray-100"
                  >
                    Back to shop
                  </Link>
                </article>
              </aside>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Cart;
