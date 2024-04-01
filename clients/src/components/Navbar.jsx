
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { useAuth } from "../ContextApi/TokenApi";
import { FaShoppingCart, FaBars, FaTimes } from 'react-icons/fa';
import { FaHeart } from "react-icons/fa";


export const Navbar = () => {
  const { isLoggedIn,cartCount,wishlistCount } = useAuth();
  console.log("login or not ", isLoggedIn);
  const {user} = useAuth()
  const {showMenu} = useAuth()

  return (
    <>
          
   <nav  className="header-2">
   <i id="menu-bar" className="fas fa-bars" onClick={showMenu}></i> 
   <h1>

    <img src="https://static.vecteezy.com/system/resources/thumbnails/024/524/034/small/woman-cooking-food-free-png.png" 
   style={{ color: "black", fontSize: "50px" }} alt="" />

</h1>
        
        <div className="nav-links" id="navlinks">
       
                      <ul>
                     
                        <li>
                          <NavLink to="/" > Home </NavLink>
                        </li>
                        <li>
                          <NavLink to="/about" > About </NavLink>
                        </li>
                        <li>
                          <NavLink to="/product" > Product </NavLink>
                        </li>
                    
                        <li>
                          <NavLink to="/contact" > Contact </NavLink>
                        </li>
                    
                   
                      {isLoggedIn ? (
                        <li>
                          <NavLink to="/logout" >Logout</NavLink>
                        </li>
                      ) : (
                        <>
                          <li>
                            <NavLink to="/register"> Register </NavLink>
                          </li>
                          <li>
                            <NavLink to="/login">Login</NavLink>
                          </li>
                        </>
                      )}
                      
                        </ul>
                    </div>
                  
                    {/* <i id="menu-bar" className="fas fa-bars" onClick={showMenu}></i>  */}
               
                  <div className="icons">
                 
                <NavLink to="/cart" className="cart-icon">
                  <FaShoppingCart/>
                  <span className="cart-count">{cartCount}</span>
                </NavLink>
                <NavLink to="/wishlist" className="cart-icon">
                  <FaHeart/>
                  <span className="cart-count">{wishlistCount}</span>
                </NavLink>
                  {/* <a href="" className="fa-solid fa-heart"></a> */}
                  <a href="" className="fa-solid fa-user"></a>
              
                </div>
                </nav> 
   
    </>
  );
};


export default Navbar

