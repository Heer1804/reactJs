import { useState, useEffect } from "react";
import SignUp from "./SignUp";
import LogIn from "./LogIn";

const FormController = ({ theme }) => {
  const [isLogin, setIsLogin] = useState(false);
  const [credentials, setCredentials] = useState(null);
  const [userData, setUserData] = useState(null);

  // Load stored credentials from localStorage when the component mounts
  useEffect(() => {
    const storedCredentials = localStorage.getItem("credentials");
    const storedUser = localStorage.getItem("userData");

    if (storedCredentials) {
      setCredentials(JSON.parse(storedCredentials));
    }
    if (storedUser) {
      setUserData(JSON.parse(storedUser));
    }
  }, []);

  const handleFormSubmit = (data) => {
    if (isLogin) {
      setUserData(data);
      localStorage.setItem("userData", JSON.stringify(data));
    } else {
      const newCredentials = {
        name: data.name,
        email: data.email,
        password: data.password,
      };
      setCredentials(newCredentials);
      localStorage.setItem("credentials", JSON.stringify(newCredentials)); 
      setIsLogin(true);
    }
  };

  const handleLogout = () => {
    setUserData(null);
    localStorage.removeItem("userData");
  };

  const isLightTheme = theme === "light";

  const containerStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    backgroundColor: isLightTheme ? "rgb(214 225 247)" : "rgb(30 30 30)",
  };

  return (
    <div style={containerStyle}>
      {userData ? (
        <div style={{ textAlign: "center", color: isLightTheme ? "black" : "white" }}>
          <h2>Welcome, {userData.name}!</h2>
          <button
            style={{
              marginTop: "20px",
              background: "transparent",
              color: "white",
              border: "none",
              padding: "10px",
              borderRadius: "5px",
              cursor: "pointer",
            }}
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      ) : (
        <>
          <div>
            {isLogin ? (
              <LogIn
                onSubmit={handleFormSubmit}
                credential={credentials || { name: "", email: "", password: "" }}
                theme={theme}
              />
            ) : (
              <SignUp onSubmit={handleFormSubmit} theme={theme} />
            )}
          </div>
          <button
            style={{
              marginTop: "20px",
              textDecoration: "underline",
              background: "none",
              border: "none",
              color: isLightTheme ? "black" : "white",
              cursor: "pointer",
            }}
            onClick={() => setIsLogin(!isLogin)}
          >
            Switch to {isLogin ? "Sign Up" : "Log In"}
          </button>
        </>
      )}
    </div>
  );
};

export default FormController;
