import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Search from "./Search";
import ResCard, { topRatedResCard } from "./ResCard";
import Shimmer from "./Shimmer";

const Body = () => {
    const [restList, setResList] = useState([]);
    const [filterRestList, setFilterRestList] = useState([]);
    //console.log(filterRestList);

    const TopRatedRestaurant = topRatedResCard(ResCard);

    function handleClick() {
        const filteredList = restList.filter(
            (restaurant) => restaurant.data.avgRating > 4
        );
        setResList(filteredList);
    }

    function resetFilter() {
        setResList(restList);
    }

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
        );
        const json = await data.json();

        setResList(
            json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
        );
        setFilterRestList(
            json?.data?.cards[5].card?.card?.gridElements?.infoWithStyle?.restaurants
        );
        //console.log(filterRestList);
    };

    return (
        <div className="body">
            <Search restList={restList} setFilterRestList={setFilterRestList} />
            <button className="filter-btn" onClick={handleClick}>
                Click to Filter Rating above 4
            </button>
            <button className="filter-btn" onClick={resetFilter}>
                Reset Filter
            </button>
            <div className="res-container">
                {filterRestList.map(function (item) {
                    return (
                        <Link
                            className="rescard-link"
                            key={item.info.id}
                            to={"/restaurants/" + item.info.id}
                        >
                            {item.info.avgRating > 4.2 ? (
                                <TopRatedRestaurant resList={item.info} />
                            ) : (
                                <ResCard resList={item.info} />
                            )}
                        </Link>
                    );
                })}
            </div>
        </div>
    );
};

export default Body;
