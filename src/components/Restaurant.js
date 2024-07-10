import React from "react";
import { CDN_URL } from "../constants/constants";

const Restaurant = ({ resInfo }) => {
  console.log(resInfo?.promoted);
  return (
    <div
      key={resInfo.id}
      className="w-56 m-2 p-1 cursor-pointer border border-solid border-black bg-gray-50 rounded-xl hover:bg-gray-200"
    >
      <div className="p-3">
        <img
          className="w-full pb-2 rounded-xl"
          src={CDN_URL + resInfo.cloudinaryImageId}
          alt="Product Image"
        />
        <div className="font-bold my-2">{resInfo.name}</div>
        <p className="my-1 text-sm font-medium">
          {resInfo.cuisines.join(", ")}
        </p>
        <div className="my-1 text-sm">{resInfo.costForTwo}</div>
        <div className="my-1 text-sm">Delivery in {resInfo.sla.slaString}</div>
        <div className="flex flex-col justify-between">
          <div className="flex justify-between">
            <div className="text-sm">{resInfo.areaName}</div>
            <div className="rating text-sm bg-slate-300">
              ⭐{resInfo.avgRatingString}
            </div>
          </div>
          <button className="border border-black bg-green-200 p-1 mt-2 text-center rounded-lg hover:bg-orange-200">
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Restaurant;
