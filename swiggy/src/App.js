import Header from "./Components/Header";
import Body from "./Components/Body";
import './App.css';
import {createBrowserRouter , Outlet} from'react-router-dom';
import Help from "./Components/Help";
import Error from "./Components/Error";
import Contect from "./Components/Contect";
import About from "./Components/About";
import RestaurentMenu from "./Components/RestaurentMenu";
import ItemCard from "./Components/ItemCard";



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
      },
      {
        path:"/restaurant/:resId",
        element:<RestaurentMenu/>
      },
      {
        path:"/item/:itemId",
        element:<ItemCard/>
      }
    
    ]
  },
  

]
)
 
export default appRouter;
