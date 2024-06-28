import { useEffect, useState } from "react";
import Restrocart from "./Restrocart";
import Shimmer from "./Shimmer";


const Body =()=>{

  const[listOfRestro , setListOfRestro] = useState([]);
  const[searchText , setSearchText] = useState("");
  const[filterRestro ,setFilterRestro]= useState([]);

    useEffect(()=>{
        fetchData();
    } , [])

    const fetchData = async()=>{
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.87560&lng=80.91150&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        
        const json = await data.json();
        
        console.log(json);

        // console.log(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        
        setListOfRestro(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilterRestro(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    
      }
     

      if(listOfRestro.length === 0){
        return <Shimmer/>
      }
      
     
    return(
      <div className="body">

        <div className="search"> search</div>
        <div className="filter">
              <input type="text" className="search-box" value={searchText} onChange={(e)=>{
                setSearchText(e.target.value);
              }}/>
              <button onClick={()=>{
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

        <div className="restro-cart"> 
        
        {filterRestro.map((restaurant)=>(
          <Restrocart key={restaurant.info.id} resData={restaurant}/>
        ))}
        </div>

      </div>
    )
}

export default Body;