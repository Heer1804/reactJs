import React from "react";

function ProductLists({ product, addToCart }) {
  return (
    <div style={{
      border: "1px solid #ddd",
      padding: "15px",
      margin: "90px 10px 10px 10px",
      borderRadius: "8px",
      width: "200px",
      backgroundColor : "#f9f9f9",
      boxShadow : "0 0 5px rgba(0,0,0,0.1)",
    }}>
      <img style={{height : '200px'}} src={product.image} alt={product.name}  />
      <h3 >{product.name}</h3>
      <p>₹{product.price}</p>
      <button style={{backgroundColor : 'rgb(1 18 48 / 88%)', color : 'white'}} onClick={() => addToCart(product)}>
        Add to Cart
      </button>
    </div>
  );
}



export default ProductLists;



