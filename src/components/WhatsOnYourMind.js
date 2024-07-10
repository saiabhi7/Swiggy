import React, { useRef, useState } from "react";
import WhatsOnYourMindItems from "./WhatsOnYourMindItems";

const WhatsOnYourMind = ({ whatsOnYourMindHeader, whatsOnYourMindItems }) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const containerRef = useRef();

  const handleScroll = (scrollAmount) => {
    const newScrollPosition = scrollAmount + scrollPosition;

    setScrollPosition(newScrollPosition);

    containerRef.current.scrollLeft = newScrollPosition;
  };

  return (
    <div className="bg-gray-100 m-2 overflow-hidden">
      <div className="flex justify-between">
        <h1 className="font-bold pl-2">{whatsOnYourMindHeader}</h1>
        <div className="flex pr-2">
          <div onClick={() => handleScroll(-500)} className="cursor-pointer">
            ⬅️
          </div>
          <div onClick={() => handleScroll(500)} className="cursor-pointer">
            ➡️
          </div>
        </div>
      </div>
      <div
        ref={containerRef}
        className="overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide"
      >
        <WhatsOnYourMindItems whatsOnYourMindItems={whatsOnYourMindItems} />
      </div>
    </div>
  );
};

export default WhatsOnYourMind;
