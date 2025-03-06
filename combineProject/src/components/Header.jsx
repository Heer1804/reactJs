import React from "react";

function Header({ activeTab, setActiveTab, theme }) {
  const navItems = [
    { id: "home", label: "Home" },
    { id: "toDo", label: "To Do List" },
    { id: "counter", label: "Counter" },
    { id: "clock", label: "Clock" },
    { id: "timer", label: "Timer" },
    { id: "form", label: "Sign Up" },
  ];

  const headerStyle = {
    width: "100%",
    boxSizing: "border-box",
    position: "fixed",
    top: "0",
    left: "0",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "12px 30px",
    borderBottom: `1px solid ${theme === "light" ? "#ddd" : "#444"}`,
    backgroundColor: theme === "light" ? "#fff" : "#1a1a1a",
    zIndex: "1000",
  };

  const navStyle = {
    display: "flex",
    gap: "20px",
    padding: "0",
    margin: "0",
    listStyle: "none",
    flexWrap: "nowrap",
    overflow: "visible",
  };

  const navItemStyle = (isActive) => ({
    fontSize: "20px",
    fontWeight: "bold",
    cursor: "pointer",
    padding: "10px 18px",
    whiteSpace: "nowrap",
    minWidth: "max-content",
    flexShrink: 0,
    color: isActive ? "white" : theme === "light" ? "#222" : "#fff",
    backgroundColor: isActive ? "#646cff" : "transparent",
    transition: "all 0.3s ease-in-out",
    borderRadius: "5px",
  });

  const logoStyle = {
    display: "flex",
    alignItems: "center",
    height: "20px",
  };

  const logoImgStyle = {
    height: "40px",
    width: "auto",
    marginRight: "20px",
    marginLeft: "30px",
  };

  return (
    <header style={headerStyle}>
      <div style={logoStyle}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
          alt="React Logo"
          style={logoImgStyle}
        />
      </div>
      <nav>
        <ul style={navStyle}>
          {navItems.map((item) => (
            <li
              key={item.id}
              style={navItemStyle(activeTab === item.id)}
              onClick={() => setActiveTab(item.id)}
            >
              {item.label}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
