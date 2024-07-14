import React from 'react';
import { Link } from "react-router-dom";
import { LOGO_URL } from "../Utils/constant";
import { useSelector } from 'react-redux';
import { CartIcon } from '../Utils/Icons';
const Header = ()=>{
        // const cartItem = useSelector((store)=> store.cart.items);
        const cart = useSelector((store)=>store.cart.items);
        console.log(cart); 
    return (
      <div className="flex justify-between shadow-xl">
            <div className="logoContener">
              <img className="logo w-36 " src={LOGO_URL}/>
            </div>
            <div className="naveItem ">
                <ul className='flex p-4 m-4 space-x-4  items-center'>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/contect">contect us</Link>
                    
                  </li>

                  <li>
                     <Link to="/about">About us</Link>
                  </li>
                  
                  <li  className='relative ml-auto'>
                      
                  <Link to="/cart" className="relative">
                    <CartIcon className="w-8 h-8" />
                    {cart.length !== 0 && (
                        <div className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs">
                            {cart.length}
                        </div>
                    )}
                </Link>

                  </li>
                 
                </ul>
  
                 
            </div>
      </div>
    )
  }
  export default Header;