import { useSelector } from "react-redux";
import ItemList from "./ItemList";
import { useDispatch } from "react-redux";
import { clearItem } from "../utils/cartSlice";
import happyImage from "../images/happy.png";

const Cart = () =>{

// use selectore 

const cartItems = useSelector((store)=> store.cart.items)


const dispatch = useDispatch();

const removeItem = () => {
  // as sooon as we click on Add + button we have to dispacth an action
  dispatch(clearItem());
};


    return(
        <div className="text-center m-5 p-5">
            <button className="m-2 p-2 bg-green-500 rounded-md text-black" onClick={removeItem}>Clear cart</button>
            {cartItems.length === 0 &&(
               <h1>
               Helllo this cart is empty Please add items to the cart for a happy meal 
               <img 
                 src={happyImage} 
                 alt="Happy Meal Icon" 
                 className="inline-block w-6 h-6 ml-2"
               />
             </h1>
                
                
            )}
            <div className="w-6/12 m-auto ">
            <ItemList items={cartItems}/>
            </div>
            
        </div>
      
    )
}

export default Cart;