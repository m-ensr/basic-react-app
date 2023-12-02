import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getLastLoggedInUser } from "./Users";
import backgroundImage from './images/main.jpg';

const HomePage = () => {
  const [thought, setThought] = useState("");
  const [thoughtsList, setThoughtsList] = useState([]);
  const [showButton, setShowButton] = useState(false);
  const [inputEnabled, setInputEnabled] = useState(false);
  const navigate = useNavigate();
  const lastLoggedInUser = getLastLoggedInUser();

  const handleThoughtSubmit = () => {
    if (thought.trim() !== "") {
      setThoughtsList([...thoughtsList, thought]);
      setThought("");

      if (thought.toLowerCase().includes("bad..")) {
        alert("Would you like a hug?");
        setTimeout(() => {
          alert("Please don't ignore me 😔.");
        }, 3000);
      } else {
        alert("I understand...");
      }
    }
  };

  const handleShowButtonClick = () => {
    if (
      lastLoggedInUser.token ===
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImVuc2FyIiwicGhvbmVOdW1iZXIiOiI1NDIzMzI1Mzg3In0=.MTAxLDEyMSw3NCwxMDQsOTgsNzEsOTksMTA1LDc5LDEwNSw3NCw3Myw4NSwxMjIsNzMsNDksNzgsMTA1LDczLDExNSw3MywxMTAsODIsNTMsOTksNjcsNzMsNTQsNzMsMTA3LDExMiw4OCw4Niw2Nyw3NCw1Nyw0NiwxMDEsMTIxLDc0LDQ5LDk5LDUwLDg2LDEyMSw5OCwxMDksNzAsMTE2LDkwLDgzLDczLDU0LDczLDEwOSw4NiwxMTcsOTksNTAsNzAsMTIxLDczLDEwNSwxMTksMTA1LDk5LDcxLDEwNCwxMTgsOTgsMTA5LDg2LDc5LDEwMCw4Nyw0OSwxMDUsOTAsODgsNzMsMTA1LDc5LDEwNSw3Myw0OSw3OCw2OCw3MywxMjIsNzcsMTIyLDczLDQ5LDc3LDEyMiwxMDMsNTEsNzMsMTEwLDQ4LDYxLDQ2LDEyMSwxMTEsMTE3LDExNCw0NSwxMTUsMTAxLDk5LDExNCwxMDEsMTE2LDQ1LDEwNywxMDEsMTIx"
    ) {
      setShowButton(true);
      alert("it was youuu 😊");
      setInputEnabled(true);
    } else {
      alert("you're not him..🤬");
      navigate("/login");
    }
  };

  const pageStyle = {
    background: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Arial, sans-serif',
    margin: 0,
    paddingLeft: '750px',
  };

  const dashboardStyle = {

    backgroundColor: '#F1A2D1',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    width: '300px',
    textAlign: 'center',
  };

  const thoughtBoxStyle = {
    marginTop: '20px',
    padding: '20px',
    backgroundColor: '#F68ED6',
    borderRadius: '8px',
  };

  const thoughtInputStyle = {
    width: '70%',
    padding: '10px',
    marginRight: '10px',
  };

  const addThoughtButtonStyle = {
    padding: '10px',
    cursor: 'pointer',
  };

  const showButtonStyle = {
    padding: '10px',
    cursor: 'pointer',
  };

  const thoughtsListStyle = {
    listStyleType: 'none',
    padding: 0,
    marginTop: '10px',
  };

  const thoughtItemStyle = {
    marginBottom: '5px',
  };

  const inputContainerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '10px',
  };

  return (
    <div style={pageStyle}>
      <div style={dashboardStyle}>
        <h2>Welcome to Your Freespace</h2>
        <div className="user-info">
          <p className="welcome-message">
            You seem to be lost in thoughts today...
          </p>
        </div>
        <div style={thoughtBoxStyle}>
          <p>How are you feeling? Share your thoughts...</p>
          <div style={inputContainerStyle}>
            <input
              type="text"
              id="thought-input"
              placeholder="Write your thoughts..."
              value={thought}
              onChange={(e) => setThought(e.target.value)}
              disabled={!inputEnabled}
              style={thoughtInputStyle}
            />
            {showButton ? (
              <button
                className="add-thought-button"
                onClick={handleThoughtSubmit}
                style={addThoughtButtonStyle}
              >
                Add
              </button>
            ) : (
              <button
                className="show-button"
                onClick={handleShowButtonClick}
                style={showButtonStyle}
              >
                Knock Knock
              </button>
            )}
          </div>
          <ul style={thoughtsListStyle}>
            {thoughtsList.map((item, index) => (
              <li key={index} style={thoughtItemStyle}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
