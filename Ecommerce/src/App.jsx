import { useState } from "react";
import "./App.css";
import ProductLists from "./components/ProductLists";
import ProductCart from "./components/ProductCart";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
function App() {

  const products = [
    {
      id: 1,
      name: "Laptop",
      price: 35000,
      image:
        "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSOy6AIf78lLNVGV8w_NBcfNEps_0PpOwTEjh3mQiAlQAKo2319ByUuk0Hgy9Q4KJXSgMcnmwPijL-w9qxBrPFqzyEm7gYI5rR31HV4Jhw1PxHnv6YV4huF&usqp=CAE",
    },
    {
      id: 2,
      name: "Mobile",
      price: 25000,
      image:
        "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRy2sNKptudsHWCjTmYGTtQDzGMOuxPKtF7aOV-VfaIhTJ1rkdVbNtexT6NzA3FcHbGKERvdY1mcxb8WlkEAKhAwTo8jFD7K7ty5FEl1waY10gxK6QdnJmtXg&usqp=CAE",
    },
    {
      id: 3,
      name: "Watch",
      price: 15000,
      image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRRdp-v_FdLGAcw86-1yj4dF5W_jaI5TQ-CBRK3XTfkgLCdUo7wDoSYN812XKJCznA2NiBp0F9hLoiSCaKvKWQlK35grrs1y-CDithhm8wvNyMzwTWEor5LTg&usqp=CAE"
    },
    {
      id: 4,
      name: "Headphone",
      price: 5000,
      image:
        "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSNaph_0L6SmdyboJqn7K1wafne_HtX5u7BbGcKmYOwqu1RGsLzmmj19GHw8VpfwSSKwBP5a0iPLuod7BhIiWyNOUq9AvNYoEJNBrKFiiVslimNgldnO4yNeA&usqp=CAE",
    },
    // {
    //   id: 5,
    //   name: "Camera",
    //   price: 10000,
    //   image:"https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRkacWElhbM514JhKBKa-jrQ42JYOLSZiuLj36fcn7lAXyoFO4lbSN9g-IjoIc7z89rYU5WtIJOC0NWW14Qei6WtWiGXGaTDG0GDFDw8gj41QWnULysdDy6GQ&usqp=CAE"
    // }
  ];

  

  const [cartItem, setCartItem] = useState([]);

  const addToCart = (product) => {
    setCartItem((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);

      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...prevItems, { ...product, quantity: 1 }];

    })
  }

  const removeCart = (productId) => {
    setCartItem((prevItems) =>
      prevItems.filter((item) => item.id !== productId)
    );
  };

  const removeItem = (productId) => {
    setCartItem((prevItems) => {
      return prevItems.map((item)=>{
        if(item.id === productId){
          return {...item, quantity : item.quantity - 1}
        }
        return item
      })
      .filter((item) => item.quantity > 0)
    })
  }

  const cartItemCount = cartItem.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <div
      style={{
       
      }}
    >
      <Navbar cartItemCount={cartItemCount}/>
  
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {products.map((product) => (
          <ProductLists
            key={product.id}
            product={product}
            addToCart={addToCart}
          />
        ))}
      </div>
      <ProductCart items={cartItem} removeCart={removeCart} removeItem={removeItem} />
      <Footer/>

    </div>
  );
}

export default App;





