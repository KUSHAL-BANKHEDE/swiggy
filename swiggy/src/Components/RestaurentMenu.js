import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../Utils/constant";

const RestaurentMenu =()=>{
    const[menu ,setMenu] = useState(null);
    const {resId} = useParams();
    console.log(useParams());
    useEffect(()=>{
        fetchmanu();
    } ,[]);

    const fetchmanu = async()=>{
        const data = await fetch(MENU_API+resId);
        console.log(MENU_API+resId);
         const json = await data.json();
        console.log(json.data);
        setMenu(json.data);
        
    }

    if(menu === null) return <Shimmer/>;
      
     const{name, cuisines, costForTwoMessage }= menu?.cards[2]?.card?.card?.info;
    
     const{itemCards} = menu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

     console.log(itemCards);

    
    return(
        <div className="menu">
            {/* <h1>hdieide</h1> */}
            <h1>{name}</h1>
            <h3>{cuisines.join(", ")}</h3>
            <h2>{costForTwoMessage}</h2>
            <h3>MENU</h3>
            <ul>
                {itemCards.map((item)=>(
                    <li key ={item.card.info.id}>
                        {item.card.info.name} -{"Rs."}
                        {item.card.info.price/100 || item.card.info.defaultPrice/100 }
                    </li>
                ))}
            </ul>
        </div>
    )

}
export default RestaurentMenu;