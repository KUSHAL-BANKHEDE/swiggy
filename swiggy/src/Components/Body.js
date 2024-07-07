import { useEffect, useState } from "react";
import Restrocart, {RestroCartPrapoted} from "./Restrocart";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import CirculerCard from "./CircularCard";


const Body =()=>{

  const[listOfRestro , setListOfRestro] = useState([]);
  const[searchText , setSearchText] = useState("");
  const[filterRestro ,setFilterRestro]= useState([]);
  const[topReso , setTopReso] = useState([]);
  const[onMind , setOnMind] = useState([]);
  const RestroCardPrapoted = RestroCartPrapoted(Restrocart);

    useEffect(()=>{
        fetchData();
    } , [])

    const fetchData = async()=>{
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.87560&lng=80.91150&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        
        const json = await data.json();
        
        // console.log(json);

        // console.log(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setOnMind (json?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info);
        setTopReso(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setListOfRestro(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilterRestro(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

        // console.log(listOfRestro);
        console.log(onMind?.id)
    
      }
     

      if(listOfRestro.length === 0){
        return <Shimmer/>
      }
      
     
    return(
      <div className="mx-10">

        <div className="search"> 
        <div className=" py-4 p-4  bg-slate-600 rounded-xl ">
              <input type="text" className=" border border-solid border-back " value={searchText} onChange={(e)=>{
                setSearchText(e.target.value);
              }}/>
              <button 
                className="px-4 py-1 bg-green-100 m-4 rounded-lg shadow-lg"
              onClick={()=>{
                 console.log(searchText);
                
                 const searchRestro = listOfRestro.filter((res)=>
                 res?.info?.name?.toLowerCase()?.includes(searchText.toLowerCase())
                 );
                 setFilterRestro(searchRestro);
              }}
              >
                Search
                </button>
        </div>
        </div>

          
      <div className="p-4 m-4 py-16 border-b-2">
        <h4 className="font-extrabold py-7 text-3xl">What's on your mind?</h4>
        <div className="flex overflow-x-auto whitespace-nowrap">
          {onMind.map((item) => (
            <Link key={item.id} to={`item/${item.id}`}>
              <CirculerCard itemData={item} />
            </Link>
          ))}
        </div>
      </div>


        <div className="p-4 m-4 py-16 border-b-2">
      <h4 className="font-extrabold py-7 text-3xl">Top restaurant chains</h4>
      <div className="flex overflow-x-auto  whitespace-nowrap">
        {topReso.map((restaurant) => (
          <Link key={restaurant.info.id} to={`restaurant/${restaurant.info.id}`}>
            <Restrocart resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>


        <div className="restro-cart flex flex-wrap p-4 m-4 space-x-1 space-y-1 "> 
        
        {filterRestro.map((restaurant)=>(
          <Link key={restaurant.info.id}
             to={"restaurant/"+restaurant.info.id}>
              {
               restaurant.info.promoted ? (
               <RestroCardPrapoted  resData={restaurant} /> 
               ) : (
               <Restrocart  resData={restaurant}/>
               )
              }
              
           </Link>
        ))}
        </div>

      </div>
    )
}

export default Body;