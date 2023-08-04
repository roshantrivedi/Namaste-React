import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { clearItem, removeItem } from "../utils/Slices/cartSlice";

const Cart = () => {

    const dispatch = useDispatch();

    function handleDelete () {
        dispatch(clearItem());
    }

    function handleClickRemove(){
        dispatch(removeItem());
    }

    const items = useSelector((store) => store.cart.items);

  return items.length === 0 ? <h3>Your cart is empty</h3> : (
    <div className="cart">
      Your Cart
      <p>{items.map((i, index) => {
        return(
            <div>
                <h5>{i} <button className="add-button" onClick={handleClickRemove}>Remove</button></h5>
                
            </div>
        )
      })}
      </p>
      <p>
        <button className='add-button' onClick={handleDelete}>Remove All Items</button>
      </p>
    </div>
  );
};

export default Cart;
