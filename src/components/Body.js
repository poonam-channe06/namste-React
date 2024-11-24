import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";


const Body = () => {
const [listOfRestaurants, setListOfRestaurants] = useState([])

const [filteredRestaurants , setFilteredRestaurants] = useState([])

const [searchText, setsearchText] = useState("")

useEffect(()=>{
    fetchData();
}, [])


const fetchData = async () =>{
    const data = await fetch(
"https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    )

    const json = await data.json()

    // console.log(json)
    console.log("data-->",json.data.cards)
    setListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    setFilteredRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
}


const onlineStatus = useOnlineStatus();

if(onlineStatus === false){
  return (
    <div>
      <h2>Looks like you're offline .. Please check your internet connection!</h2>
    </div>
  )
}


    return listOfRestaurants?.length === 0 ? <Shimmer /> : (
      <div className="body">
        <div className="filter">
        <div className="search">
          <input type="text" 
          className="search-box"
          value={searchText}
          onChange={(e)=>{
            console.log("eeeeee->", )
            setsearchText(e.target.value)
          }}
          
          />
          <button className=""
          onClick={()=>{
            // console.log(searchText)
            const fiilteredRestuarants = listOfRestaurants.filter((res)=>
              res.info.name.toLowerCase().includes(searchText.toLocaleLowerCase())
              
            )
            
            setFilteredRestaurants(fiilteredRestuarants)
          }}
          >Search</button>

        </div>
        <button className="filter-btn"
        onClick={() => {
          const filteredList = listOfRestaurants.filter( (res) => res.info.avgRating > 4.1);
          setFilteredRestaurants(filteredList);
        }}
      

        >Top rated Restaurant</button>


        </div>
       
        <div className= "res-container" >
          {filteredRestaurants.map((restaurant) => 
          (
            <Link
            
                key={restaurant?.info.id}
      to={"/restaurants/" + restaurant?.info.id}
            >
                        <RestaurantCard resData={restaurant} />

            </Link>

            ))}
        </div>
      </div>
    )
  }

  export default Body;