import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getLastLoggedInUser } from "./Users";

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

  return (
    <>
      <style>
        {`
          body {
            font-family: 'Arial', sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100vh;
          }

          .dashboard-container {
            background-color: #fff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            width: 300px;
            text-align: center;
          }

          h2 {
            color: #333;
          }

          .user-info {
            margin-bottom: 15px;
          }

          .welcome-message {
            font-size: 18px;
            margin-bottom: 10px;
          }

          .thought-box {
            margin-top: 20px;
            padding: 20px;
            background-color: #ecf0f1;
            border-radius: 8px;
          }

          #thought-input {
            width: 70%;
            padding: 10px;
            margin-right: 10px;
          }

          .add-thought-button,
          .show-button {
            padding: 10px;
            cursor: pointer;
          }

          .thoughts-list {
            list-style-type: none;
            padding: 0;
            margin-top: 10px;
          }

          .thoughts-list li {
            margin-bottom: 5px;
          }

          .input-container {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-top: 10px;
          }
        `}
      </style>
      <div className="dashboard-container">
        <h2>Welcome to Your Freespace</h2>
        <div className="user-info">
          <p className="welcome-message">
            You seem to be lost in thoughts today...
          </p>
        </div>
        <div className="thought-box">
          <p>How are you feeling? Share your thoughts...</p>
          <div className="input-container">
            <input
              type="text"
              id="thought-input"
              placeholder="Write your thoughts..."
              value={thought}
              onChange={(e) => setThought(e.target.value)}
              disabled={!inputEnabled}
            />
            {showButton ? (
              <button
                className="add-thought-button"
                onClick={handleThoughtSubmit}
              >
                Add
              </button>
            ) : (
              <button className="show-button" onClick={handleShowButtonClick}>
                Show Button
              </button>
            )}
          </div>
          <ul className="thoughts-list">
            {thoughtsList.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default HomePage;
