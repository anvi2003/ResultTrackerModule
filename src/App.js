import React, {lazy,Suspense, useEffect, useState} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.js" ; 
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider,Outlet } from "react-router-dom"; 
import GpaCalculator from "./components/GpaCalculator.js";
import CgpaCalculator from "./components/CgpaCalculator.js";  
   


   
   const AppLayout=()=>{


    const [userName,setuserName]=useState();

    //authentication
    useEffect(()=>{
      //Make an API call and send username and password
      const data={
        name:"Avishka Karn",
      };
      setuserName(data.name);
    },[]);



     return (
      
         <div className="app">
         <Header/>
         <Outlet/>
         </div>
       
     );
   };     

   const appRouter=createBrowserRouter([
    {
      path:"/",
      element:<AppLayout/>,
      children: [
        {
          path:"/",
          element:<Body/>,
        },
        {
          path:"/gpa",
          element:<GpaCalculator/>,
          
        },
        
        {
          path:"/cgpa",
          element:<CgpaCalculator/>,
        },
        
      ],
      
    },
    
  ]);

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);