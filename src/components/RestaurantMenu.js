import { useState } from "react";
import { useParams } from "react-router-dom";

import Shimmer from "./Shimmer";
import RestaurantCategory from "./RestaurantCategory";

import resList from "../utils/demoData";
import useRestaurantMenuInfo from "../utils/useRestaurantMenuInfo";

const RestaurantMenu = () => {
  const [showIndex, setShowIndex] = useState(null);
  const { resId } = useParams();

  const resInfo = useRestaurantMenuInfo(resId);

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;
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
        {resList.data.map((category, index) => {
          return (
            <RestaurantCategory
              key={category.id}
              items={category}
              showItems={index === showIndex ? true : false}
              setShowIndex={ ()=> setShowIndex(index) }
            />
          );
        })}
      </ul>
    </div>
  );
};

export default RestaurantMenu;