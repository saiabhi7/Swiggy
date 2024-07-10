import React from "react";
import Restaurant from "./Restaurant";
import { Link } from "react-router-dom";

const RestaurantList = ({ header, restaurants }) => {
  return (
    <div className="bg-gray-100 m-2">
      <div className="font-bold pl-1">
        <h1>{header}</h1>
      </div>
      <div className="flex flex-wrap justify-between flex-row">
        {restaurants.map((res) => {
          const resInfo = res?.info;
          return (
            <Link to={`/restaurants/${resInfo.id}`}>
              <Restaurant key={resInfo.id} resInfo={resInfo} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default RestaurantList;
