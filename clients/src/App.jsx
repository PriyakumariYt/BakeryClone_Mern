import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import * as ScrollReveal from "scrollreveal"; // ScrollReveal ko sahi tareeke se import karein

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Register from './pages/Register';
import Login from './pages/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { useAuth } from './ContextApi/TokenApi';
import { Logout } from './pages/Logout';

import Product from './pages/Product';
import { Outlet } from "react-router-dom";
import Cart from './pages/Cart';
import Payment from './pages/Payment';
import WishList from './pages/WishList';

function App() {
  const { cart, removeFromCart, incrementQuantity, decrementQuantity, clearCart, wishlist,
    addToWishlist,
    removeFromWishlist,
    wishlistCount,
    isInWishlist } = useAuth();



  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          {/* <Route path="/service" element={<Service />} /> */}
          <Route path="/product" element={<Product />} />
       
          <Route path="/payment" element={<Payment />} />
          <Route
            path="/cart"
            element={<Cart
              cart={cart}
              removeFromCart={removeFromCart}
              incrementQuantity={incrementQuantity}
              decrementQuantity={decrementQuantity}
              clearCart={clearCart}
            />}
          />
          <Route path="/wishlist"
          element = {<WishList
            wishlist={wishlist}
            addToWishlist={addToWishlist}
            removeFromWishlist={removeFromWishlist}
            isInWishlist={isInWishlist}

          />}/>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </Router>
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
