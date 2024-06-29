import react from "react";
import { ReactDOM } from "react";
import Header from "./Components/Header";
import Body from "./Components/Body";
import './App.css';
import {createBrowserRouter , Outlet, RouterProvider} from'react-router-dom';
import Help from "./Components/Help";
import Error from "./Components/Error";
import Contect from "./Components/Contect";
import About from "./Components/About";



const  AppLayout = () => { 
  return (

          <div className ="app">
               <Header/>
               <Outlet/>
          </div>

  )
  
}

const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<AppLayout/>,
    errorElement:<Error/>,
    children:[
      {
        path:"/",
        element:<Body/>
      },
      {
        path:"/help",
        element:<Help/>
      },
    
      {
        path:"/contect",
        element:<Contect/>
      },
      {
        path:"/about",
        element:<About/>
      }
    
    ]
  },
  

]
)
 
export default appRouter;
