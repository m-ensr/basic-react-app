import React, { useState } from 'react';
import { addUser, users } from './Users';
import { useNavigate } from 'react-router-dom';
import { generateJwtToken } from '../utils/JwtUtils';

const SignUpPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleSignUp = () => {
    if (!username.trim() || !password.trim() || !phoneNumber.trim()) {
      setError('Please fill in all fields.');
      return;
    }
    if (!/^\d{10}$/.test(phoneNumber)) {
      setError('Phone number must be 10 digits and consist only of numbers.');
      return;
    }
    alert('Successfully registered..');
    console.log('User successfully registered:');
    console.log('Username:', username);
    console.log('Password:', password);
    console.log('Phone Number:', phoneNumber);
    const token = generateJwtToken(username, phoneNumber);

    const newUser = { username, password, phoneNumber, token };
    addUser(newUser);
    users.push(newUser);
    console.log(users);
    console.log('Generated JWT:', token);

    navigate('/');
  };

  const style = {
    maxWidth: '400px',
    margin: 'auto',
    padding: '20px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    borderRadius: '8px',
    backgroundColor: '#ffffff',
    textAlign: 'center',
  };

  return (
    <div style={style}>
      <h1>Sign Up</h1>
      <div style={{ marginBottom: '20px' }}>
        <label htmlFor="username" style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold', color: '#333333' }}>
          Username:
        </label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter your username"
          style={{ width: '100%', padding: '12px', fontSize: '16px', border: '1px solid #cccccc', borderRadius: '6px', marginTop: '6px' }}
        />
      </div>
      <div style={{ marginBottom: '20px' }}>
        <label htmlFor="password" style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold', color: '#333333' }}>
          Password:
        </label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
          style={{ width: '100%', padding: '12px', fontSize: '16px', border: '1px solid #cccccc', borderRadius: '6px', marginTop: '6px' }}
        />
      </div>
      <div style={{ marginBottom: '20px' }}>
        <label htmlFor="phoneNumber" style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold', color: '#333333' }}>
          Phone Number:
        </label>
        <input
          type="tel"
          id="phoneNumber"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          placeholder="Enter your phone number"
          style={{ width: '100%', padding: '12px', fontSize: '16px', border: '1px solid #cccccc', borderRadius: '6px', marginTop: '6px' }}
        />
      </div>
      <div>
        <button
          type="button"
          onClick={handleSignUp}
          style={{
            backgroundColor: '#4caf50',
            color: '#ffffff',
            padding: '12px 20px',
            fontSize: '16px',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
            transition: 'background-color 0.3s',
          }}
        >
          Sign Up
        </button>
      </div>
      {error && <p style={{ color: '#ff0000', marginTop: '10px' }}>{error}</p>}
    </div>
  );
};

export default SignUpPage;
