import { useState, useEffect } from "react";

import { SWIGGY_API } from "../utils/constants";

import Search from "./Search";
import ResCard from "./ResCard";
import Shimmer from "./Shimmer";

const Body = () => {

    const [restList, setResList] = useState([]);
    const [filterRestList, setFilterRestList] = useState([]);

    function handleClick(){
        const filteredList = restList.filter( (restaurant) => restaurant.data.avgRating > 4);
        setResList(filteredList);
        console.log(restList);
    }

    function resetFilter(){
        console.log(restList);
        setResList(restList);
    }

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(SWIGGY_API);

        const json = await data.json();
        setResList(json?.data?.cards[2]?.data?.data?.cards);
        setFilterRestList(json?.data?.cards[2]?.data?.data?.cards);
    }

    return restList.length === 0 ? <Shimmer/> : (
        <div className='body'>
            <Search restList={restList} setFilterRestList={setFilterRestList}/>

            <button className="filter-btn" onClick={handleClick} >Click to Filter Rating above 4</button>
            <button className="filter-btn" onClick={resetFilter}>Reset Filter</button>
            <div className='res-container'>
                {
                    filterRestList.map(function (item) {
                        return (
                            <ResCard key={item.data.id} resList={item.data}/>
                        );
                    })
                }
            </div>
        </div>
    )
}

export default Body;