import { REST_URL } from '../utils/constants';

const ResCard = ({resList}) =>{

    const {name,cuisines,avgRating,deliveryTime} = resList;

    return (
        <div style={{ textAlign:"center" }} className='res-card'>
            <h3>{name}</h3>
            <img className='res-logo' alt='biryani' src={REST_URL} />
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{deliveryTime} mins</h4>
        </div>
    )
}

export default ResCard;