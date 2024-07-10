import React, { useState } from "react";
import SubMenu from "./SubMenu";

const Menu = ({ itemCategories }) => {
  const [showSubMenu, setShowSubMenu] = useState(false);
  const [menuToOpenIndex, setMenuToOpenIndex] = useState(null);

  const hideOrShowSubMenu = (index) => {
    if (index === menuToOpenIndex) {
      setMenuToOpenIndex(null);
    } else {
      setMenuToOpenIndex(index);
    }
  };

  return (
    <div>
      {itemCategories.map((itemCategory, index) => {
        const card = itemCategory?.card?.card;
        const title = card?.title;
        const itemCards = card?.itemCards;
        return (
          <div
            className="m-2 mx-auto p-2 bg-stone-100 shadow-lg cursor-pointer w-6/12"
            /* onClick={() => {
              setShowSubMenu(!showSubMenu);
            }} */
            key={index}
            onClick={() => hideOrShowSubMenu(index)}
          >
            <div className="flex justify-between">
              <div className="font-bold text-sm">
                {title}({itemCards?.length})
              </div>
              {!showSubMenu ? (
                <div className="">⬇️</div>
              ) : (
                <div className="">⬆️</div>
              )}
            </div>
            {index === menuToOpenIndex && <SubMenu itemCards={itemCards} />}
          </div>
        );
      })}
    </div>
  );
};

export default Menu;
