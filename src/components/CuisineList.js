import React from 'react'
import { useDispatch } from 'react-redux';

import { addItem, removeItem } from '../utils/Slices/cartSlice';

const CuisineList = ({list,name,cost}) => {

  const dispatch = useDispatch();

  function handleClickAdd(){
    dispatch(addItem(list,name,cost));
  }
  
  return (
    <div>
    <div className='cuisine-list'>
        <p className='name-cost'>{name} - ₹{cost}</p>
        <button className='add-button' onClick={()=> handleClickAdd(list,name,cost)}>Add</button>
        
    </div>
        <p className='food-list'>{list.join(" + ")}</p>
    </div>
  )
}

export default CuisineList