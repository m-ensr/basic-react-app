import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { checkUserExists } from "./Users";

const LoginPage = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username === "admin" && password === "admin") {
      onLogin(username);
      navigate("/home");
    } else {
      const user = checkUserExists(username, password);

      if (user) {
        onLogin(username);
        navigate("/home");
      } else {
        setError("Invalid username or password");
      }
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSignUpClick = () => {
    navigate("/signup");
  };

  return (
    <div style={styles.container}>
      <div style={styles.loginContainer}>
        <div style={styles.loginHeader}>
          <h1 style={{ margin: 0, color: "#fff" }}>Login</h1>
        </div>
        <div style={styles.loginForm}>
          <div style={styles.formGroup}>
            <label htmlFor="username" style={styles.label}>
              Username:
            </label>
            <input
              type="text"
              id="username"
              name="username"
              style={styles.input}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div style={styles.formGroup}>
            <label htmlFor="password" style={styles.label}>
              Password:
            </label>
            <div style={styles.passwordContainer}>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                style={styles.input}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                style={styles.showHideButton}
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>
          <div style={styles.formGroup}>
            <button type="button" style={styles.button} onClick={handleLogin}>
              Login
            </button>
          </div>
          {error && <p style={styles.error}>{error}</p>}
          <p style={styles.signUpText}>
            Don't have an account?{" "}
            <span style={styles.signUpLink} onClick={handleSignUpClick}>
              Sign up
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    margin: 0,
    backgroundColor: "#f5f5f5",
  },
  loginContainer: {
    backgroundColor: "#fff",
    borderRadius: "8px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    overflow: "hidden",
    width: "300px",
  },
  loginHeader: {
    backgroundColor: "#4285f4",
    color: "#fff",
    padding: "20px",
    textAlign: "center",
  },
  loginForm: {
    padding: "20px",
  },
  formGroup: {
    marginBottom: "20px",
  },
  label: {
    display: "block",
    marginBottom: "8px",
    fontWeight: "bold",
  },
  input: {
    width: "100%",
    padding: "10px",
    boxSizing: "border-box",
    border: "1px solid #ccc",
    borderRadius: "4px",
    fontSize: "16px",
  },
  passwordContainer: {
    position: "relative",
  },
  showHideButton: {
    position: "absolute",
    top: "50%",
    right: "10px",
    transform: "translateY(-50%)",
    border: "none",
    background: "none",
    cursor: "pointer",
    fontSize: "14px",
    color: "#4285f4",
  },
  button: {
    backgroundColor: "#4285f4",
    color: "#fff",
    padding: "10px 20px",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "16px",
  },
  error: {
    color: "red",
    marginTop: "10px",
  },
  signUpText: {
    textAlign: "center",
    marginTop: "10px",
  },
  signUpLink: {
    cursor: "pointer",
    color: "#4285f4",
  },
};

export default LoginPage;
