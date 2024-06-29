import React, { useEffect, useState } from "react";
import {AiFillStar } from "react-icons/ai";
import { CDN_URL } from "../Utils/constant";

const Restrocart =(props)=>{

        const{resData} = props;
        const{
          cloudinaryImageId,
           name,
           avgRating,
           cuisines,
           costForTwo,
           sla,
           
        } = resData?.info;

       

    return (
      <div className=" resoCart" style={{backgroundColor : "F0F0F0"}}>
          
          <img
          className="res-logo"
          alt="res-logo"
            src={CDN_URL + cloudinaryImageId}
          />
          <h3>{name}</h3>
          <h4> {cuisines.join(", ")} </h4>
          
          <h4>{avgRating} stars  {sla.deliveryTime} minutes</h4>
          <h4>{costForTwo}</h4>
          <h4>{sla.deliveryTime} minutes</h4>
  
      </div>
    );
  };
  export default Restrocart;