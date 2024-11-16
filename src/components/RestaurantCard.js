import { CDN_URL } from "../utils/constant";

const styleCard = {
    backgroundColor: "#f0f0f0"
  }
  

const RestaurantCard = ({resData}) => {
    const {  cloudinaryImageId,
      name,
      avgRating,
      cuisines,
      costForTwo,
      sla, } = resData?.info;

    // console.log("resData",resData )


    return (
      <div className="res-card" style={styleCard}>
         <img
        className="rounded-lg"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
        <h3>{name}</h3>
        <h5>{cuisines} </h5>
     <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla?.slaString}</h4>
      </div>
    )
  }


  export default RestaurantCard;

