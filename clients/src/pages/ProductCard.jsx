
// import React from 'react';
// import { useAuth } from '../ContextApi/TokenApi';
// import { FaHeart } from "react-icons/fa";
// import { FaShoppingCart } from "react-icons/fa";


// const ProductCard = ({ imgSrc, title, price, productId }) => {
//   const { addToCart,  addToWishlist } = useAuth();

//   return (
//     <div className='col-md-4 col-10 mx-auto'>
//       <div className="card">
//         <img src={imgSrc} alt={title} />
//         <div className="card-body">
//           <h5 className="card-title">{title}</h5>
//           <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//           <h4 className='product-price'>${price}</h4>
//           <div className="btnContainer">
//           <button className="btn-primary" onClick={() => addToCart({ id: productId, imgSrc, title, price, quantity: 1 })}>
//              <FaShoppingCart  style={{ color: 'cyan' }}/>
//           </button>
//           <div className="btn-primary" onClick={() => addToWishlist({ id: productId, imgSrc, title, price })}> <FaHeart style={{ color: '#FA5F55' }}/></div>
//           </div>
        
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ProductCard;

import React from 'react';
import { FaHeart } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { useAuth } from '../ContextApi/TokenApi';

const ProductCard = ({ imgSrc, title, price, productId }) => {
  const { addToCart,addToWishlist } = useAuth();

  return (
    <div className='col-md-12 col-12 mx-auto'>
      <div className="card">
        <img src={imgSrc} alt={title} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <h4 className='product-price'>${price}</h4>
          <div className="btnContainer">
          <button className="btn-primary" onClick={() => addToCart({ id: productId, imgSrc, title, price, quantity: 1 })}>
             <FaShoppingCart  style={{ color: 'cyan' }}/>
          </button>
          <div className="btn-primary" onClick={() => addToWishlist({ id: productId, imgSrc, title, price })}> <FaHeart style={{ color: '#FA5F55' }}/></div>
        </div>
  

        </div>
      </div>
    </div>
  );
}

export default ProductCard;