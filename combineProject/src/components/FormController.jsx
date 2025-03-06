import { useState } from "react";
import SignUp from "./SignUp";
import LogIn from "./LogIn";

const FormController = ({ theme }) => {
  const [isLogin, setIsLogin] = useState(false);
  const [credentials, setCredentials] = useState(null);
  const [userData, setUserData] = useState(null);

  const handleFormSubmit = (data) => {
    if (isLogin) {
      setUserData(data);
    } else {
      setCredentials({
        name: data.name,
        email: data.email,
        password: data.password,
      });
      setIsLogin(true);
    }
  };

  // Theme-based styles
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
        <div>
          <h2>Welcome {userData.name}</h2>
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
            Switch to {isLogin ? "Signup" : "Login"}
          </button>
        </>
      )}
    </div>
  );
};

export default FormController;