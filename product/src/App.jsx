import './App.css'
import ProductCard from './components/ProductCard'
import laptop from './assets/1.png'
import ps5 from './assets/2.png'
import mobile from './assets/3.png'
import pc from './assets/1.webp'
import tablet from './assets/4.png'
import tv from './assets/5.png'
import spider from './assets/2.jpg'
import ProductList from './components/ProductList'

function App() {

  const product = [
    {name : "Laptop", inStock : true , price : 35000 , image : laptop},
    {name : "PS5", inStock : true , price : 50000 , image : ps5},
    {name : "Mobile", inStock : false , price : 15000 , image : mobile},
    {name : "Pc", inStock : false , price : 45000 , image : pc},
    {name : "Tablet", inStock : true , price : 25000 , image : tablet},
    {name : "SpiderMan", inStock : false , price : 5000 , image : spider},
    {name : "TV" , inStock : true , price : 35000 , image : tv}, 
  ]

  return (
    <>
      <ProductList products={product} />
    </>
  )
}

export default App


