import React from "react";
import WhatsOnYourMindItem from "./WhatsOnYourMindItem";

const WhatsOnYourMindItems = ({ whatsOnYourMindItems }) => {
  return (
    <div className="flex justify-between">
      {whatsOnYourMindItems.map((item) => {
        return <WhatsOnYourMindItem key={item.id} item={item} />;
      })}
    </div>
  );
};

export default WhatsOnYourMindItems;
