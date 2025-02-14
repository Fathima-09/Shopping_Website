import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Products from './components/products';
import Cart from './components/ucart';
import Payment from './components/payment';
import React, { useState } from "react";
import Homepage from './components/homepage';
import Contact from './components/contact';
import Login from './components/loginform';
import Navbar from './components/navbar';
import { BrowserRouter as Router, Routes, Route, Link,Navigate } from "react-router-dom";






function App() {
 

  const [cartItems, setCartItems] = useState([]);

  

  const addToCart = (product) => {
    setCartItems((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  
 const removeOneFromCart = (productId) => {
   setCartItems((prevCart) =>
     prevCart
      .map((item) =>
       item.id === productId
           ? { ...item, quantity: item.quantity - 1 }
           : item
      )
      .filter((item) => item.quantity > 0)
  );
 };

 const removeFromCart = (productId) => {
   setCartItems((prevCart) =>
     prevCart.filter((item) => item.id !== productId)
   );
 };

const [isLoggedIn, setIsLoggedIn] = useState(false); // Login state

const handleLogin = () => {
  setIsLoggedIn(true);
  localStorage.setItem('isLoggedIn', 'true'); // Persist login state
};



  return (
   <>
     
     <Router>
     {isLoggedIn && <Navbar cartItems={cartItems} />}

    
    <Routes>
      <Route path='/homepage' element={isLoggedIn ? <Homepage /> : <Navigate to="/" replace />}/>
      <Route path='/products' element={ <Products addToCart={addToCart} /> }/>
      <Route path='/contact' element={ <Contact/>}/>
      <Route path='/ucart' element={ <Cart addToCart={addToCart} cartItems={cartItems} 
      removeOneFromCart={(id) =>
        setCartItems(
          cartItems.map((item) =>
            item.id === id && item.quantity > 1
              ? { ...item, quantity: item.quantity - 1 }
              : item  )
            )
          }
          removeFromCart={(id) =>
            setCartItems(cartItems.filter((item) => item.id !== id))
          }  />}/>
       <Route path='/payment' element={ <Payment cartItems={cartItems} />}/>
      <Route path='/' element={<Login onLogin={handleLogin} />}/>
   </Routes>
   </Router>


   </>
  );
}

export default App;