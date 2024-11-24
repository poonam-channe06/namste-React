import { MENU_URL } from "../utils/constant";
import { useEffect, useState } from "react";

const useRestaurantMenu = (resId) => {
    const [resInfo, setResInfo] = useState(null)

    useEffect (() => {
        fetchMenu();
    },[]);

    const fetchMenu = async() => {
        const data = await fetch(MENU_URL + resId)
        const json = await data.json();
        console.log("json data--->", json.data)
        setResInfo(json.data);
    }

    return resInfo
}

export default useRestaurantMenu