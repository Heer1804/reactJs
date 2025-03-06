import { useState } from "react";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import ThemeToggle from "./components/ThemeToggle";
import Counter from "./components/Counter";
import Clock from "./components/Clock";
import Timer from "./components/Timer";
import FormController from "./components/FormController";

const styles = {
  light: {
    bg: "#f9f9f9",
    text: "#222",
    card: "#fff",
    border: "#ddd",
  },
  dark: {
    bg: "#1e1e1e",
    text: "#f5f5f5",
    card: "#2c2c2c",
    border: "#444",
  },
};

function App() {
  const [theme, setTheme] = useState("dark");
  const [activeTab, setActiveTab] = useState("home");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <div
      className={theme}
      style={{
        width: "100vw",
        height: "100dvh", // Fix for mobile viewport issues
        margin: "0",
        padding: "0",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Header activeTab={activeTab} setActiveTab={setActiveTab} theme={theme} />

      <main
        style={{
          width: "100vw",
          flex: "1",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: theme === "light" ? "#f5f5f5" : "#1e1e1e",
          overflow: "auto",
        }}
      >
        {activeTab === "home" && (
          <div
            style={{
              textAlign: "center",
              padding: "20px",
              color: theme === "light" ? "#333" : "#fff" 
            }}
          >
            <h1 style={{ color: theme === "light" ? "#333" : "#fff" }}>
              Welcome to the Home Page
            </h1>
            <p style={{ margin: "90px", fontSize: "20px" }}>React is a powerful JavaScript library used for building interactive and dynamic user interfaces, especially for single-page applications (SPAs). It was developed by Facebook and has gained immense popularity due to its efficient rendering, component-based structure, and strong community support.</p>
            <p style={{ margin: "90px", fontSize: "20px" }}>The markup syntax you’ve seen above is called JSX. It is optional, but most React projects use JSX for its convenience. All of the tools we recommend for local development support JSX out of the box.</p>

          </div>
        )}
        {activeTab === "toDo" && <TodoList theme={theme} />}
        {activeTab === "counter" && <Counter theme={theme} />}
        {activeTab === "clock" && <Clock theme={theme} />}
        {activeTab === "timer" && <Timer theme={theme} />}
        {activeTab === "form" && <FormController theme={theme} />}


      </main>

      <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
    </div>
  );
}

export default App;
