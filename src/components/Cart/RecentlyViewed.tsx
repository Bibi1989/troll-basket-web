import React, { useState, useEffect } from "react";
import "./styles/RecentlyViewed.css";
import Hand from "assets/images/hand.svg";
import Shoe from "assets/images/shoe.svg";
import Cocacola from "assets/images/coca-cola.svg";

const RecentlyViewed = () => {
  const [recent, setRecent] = useState<any>([]);
  useEffect(() => {
    let recentItems = [
      {
        image: Hand,
        text: "Free Sample small tote bag gucci fen...",
        min_price: 900,
        max_price: 1500,
        moq: 4,
      },
      {
        image: Shoe,
        text: "Free Sample small tote bag gucci fen...",
        min_price: 900,
        max_price: 1500,
        moq: 4,
      },
      {
        image: Cocacola,
        text: "Free Sample small tote bag gucci fen...",
        min_price: 900,
        max_price: 1500,
        moq: 4,
      },
    ];

    setRecent(recentItems);
  }, []);

  return (
    <div className="recently-component cart-card">
      <div className="header">
        <span>Recently viewed</span>
        <span>View all</span>
      </div>
      <div className="content">
        {recent.map((item: any, index: number) => (
          <div key={index} className="body">
            <img className="recent-image" src={item.image} alt="Image here" />
            <p>{item.text}</p>
            <p>
              {item.min_price} - {item.max_price}
            </p>
            <p>MOQ {item.moq} (pieces) </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentlyViewed;
