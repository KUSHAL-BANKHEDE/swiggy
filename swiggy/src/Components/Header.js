import { Link } from "react-router-dom";
import { LOGO_URL } from "../Utils/constant";
const Header = ()=>{
    return (
      <div className="header">
            <div className="logoContener">
              <img className="logo" src={LOGO_URL}/>
            </div>
            <div className="naveItem">
                <ul>
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