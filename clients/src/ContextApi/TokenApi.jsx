import { createContext, useContext, useEffect, useState } from "react";
export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [products, setProducts] = useState([]);
  const authorizationToken = `Bearer ${token}`;
  const [cart, setCart] = useState(() => {
    const storedCart = localStorage.getItem('cart');
    return storedCart ? JSON.parse(storedCart) : [];
  });
  // const [cart,setCart] =useState([])
  const [cartCount, setCartCount] = useState(() => {
    const storedCart = localStorage.getItem('cart');
    return storedCart ? JSON.parse(storedCart).length : 0;
  });
  const [wishlist, setWishlist] = useState(() => {
    const storedWishlist = localStorage.getItem('wishlist');
    return storedWishlist ? JSON.parse(storedWishlist) : [];
  });
  
  const [wishlistCount, setWishlistCount] = useState(() => {
    const storedWishlist = localStorage.getItem('wishlist');
    return storedWishlist ? JSON.parse(storedWishlist).length : 0;
  });
  
  
/*..........................
............................
TOKEN LOGIC GET IN FRONTEND 
......................................
........................*/
const storeTokenInLS = (serverToken) => {
  setToken(serverToken);
  localStorage.setItem("token", serverToken);
};

  const isLoggedIn = !!token;
/*..........................
............................
USER LOGOUT LOGIC
......................................
........................*/
  const LogoutUser = () => {
    setToken("");
    localStorage.removeItem("token");
  };

  /*..........................
............................
USER AUTHENTICATION LOGIC
......................................
........................*/
  const userAuthentication = async () => {
    try {
      setIsLoading(true)
      const response = await fetch("http://localhost:5000/api/auth/user", {
        method: "GET",
        headers: {
          Authorization: authorizationToken,
        },
      });

      if (response.ok) {
        const data = await response.json();
        setUser(data.msg);
        setIsLoading(false)
      } else {
        console.error("Error fetching user data");
        setIsLoading(false)
      }
    } catch (error) {
      console.log(error);
    }
  };



  /* Get product data ........................
  data products ka ..................................
  .*/

  const getProductData = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/data/product", {
        method: "GET",
      });

      if (response.ok) {
        const productsData = await response.json();
        setProducts(productsData.data);
      } else {
        console.error("Error fetching product data");
      }
    } catch (error) {
      console.log(error);
    }
  };
// Product add to cart functionality

const addToCart = (product) => {
  const existingProductIndex = cart.findIndex(item => item.id === product.id);

  if (existingProductIndex !== -1) {
    const updatedCart = [...cart];
    updatedCart[existingProductIndex] = {
      ...updatedCart[existingProductIndex],
      quantity: updatedCart[existingProductIndex].quantity + 1
    };
    setCart(updatedCart);
  } else {
    setCart([...cart, { ...product, quantity: 1 }]);
  }

  setCartCount(prevCount => prevCount + 1); // Increment cartCount
};

const removeFromCart = (productId) => {
  setCart(cart.filter(item => item.id !== productId));
  setCartCount(prevCount => prevCount - 1); // Decrement cartCount
};

const incrementQuantity = (productId) => {
  const updatedCart = cart.map(item => {
    if (item.id === productId) {
      return { ...item, quantity: item.quantity + 1 };
    }
    return item;
  });
  setCart(updatedCart);
  setCartCount(prevCount => prevCount + 1); // Increment cartCount
};

const decrementQuantity = (productId) => {
  const updatedCart = cart.map(item => {
    if (item.id === productId && item.quantity > 1) {
      return { ...item, quantity: item.quantity - 1 };
    }
    return item;
  });
  setCart(updatedCart);
  setCartCount(prevCount => prevCount - 1); // Decrement cartCount
};
// Function to add a product to the wishlist
const addToWishlist = (product) => {
  setWishlist([...wishlist, product]);
  setWishlistCount(prevCount => prevCount + 1); // Increment wishlist count
  localStorage.setItem('wishlist', JSON.stringify([...wishlist, product]));
};

// Function to remove a product from the wishlist
const removeFromWishlist = (productId) => {
  setWishlist(wishlist.filter(item => item.id !== productId));
  setWishlistCount(prevCount => prevCount - 1); // Decrement wishlist count
  localStorage.setItem('wishlist', JSON.stringify(wishlist.filter(item => item.id !== productId)));
};

// Function to check if a product is in the wishlist
const isInWishlist = (productId) => {
  return wishlist.some(item => item.id === productId);
};


const clearCart = () => {
  setCart([]);
  setCartCount(0); 
 

};
const clearWishList = ()=>{
  setWishlist([]);
  setWishlistCount(0)
}



/*..........................
............................
NAVBAR RESPONSIVE LOGIC
......................................
........................*/
  function showMenu() {
    let menu = document.querySelector("#menu-bar");
    let navlink = document.querySelector("#navlinks");
    menu.classList.toggle("fa-times");
    navlink.classList.toggle("active");
  }

  useEffect(() => {
    userAuthentication();
    getProductData();
  
    // addToCart()
    // removeFromCart()
  
  }, [token]);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
    setCartCount(cart.length);
  }, [cart]);

  const contextValue = {
    isLoggedIn,
    token,
    storeTokenInLS,
    LogoutUser,
    user,
    products,
    showMenu,
    authorizationToken,
    isLoading,
    cart,
    addToCart,
    cartCount,
    removeFromCart,
    incrementQuantity,
    decrementQuantity,
    clearCart,
    wishlist,
  addToWishlist,
  removeFromWishlist,
  wishlistCount,
  isInWishlist,
  clearWishList
   
  };

  return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const authContextValue = useContext(AuthContext);
  if (!authContextValue) {
    throw new Error("useAuth used outside of the Provider");
  }
  return authContextValue;
};
