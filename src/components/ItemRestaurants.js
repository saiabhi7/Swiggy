import React from "react";
import ItemRestaurant from "./ItemRestaurant";
import { withPromoted } from "./ItemRestaurant";

const ItemRestaurants = ({ itemRestaurantsCards }) => {
  const PromotedItemRestaurant = withPromoted(ItemRestaurant);
  return (
    <div className="flex flex-wrap justify-between">
      {itemRestaurantsCards.map((card) => {
        return card?.card?.card?.info?.avgRating > 4 ? (
          <PromotedItemRestaurant
            key={card?.card?.card?.info?.id}
            card={card}
          />
        ) : (
          <ItemRestaurant key={card?.card?.card?.info?.id} card={card} />
        );
      })}
    </div>
  );
};

export default ItemRestaurants;
