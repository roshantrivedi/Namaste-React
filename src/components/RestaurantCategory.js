import React, { useState } from "react";

import CuisineList from "./CuisineList";

const RestaurantCategory = ({ items,showItems,setShowIndex }) => {

  const { cuisine, title, name, cost } = items;

  const handleClick = () => {
    setShowIndex();
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
