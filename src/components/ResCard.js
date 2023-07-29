import { REST_URL } from '../utils/constants';

const ResCard = ({resList}) =>{

    const {name,cuisines,avgRating,costForTwo,cloudinaryImageId} = resList;

    return (
        <div style={{ textAlign:"center" }} className='res-card'>
            <h3>{name}</h3>
            <img className='res-logo' alt='biryani' src={REST_URL+cloudinaryImageId} />
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{costForTwo} person</h4>
            
        </div>
    )
}

//HIGHER ORDER COMPONENT
export const topRatedResCard = (ResCard) => {
    return (props) => {
        return(
            <div>
                <label className='top-rated'>Top Rated</label>
                <ResCard {...props}/>
            </div>
        )
    }
}

export default ResCard;