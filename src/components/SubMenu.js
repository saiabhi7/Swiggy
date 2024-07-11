import React from "react";
import { CDN_URL } from "../constants/constants";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../utils/redux-toolkit/cartSlice";

const SubMenu = ({ itemCards }) => {
  const dispatch = useDispatch();

  const handleAddItemToCart = (item) => {
    dispatch(addItemToCart(item));
  };

  return (
    <div>
      {itemCards.map((itemCard) => {
        const info = itemCard?.card?.info;
        return (
          <div
            data-testid="items"
            key={info.id}
            className="border-t-2 p-2 m-2 flex justify-between relative"
          >
            <div className="">
              <div className="text-sm font-bold py-1">{info?.name}</div>
              <hr />
              <div className="text-xs py-1">{info?.description}</div>
              <hr />
              <div className="text-xs py-1">
                Rs.{" "}
                {info?.defaultPrice ? info?.defaultPrice : info?.price / 100}
              </div>
            </div>

            <div className="relative">
              <div className="w-40">
                <button
                  onClick={() => handleAddItemToCart(info)}
                  className="absolute left-[40%] font-semibold bottom-0 border border-black rounded-sm text-sm px-0.5 bg-blue-300 hover:bg-cyan-300"
                >
                  Add+
                </button>
                <img src={CDN_URL + info?.imageId} alt="Item Image" />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SubMenu;
