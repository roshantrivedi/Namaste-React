import Search from "./Search";
import ResCard from "./ResCard";

import resList from "../utils/demoData";

const Body = () => {
    return(
        <div className='body'>
            <Search/>
            <div className='res-container'>
                {
                    resList.map(function (item) {
                        return (
                            <ResCard key={item.id} resList={item}/>
                        );
                    })
                }
            </div>
        </div>
    )
}

export default Body;