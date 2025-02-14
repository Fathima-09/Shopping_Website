import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Cart = ({ cartItems, addToCart, removeOneFromCart, removeFromCart }) => {
  const totalAmount = cartItems.reduce(
    (sum, card) => sum + card.price * card.quantity,
    0
  );
  const navigate = useNavigate();
 const handleClick=()=>{
    navigate ('/payment')
 }
  return (
    <div className="Cart-Container"  style={{

      backgroundImage:'url("https://i.pinimg.com/736x/15/da/2b/15da2bf042533c09a91d12fc7d154c7e.jpg")',
      backgroundPosition: 'center',
      textAlign:"center",
      color:'white',
      padding:'15px',
      backgroundSize:'cover',
      height:'130vh'
      }}>

      <h1>Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty!</p>
      ) : (
        cartItems.map((item, index) => (
          <div key={index} className="Cart-Item">
            <h3>{item.name}</h3>
            <h4>{item.title}</h4>
            
            <p>Price: ${item.price}</p>
            <p>Quantity: {item.quantity}</p>
            <button className="btn btn-success m-2" onClick={() => addToCart(item)}>+</button>
            <button className="btn btn-warning m-2" onClick={() => removeOneFromCart(item.id)}>
              -
            </button>
            <button className="btn btn-danger m-2" onClick={() => removeFromCart(item.id)}>Remove All</button>
            
          </div>
        ))
      )}
      <h2>Total: ${totalAmount}</h2>
      <Link to="/payment">
        <button style={{backgroundColor:'pink',borderRadius:'8px'}} onClick={handleClick}>Proceed to Payment</button>
      </Link>
    </div>
  );
};

export default Cart;