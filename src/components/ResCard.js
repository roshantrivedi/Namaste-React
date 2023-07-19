import { REST_URL } from '../utils/constants';

const ResCard = ({resList}) =>{

    const {name,cuisine,rating,orderTime} = resList;

    return (
        <div style={{ textAlign:"center" }} className='res-card'>
            <h3>{name}</h3>
            <img className='res-logo' alt='biryani' src={REST_URL} />
            <h4>{cuisine}</h4>
            <h4>{rating} stars</h4>
            <h4>{orderTime} mins</h4>
        </div>
    )
}

export default ResCard;