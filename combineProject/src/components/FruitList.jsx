import React, { useState, useRef, useEffect } from "react";

const FruitList = ({ theme }) => {
  const [fruits, setFruits] = useState([
    { id: 1, name: "Apple", color: "red", quantity: 10 },
    { id: 2, name: "Grapes", color: "green", quantity: 15 },
    { id: 3, name: "BlueBerry", color: "blue", quantity: 5 },
  ]);

  const [newFruit, setNewFruit] = useState({ name: "", color: "", quantity: 1 });
  const newfruitRef = useRef(null);
  const isLightTheme = theme === "light";

  // Set body background color based on theme
  useEffect(() => {
    document.body.style.backgroundColor = isLightTheme ? "rgb(214, 225, 247)" : "rgb(30, 30, 30)";
  }, [theme]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewFruit({
      ...newFruit,
      [name]: name === "quantity" ? Number(value) : value,
    });
  };

  const addFruit = (e) => {
    e.preventDefault();
    if (!newFruit.name || !newFruit.color) return;
    const newId = fruits.length > 0 ? Math.max(...fruits.map((f) => f.id)) + 1 : 1;
    setFruits([...fruits, { ...newFruit, id: newId }]);
    setNewFruit({ name: "", color: "", quantity: 1 });
    newfruitRef.current.focus();
  };

  const deleteFruit = (id) => {
    setFruits(fruits.filter((f) => f.id !== id));
  };

  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px",
  };

  const cardStyle = {
    background: isLightTheme ? "#d6e1f7" : "#222",
    color: isLightTheme ? "black" : "white",
    padding: "20px",
    borderRadius: "12px",
    boxShadow: isLightTheme
      ? "0 4px 6px rgba(0, 0, 0, 0.1)"
      : "0 4px 6px rgba(255, 255, 255, 0.18)",
    textAlign: "center",
    width: "250px",
    marginTop: "120px",
  };

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <h1>Fruit List</h1>
        <p>Manage your inventory</p>
        <form onSubmit={addFruit} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <input type="text" name="name" ref={newfruitRef} value={newFruit.name} onChange={handleInputChange} placeholder="Fruit name" required />
          <input type="text" name="color" value={newFruit.color} onChange={handleInputChange} placeholder="Color" required />
          <input type="number" name="quantity" value={newFruit.quantity} onChange={handleInputChange} min={1} placeholder="Quantity" required />
          <button type="submit" style={{ backgroundColor: "rgb(100, 108, 255)", color: "white" }}>Add Fruit</button>
        </form>
      </div>
      <div style={{ marginTop: "20px", width: "350px" }}>
        {fruits.length === 0 ? (
          <p>No Fruits in the list.</p>
        ) : (
          fruits.map((fruit) => (
            <div key={fruit.id} style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "10px",
              background: isLightTheme ? "white" : "#444",
              borderRadius: "8px",
              marginTop: "10px",
              color: isLightTheme ? "black" : "white"
            }}>
              <div>
                <span style={{
                  display: "inline-block",
                  width: "15px",
                  height: "15px",
                  backgroundColor: fruit.color,
                  borderRadius: "50%",
                  marginRight: "10px"
                }}></span>
                <strong>{fruit.name}</strong> - {fruit.quantity} in stock
              </div>
              <button onClick={() => deleteFruit(fruit.id)} style={{ background: "rgb(100, 108, 255)", color: "white", border: "none", borderRadius: "5px", padding: "5px" }}>Delete</button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default FruitList;
