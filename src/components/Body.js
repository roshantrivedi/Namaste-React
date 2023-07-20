import { useState, useEffect } from "react";

import { SWIGGY_API } from "../utils/constants";

import Search from "./Search";
import ResCard from "./ResCard";

import resList from "../utils/demoData";

const Body = () => {

    const [restList, setResList] = useState([]);

    function handleClick(){
        const filteredList = restList.filter( (restaurant) => restaurant.rating > 4);
        setResList(filteredList);
    }

    function resetFilter(){
        setResList(resList);
    }

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(SWIGGY_API);

        const json = await data.json();
        setResList(json?.data?.cards[2]?.data?.data?.cards);
        console.log(json);
    }

    return(
        <div className='body'>
            <Search/>
            <button className="filter-btn" onClick={handleClick} >Click to Filter Rating above 4</button>
            <button className="filter-btn" onClick={resetFilter}>Reset Filter</button>
            <div className='res-container'>
                {
                    restList.map(function (item) {
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