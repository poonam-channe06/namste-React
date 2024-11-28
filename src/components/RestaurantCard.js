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
      <div className="m-4 p-4 w-[240px] rounded-md bg-gray-100 hover:bg-gray-300" >
         <img
        className="rounded-md"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
        <h3 className="font-bold px-2 py-4 text-lg">{name}</h3>
        <h5>{cuisines} </h5>
     <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla?.slaString}</h4>
      </div>
    )
  }


  export default RestaurantCard;

