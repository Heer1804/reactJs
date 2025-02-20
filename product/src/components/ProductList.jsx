import React from 'react'
import ProductCard from './ProductCard'

function ProductList({products}) {
    const handleBuy = (productName) => {
      alert(`You bought ${productName}`)
    }
  return (
    <div>
    <h2>Product List</h2>
    {products.length > 0 ? (
      products.map((product) => (
        <ProductCard key={product.name} product={product} onBuy={handleBuy} />
      ))
    ) : (
      <p>No product available</p>
    )}
  </div>
  )
}

export default ProductList


