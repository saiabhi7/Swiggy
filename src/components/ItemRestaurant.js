import React from "react";
import { CDN_URL } from "../constants/constants";

const ItemRestaurant = ({ card }) => {
  const {
    cloudinaryImageId,
    name,
    avgRatingString,
    costForTwo,
    cuisines,
    areaName,
  } = card?.card?.card?.info;
  return (
    <div className="p-2 rounded-lg cursor-pointer hover:scale-110 ease-in-out duration-500">
      <img
        className="w-full h-40 rounded-lg"
        src={CDN_URL + cloudinaryImageId}
      />
      <div className="font-bold">{name}</div>
      <div className="flex flex-row justify-between font-bold text-sm">
        <div className="">⭐{avgRatingString}</div>
        <div className="">{costForTwo}</div>
      </div>
      <div className="text-sm font-thin">{cuisines.join(", ")}</div>
      <div className="text-sm font-thin">{areaName}</div>
    </div>
  );
};

export const withPromoted = (ItemRestaurant) => {
  return (props) => {
    return (
      <div className="relative w-1/4">
        <div className="absolute bg-black text-sm text-white rounded-md p-1 top-2 z-10">
          Promoted
        </div>
        <ItemRestaurant {...props} />
      </div>
    );
  };
};

export default ItemRestaurant;
