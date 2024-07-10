import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { RESTAURANT_DATA } from "../constants/constants";
import Menu from "./Menu";

const RestaurantInfo = () => {
  const [resInfo, setResInfo] = useState([]);
  const [itemCategories, setItemCategories] = useState([]);
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    fetchResInfo();
  }, []);

  const fetchResInfo = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.37240&lng=78.43780&restaurantId=" +
        id +
        "&catalog_qa=undefined&submitAction=ENTER"
    );
    const jsonResponse = await data.json();
    console.log(jsonResponse);
    const allCards = jsonResponse.data.cards;
    const resInfo = allCards[2].card.card.info;
    console.log(resInfo);
    setResInfo(resInfo);

    const resData = allCards.filter((card) =>
      card.hasOwnProperty("groupedCard")
    );
    const allgroupedCards = resData[0].groupedCard.cardGroupMap.REGULAR.cards;
    const allItemCategoryCards = allgroupedCards.filter(
      (card) =>
        card.card.card["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
    console.log(allItemCategoryCards);
    setItemCategories(allItemCategoryCards);
  };

  return (
    <div className="">
      <div className="text-center bg-zinc-100 mx-auto w-6/12">
        <div className="text-lg font-bold">{resInfo?.name}</div>
        <div className="text-sm">{resInfo?.cuisines?.join(", ")}</div>
        <div className="text-sm">Delivery in {resInfo?.sla?.slaString}</div>
      </div>
      <div>
        <Menu itemCategories={itemCategories} />
      </div>
    </div>
  );
};

export default RestaurantInfo;
