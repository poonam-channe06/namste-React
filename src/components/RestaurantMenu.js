import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { MENU_URL } from "../utils/constant";
import { useParams } from "react-router-dom";


const RestaurantMenu = () => {

    const[resInfo, setResInfo] = useState(null);

    const { resId } = useParams();

    useEffect (() => {
        fetchMenu();
    },[]);


const fetchMenu = async() => {
    const data = await fetch(MENU_URL + resId)
    const json = await data.json();
    console.log("json data--->", json.data)
    setResInfo(json.data);
}

if(resInfo === null) return <Shimmer />

// const { name, cuisines, costForTwoMessage } = resInfo?.cards[2]?.card?.card?.info;
const {name,cuisines, costForTwoMessage} = resInfo?.cards[2]?.card.card.info;

console.log("resinfo--->", name)

const  { itemCards }  = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

console.log("itemcards--->", itemCards)

    return (
        <div className="menu">
            <h1>Restaurant Name: {name}</h1>
            <p>{cuisines.join(", ")} - {costForTwoMessage}</p>
            <h2>Menu</h2>
            <ul>
                {itemCards?.map((item) => (
                 <li key={item.card.info.id}>{item.card.info.name} - {"Rs."}
                 {item.card.info.price / 100 || item.card.info.defaultPrice / 100}</li>

                ))}
               
            </ul>

        </div>
    )
}


export default RestaurantMenu;