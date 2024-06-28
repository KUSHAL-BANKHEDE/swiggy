import react from "react";
import { ReactDOM } from "react";
import Header from "./Components/Header";
import Body from "./Components/Body";
import './App.css';
import {createBrowserRouter , RouterProvider} from'react-router-dom';
import Help from "./Components/Help";
import Error from "./Components/Error";
import Contect from "./Components/Contect";
import About from "./Components/About";



const  AppLayout = () => { 
  return (

          <div className ="app">
               <Header/>
               <RouterProvider router={appRouter}/>
          </div>

  )
  
}

const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<Body/>,
    errorElement:<Error/>
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


])
 const App =()=>{
  return <AppLayout/>
 }

export default App;
