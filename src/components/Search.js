import { useState } from 'react';

const Search = ({restList, setFilterRestList}) =>{

    const [searchText, setSearchText] = useState('');

    return (
        <div className='search'>
            <input type='search' className="search-box" 
            value={searchText} onChange={(e) => setSearchText(e.target.value)}
            />
            
            <button className="search-button" onClick={()=>{
                const FR = restList.filter( (res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase()) );
                setFilterRestList(FR);
            }}> Search </button>
        </div>
    )
}

export default Search;