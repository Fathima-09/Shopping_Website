import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Payment = ({ cartItems }) => {
  const totalAmount = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [orderConfirmed, setOrderConfirmed] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (cartItems.length === 0) {
      alert("Your cart is empty. Please add items to the cart before making a payment.");
      return;
    }
    setOrderConfirmed(true);
  };

  
  useEffect(() => {
    if (orderConfirmed) {
      const timer = setTimeout(() => {
        navigate("/homepage");
      }, 5000);
      return () => clearTimeout(timer); 
    }
  }, [orderConfirmed, navigate]);

  return (
    <div
      style={{
        backgroundImage:
          'url("https://plus.unsplash.com/premium_photo-1661774910035-05257f7d73a6?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        textAlign: "center",
      }}
    >
      {!orderConfirmed ? (
        <div>
          <h1>Payment</h1>
          <h2>Total Amount: ${totalAmount}</h2>
          <form onSubmit={handleSubmit}>
            <input
              style={{
                borderRadius: "6px",
                width: "300px",
                height: "45px",
                backgroundColor: "aliceblue",
              }}
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />{" "}
            <br /> <br />
            <input
              style={{
                borderRadius: "6px",
                width: "300px",
                height: "45px",
                backgroundColor: "aliceblue",
              }}
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />{" "}
            <br /> <br />
            <button className="btn btn-secondary" type="submit">
              Confirm Order
            </button>
          </form>
        </div>
      ) : (
        <OrderDetails
          name={name}
          email={email}
          cartItems={cartItems}
          totalAmount={totalAmount}
        />
      )}
    </div>
  );
};

const OrderDetails = ({ name, email, cartItems, totalAmount }) => {
  return (
    <div style={{ padding: "20px", textAlign: "center", color: "black" }}>
      <h1>Order Details</h1>
      <p>
        <strong>Name:</strong> {name}
      </p>
      <p>
        <strong>Email:</strong> {email}
      </p>
      <h2>Purchased Products:</h2>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {cartItems.map((item, index) => (
          <li key={index} style={{ margin: "10px 0" }}>
            <strong>{item.title}</strong> - ${item.price}
            <p>Quantity: {item.quantity}</p>
          </li>
        ))}
      </ul>
      <h2>Total Amount: ${totalAmount}</h2>
      <p>Thank you for your order!.</p>
    </div>
  );
};

export default Payment;