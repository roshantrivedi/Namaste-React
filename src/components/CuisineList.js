import React from 'react'

const CuisineList = ({list,name,cost}) => {
  return (
    <div>
    <div className='cuisine-list'>
        <p className='name-cost'>{name} - ₹{cost}</p>
    </div>
        <p className='food-list'>{list.join(" + ")}</p>
    </div>
  )
}

export default CuisineList