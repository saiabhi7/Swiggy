import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { CDN_URL } from "../constants/constants";
import ItemRestaurants from "./ItemRestaurants";

const ItemInfo = () => {
  const location = useLocation();
  console.log(location);
  const [itemInfo, setItemInfo] = useState();
  const [itemRestaurantsCards, setItemRestaurantsCards] = useState([]);

  useEffect(() => {
    loadItemRestaurants();
  }, []);

  const loadItemRestaurants = async () => {
    const urlParams = location.pathname.split("/")[2];
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.37240&lng=78.43780&collection=" +
        urlParams +
        "&sortBy=&filters=&type=rcv2&offset=0&page_type=null"
    );
    const jsonResponse = await data.json();

    const itemInfoCard = jsonResponse?.data?.cards?.filter((card) => {
      return (
        card?.card?.card["@type"] ===
        "type.googleapis.com/swiggy.gandalf.widgets.v2.CollectionMasthead"
      );
    })[0];
    setItemInfo(itemInfoCard);
    const itemRestaurantsCards = jsonResponse?.data?.cards?.filter((card) => {
      return (
        card?.card?.card["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.Restaurant"
      );
    });
    setItemRestaurantsCards(itemRestaurantsCards);

    console.log(itemInfo);
    console.log(itemRestaurantsCards);
  };

  return (
    <div className="w-9/12 bg-gray-100 m-auto px-2 py-1">
      <h1 className="text-2xl font-bold">{itemInfo?.card?.card?.title}</h1>
      <p className="text-sm font-thin">{itemInfo?.card?.card?.description}</p>

      <div className="font-bold text-lg py-3">
        {itemInfo?.card?.card?.count} to explore
      </div>
      <ItemRestaurants itemRestaurantsCards={itemRestaurantsCards} />
    </div>
  );
};

export default ItemInfo;
