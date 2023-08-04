import { Link } from "react-router-dom";
import { useContext } from "react";
import { useSelector } from "react-redux";

import { LOGO_URL } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";


const Header = () =>{

    const status = useOnlineStatus();
    const cartItems = useSelector((store) => store.cart.items);
    const {loggedInUser} = useContext(UserContext);

    return (
        <div className='header'>
            <div className='logo-container'>
                <img className='logo' src={LOGO_URL} alt='food-zone'/ >
            </div>
            <div className='nav-items'>
                <ul>
                    <li>User Staus:{status ? "🟢" : "🔴"}</li>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/about'>About Us</Link></li>
                    <li><Link to='/contact'>Contact Us</Link></li>
                    <li><Link to="/grocery">Grocery</Link></li>
                    <li><Link to='/cart'>Cart-{cartItems.length}</Link></li>
                    <li className="logged-user">👤{loggedInUser}</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;