import React from 'react';
import ReactDOM from 'react-dom/client';

const resList = [
    {
        "id":"1",
        "name":"Pal Dhaba",
        "cuisine":"Biryani",
        "rating":"4.4",
        "orderTime":"20",
},
{
    "id":"2",
    "name":"Singh Dhaba",
    "cuisine":"Mutton Biryani",
    "rating":"4.5",
    "orderTime":"25",
},
{
    "id":"3",
    "name":"King Dhaba",
    "cuisine":"Chicken Biryani",
    "rating":"4.2",
    "orderTime":"28",
},
{
    "id":"4",
    "name":"Son's Dhaba",
    "cuisine":"Veg Biryani",
    "rating":"4.7",
    "orderTime":"11",
},
{
    "id":"5",
    "name":"Son's Dhaba",
    "cuisine":"Veg Biryani",
    "rating":"4.7",
    "orderTime":"11",
},
]

const Header = () =>{
    return (
        <div className='header'>
            <div className='logo-container'>
                <img className='logo' src='https://cdn.dribbble.com/userupload/3948351/file/original-19d7d7a1cbb8c7693758b740d5477d54.jpg?resize=400x0' alt='food-zone'/ >
            </div>
            <div className='nav-items'>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const Search = () =>{
    return (
        <div className='search'>
            <input type='search' /><label> Search</label>
        </div>
    )
}

const ResCard = ({resList}) =>{

    const {name,cuisine,rating,orderTime} = resList;

    return (
        <div style={{ textAlign:"center" }} className='res-card'>
            <h3>{name}</h3>
            <img className='res-logo' alt='biryani' src='https://www.cubesnjuliennes.com/wp-content/uploads/2020/07/Chicken-Biryani-Recipe.jpg' />
            <h4>{cuisine}</h4>
            <h4>{rating} stars</h4>
            <h4>{orderTime} mins</h4>
        </div>
    )
}

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

const AppLayout = () => {
    return (
        <div className='applayout'>
            <Header />
            <Body />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<AppLayout />);