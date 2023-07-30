import React, { useState } from "react";

import CuisineList from "./CuisineList";

const RestaurantCategory = ({ items }) => {
  const [showItems, setShowItems] = useState(false);

  const { cuisine, title, name, cost } = items;

  const handleClick = () => {
    setShowItems(!showItems);
  };

  return (
    <div>
      <div className="res-category">
        <div className="res-cat" onClick={handleClick}>
          <span className="category-title">
            {title} ({cuisine.length})
          </span>
          <span>⬇️</span>
        </div>
        {showItems && <CuisineList list={cuisine} name={name} cost={cost} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
