import React from 'react'
import { MdDelete } from "react-icons/md";
import { useAuth } from '../ContextApi/TokenApi';

import { useNavigate } from "react-router-dom";

const WishList = () => {
    const{wishlist,
        addToWishlist,
        removeFromWishlist,
        wishlistCount,
        isInWishlist,clearWishList} =useAuth()
        const navigate = useNavigate();
        const handleBtn = () => {
          clearWishList()
          navigate("/");
        
          };
  return (
    <>
      <div className="wishlist">
      <h1 className='Header-cart'>WishList</h1>
      <div className="cart-container">
      {wishlist.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.imgSrc} alt="images" className="card-media" />
            <p className='cart-title'>{item.title}</p>
            <p className='cart-price'>${item.price}</p>
          <button onClick={() =>  removeFromWishlist(item.id)} className="cart-button"><MdDelete/></button>
           </div>
        ))}
     </div>
     <button onClick={handleBtn} className="payment-button">Clear Wishlist</button>
      </div>
    </>
  )
}

export default WishList
