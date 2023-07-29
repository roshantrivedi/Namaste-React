import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

import Shimmer from './Shimmer';

import { MENU_API } from '../utils/constants';
import useRestaurantMenuInfo from '../utils/useRestaurantMenuInfo';

const RestaurantMenu = () => {
    
    const { resId } = useParams();

    const resInfo = useRestaurantMenuInfo(resId);

    if (resInfo === null) return <Shimmer/>;

    const { name, cuisines, costForTwoMessage } = 
     resInfo?.cards[0]?.card?.card?.info;

    
     //const { itemCards } = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

    return (
    <div className='res-menu'>
        <h2>{name}</h2>
        <p>
            {cuisines.join(', ')} .{ costForTwoMessage}
        </p>
        <h3>Menu</h3>
        <ul>
            {/* {itemCards.map((item) => (
                <li key={item.info.id}>
                {item.card.info.name} -{" Rs."}
                {item.card.info.price /100 || item.card.info.defaultPrice /100 }</li>
            ))} */}
            <li>Cold Drink</li>
            <li>Cold Coffee</li>
            <li>Tea</li>
            <li>Cappuccino</li>
        </ul>
    </div>
  )
}

export default RestaurantMenu