import RestaurantCard  ,{ withPromotedLabel }from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);

  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  const [searchText, setsearchText] = useState("");

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard)

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    // console.log(json)
    // console.log("data-->",json?.data)
    setListOfRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    console.log("data-->",json?.data)
    setFilteredRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) {
    return (
      <div>
        <h2>
          Looks like you're offline .. Please check your internet connection!
        </h2>
      </div>
    );
  }

  return listOfRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="flex">
        <div className="search m-4 p-4 ">
          <input
            type="text"
            className="border border-solid border-black "
            value={searchText}
            onChange={(e) => {
              console.log("eeeeee->");
              setsearchText(e.target.value);
            }}
          />
          <button
            className="px-4 py-2 bg-green-100 m-4 rounded-md"
            onClick={() => {
              // console.log(searchText)
              const fiilteredRestuarants = listOfRestaurants.filter((res) =>
                res.info.name
                  .toLowerCase()
                  .includes(searchText.toLocaleLowerCase())
              );

              setFilteredRestaurants(fiilteredRestuarants);
            }}
          >
            Search
          </button>
        </div>
        <div className=" search m-4 p-4 flex items-center">
        <button
          className="px-4 py-2 bg-gray-100 rounded-md"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4.1
            );
            setFilteredRestaurants(filteredList);
          }}
        >
          Top rated Restaurant
        </button>
        </div>

        
      </div>

      <div className="flex flex-wrap">
        {filteredRestaurants.map((restaurant) => (
          <Link
            key={restaurant?.info.id}
            to={"/restaurants/" + restaurant?.info.id}
          >



{/**so if there is "promoted lable in the wiggys website wel show this like 2 component one with label
 * and other without lable 
 * for noe there is no key "promotedlable "in the retaurant data so we can not use it here as 
 * use in the video , BUT ill write the logic 
 * " */}

{/* {restaurant.data.promotedLable ? (<RestaurantCardPromoted resData={restaurant} />) : (<RestaurantCard resData={restaurant} />) } */}


            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
