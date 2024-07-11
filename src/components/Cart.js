import React, { useState } from "react";
import { useSelector } from "react-redux";
import { CDN_URL } from "../constants/constants";

const Cart = () => {
  const cart = useSelector((store) => store.cart);

  return (
    <div className="w-3/4 m-auto flex gap-3">
      <div className="p-2 w-3/4 bg-slate-100">
        <h1 className="font-bold text-2xl border-b-2 border-black">Cart</h1>
        {cart.cartItems.map((cartItem) => {
          return (
            <div
              data-testid="cart-items"
              key={cartItem.id}
              className="flex justify-between p-2 m-2 bg-slate-200 shadow-lg rounded-lg"
            >
              <div className="flex flex-col justify-between">
                <h2 className="font-bold">{cartItem.name}</h2>
                <div className="text-sm">{cartItem.category}</div>
                <div className="text-sm">
                  {cartItem.itemAttribute?.vegClassifier}
                </div>
                <div className="text-sm">
                  Rs.{" "}
                  {(cartItem.defaultPrice
                    ? cartItem.defaultPrice
                    : cartItem.price) / 100}
                </div>
              </div>

              <img
                className="w-32 rounded-lg"
                src={CDN_URL + cartItem.imageId}
                alt="Image"
              />
            </div>
          );
        })}
      </div>
      <div className="w-1/3 p-2 bg-slate-100 flex flex-col justify-between">
        <div>
          <h1 className="font-bold text-2xl border-b-2 border-black">Price</h1>
          <div className="px-2 flex justify-between text-sm">
            <div className="font-bold">Items Price:</div>
            <div>Rs. {Math.floor(cart.cartItemsTotal)}</div>
          </div>
          <div className="px-2 flex justify-between text-sm">
            <div className="font-bold">Taxes:</div>
            <div>Rs. {Math.floor(cart.taxTotal)}</div>
          </div>
          <hr></hr>
          <hr></hr>
          <div className="px-2 flex justify-between text-sm">
            <div className="font-bold">Final Price:</div>
            <div>Rs. {Math.floor(cart.finalAmount)}</div>
          </div>
        </div>

        <button className="bg-amber-300 rounded font-semibold hover:scale-110 ease-in-out duration-500">
          Place Order
        </button>
      </div>
    </div>
  );
};

export default Cart;
