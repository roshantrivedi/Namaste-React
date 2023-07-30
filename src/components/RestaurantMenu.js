import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Shimmer from "./Shimmer";
import RestaurantCategory from "./RestaurantCategory";

import { MENU_API } from "../utils/constants";
import resList  from "../utils/demoData";
import useRestaurantMenuInfo from "../utils/useRestaurantMenuInfo";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenuInfo(resId);

  if (resInfo === null) return <Shimmer />;

  const {
    name,
    cuisines,
    costForTwoMessage,
  } = resInfo?.cards[0]?.card?.card?.info;
console.log(cuisines);
  //const { itemCards } = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  return (
    <div className="res-menu">
      <h2>{name}</h2>
      <p>
        {cuisines.join(", ")} .{costForTwoMessage}
      </p>
      <h3>Menu</h3>
      <ul>
        {/* {itemCards.map((item) => (
                <li key={item.info.id}>
                {item.card.info.name} -{" Rs."}
                {item.card.info.price /100 || item.card.info.defaultPrice /100 }</li>
            ))} */}
        { resList.data.map((category) => {
            return (
                <RestaurantCategory key={category.id} items={category}/>
            )
            })
        }
      </ul>
    </div>
  );
};

export default RestaurantMenu;
