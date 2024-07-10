import React, { useState } from "react";
import { CDN_URL } from "../constants/constants";
import { Link, useNavigate } from "react-router-dom";

const WhatsOnYourMindItem = ({ item }) => {
  const navigate = useNavigate();

  const loadItemRestaurants = (entity) => {
    const [first, ...rest] = entity.split("=");
    navigate("/itemInfo/" + rest.join("="));
  };

  return (
    <div
      className="p-2 cursor-pointer"
      onClick={() => loadItemRestaurants(item?.entityId)}
    >
      <div className="w-28 hover:scale-110 ease-in-out duration-500">
        <img src={CDN_URL + item?.imageId} />
      </div>
    </div>
  );
};

export default WhatsOnYourMindItem;
