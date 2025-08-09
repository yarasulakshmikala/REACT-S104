import React, { useState } from 'react';
import './App.css'; // Assuming you have an App.css for styling

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    // Basic validation
    if (!email || !password) {
      setErrorMessage('Please enter both email and password.');
      return;
    }

    // In a real application, you would send this data to a server for authentication.
    // For demonstration, we'll just log it.
    console.log('Login attempted with:', { email, password });

    // Simulate a successful login (e.g., clear form, redirect)
    setErrorMessage(''); // Clear any previous error messages
    setEmail('');
    setPassword('');
    alert('Login successful! (Simulated)'); // Or navigate to another page
  };

  return (
    <div className="App">
      <header className="App-header">
        <h2>Login</h2>
        <form onSubmit={handleSubmit} className="login-form">
          {errorMessage && <p className="error-message">{errorMessage}</p>}
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Login</button>
        </form>
      </header>
    </div>
  );
}

export default App;