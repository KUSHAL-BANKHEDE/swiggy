import React from 'react';
import { Link } from "react-router-dom";
import { LOGO_URL } from "../Utils/constant";
const Header = ()=>{
    return (
      <div className="flex justify-between shadow-xl">
            <div className="logoContener">
              <img className="logo w-36 " src={LOGO_URL}/>
            </div>
            <div className="naveItem ">
                <ul className='flex p-4 m-4 space-x-4 items-center'>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/contect">contect us</Link>
                    
                  </li>

                  <li>
                     <Link to="/about">About us</Link>
                  </li>
                  <li>Cart</li>
                 
                </ul>
  
                 
            </div>
      </div>
    )
  }
  export default Header;