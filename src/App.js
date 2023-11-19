import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import SignUpPage from './pages/SignUpPage'; 

function App() {
  const handleLogin = (username) => {
    console.log(`User ${username} logged in successfully.`);
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<LoginPage onLogin={handleLogin} />} 
        />
        <Route
          path="/login"
          element={<LoginPage onLogin={handleLogin} />} 
        />
        <Route path="/home" element={<HomePage />} />
        <Route
          path="/signup"
          element={<SignUpPage onSignUp={(username) => console.log(`User ${username} signed up successfully.`)} />} 
        />
      </Routes>
    </Router>
  );
}

export default App;
