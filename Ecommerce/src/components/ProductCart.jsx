import React from 'react';

function ProductCart({ items, removeItem, removeCart }) {
    const totalPrice = items.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );

    return (
        <div style={{ margin: "auto 50px", padding: "50px", marginTop: "-30px" }}>
            <h2>Shopping Cart</h2>
            <div>
                {items.map((item) => (
                    <div 
                        key={item.id} 
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            padding: "15px",
                            border: "1px solid #ccc",
                            margin: "8px 0",
                            backgroundColor: "#f9f9f9",
                            borderRadius: "5px",
                            boxShadow: "0 0 5px rgba(0,0,0,0.1)",
                            position: "relative"
                        }}
                    >
                        <span 
                            style={{
                                color: 'red',
                                fontSize: '20px',
                                fontWeight: 'bold',
                                cursor: 'pointer',
                                position: 'absolute',
                                top: '5px',
                                left: '8px'
                            }}
                            onClick={() => removeCart(item.id)}
                        >
                            ✖
                        </span>
                        
                        <img style={{ height: "100px" }} src={item.image} alt={item.name} />
                        <h3>{item.name}</h3>
                        <p>${item.price} x {item.quantity}</p>
                        <button style={{backgroundColor:'#8080805c'}} onClick={() => removeItem(item.id)}>Remove</button>
                    </div>
                ))}
                <h3 style={{ marginTop: "15px" }}>Total: ${totalPrice.toFixed(2)}</h3>
            </div>
        </div>
    );
}

export default ProductCart;
