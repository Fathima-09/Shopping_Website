import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Products = ({ addToCart }) => {
  const productList = [
    {
      id: 1,
      title: "Evening Dresses",

      name: "Product 1",
      price: 100,
      image: "https://i.pinimg.com/236x/14/db/d9/14dbd935423c7280a6cd2e46dfaa491a.jpg",

    },
    {
      id: 2,
      title: "Maxi Dress",

      name: "Product 2",
      price: 200,
      image: "https://i.pinimg.com/736x/08/a6/fd/08a6fd8ae7b945dbbe5f1191af9eb62f.jpg",
    },
    {
      id: 3,
      title: "Bodycon Dress",

      name: "Product 3",
      price: 200,
      image:   "https://sassafras.in/cdn/shop/products/SFDRSS10372-1_1200x1200_crop_center.jpg?v=1666393990",
    },
    {
      id: 4,
      title: "Traditional Dress",

      name: "Product 4",
      price: 300,
      image:  "https://i.pinimg.com/564x/f5/a9/27/f5a927c66701e34b3fd5ee81dfaa4c7a.jpg",
    },
  ];

  return (
    <body style={{backgroundImage:'url("https://img.freepik.com/free-vector/hand-drawn-shopping-pattern-design_23-2149628702.jpg")',
      backgroundSize:"cover",
      backgroundPosition:"center",
      height: "100vh",
    }}>
    <div className="container" >
      <h1 className="text-center p-3"></h1>
      <div className="row justify-content-center">
        {productList.map((product) => (
          <div className="col-md-3" key={product.id}>
            <div className="card mb-3">
              <img
                src={product.image}
                className="card-img-top"
                alt={product.name}
              />
              <div className="card-body text-center">
                <h5 className="card-title">{product.title}</h5>
                
                <p className="card-text">Price: ${product.price}</p>
                <button
                  className="btn btn-primary"
                  onClick={() => addToCart(product)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-4">
       
      </div>
    </div>
    </body>
  );
};

export default Products;