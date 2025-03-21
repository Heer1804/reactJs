const ProductCard = ({product , onBuy}) => {
    console.log(product)
    return (
        <>
            {/* {product.map((data,index) => {
                    <div key={index} style={{ border: "1px solid purple",
                        padding: "10px",
                        margin: "10px",
                        borderRadius: "12px",}}> 
                        <ul><li>{data.name}</li></ul>
                    </div>
                })} */}


<ul style={{ listStyleType: "none", padding: "0", margin: "0", display: "flex", flexWrap: "wrap", justifyContent: "center" }}>

        <li 
            style={{ 
                border: "1px solid purple", 
                width: "200px", 
                padding: "40px", 
                margin: "10px", 
                backgroundColor: product.inStock ? "lightgrey" : "rgb(246 214 255)",
                borderRadius: "8px" 
            }}
        > 
            <div style={{ textAlign: "center" }}>
                <h2 style={{ margin: "0", color: product.inStock ? "white" : "purple" }}>{product.name}</h2>
                <p style={{ margin: "0", color: product.inStock ? "white" : "purple" }}>Price: {product.price}</p>
                    <img style={{height: "100px", marginTop:"5px"}} src={product.image}></img>
                    <button onClick={() => onBuy(product.name)} disabled={!product.inStock}>
          Buy Now
        </button>
            </div>
        </li>
 
</ul>

        </>
    )
};

export default ProductCard;

