import './App.css';
import React, {lazy, Suspense, useEffect, useState} from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import RestaurantMenu from './components/RestaurantMenu';
// import Grocery from './components/Grocery';
import userContext from './utils/userContext';





const Grocery = lazy(() => import("./components/Grocery"))


// if we want to modify our context 

const AppLayout = () => {

  const [userName, setUserName] = useState();


// authentication 
useEffect (()=>{
  //make an API call and senf the username and password 
  const data ={
    name : "Poonam Channe"
  }
  setUserName(data.name)
})

// overriding the default value 
  return (
    <userContext.Provider value = {{loggednUser: userName}}>
<div className="app">
      <Header />
      <Outlet />
    </div>
    </userContext.Provider>
    
  );
}


const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout/>,
    children : [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path:"/restaurants/:resId",
        element: <RestaurantMenu />
      },
      {
        path: "/grocery",
        element: <Suspense fallback = {<h1>Locading.....</h1>}>
          <Grocery />
        </Suspense>,
      },
    ],
    errorElement: <Error/>,
  },

]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);




export default AppLayout