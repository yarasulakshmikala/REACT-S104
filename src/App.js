import React, { useState } from 'react';
import './App.css'; // Make sure your CSS matches the new classes

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    // Basic validation
    if (!email || !password) {
      setErrorMessage('Please enter both email and password.');
      return;
    }

    // Start loading
    setLoading(true);
    setErrorMessage('');

    // Simulate server request
    setTimeout(() => {
      console.log('Login attempted with:', { email, password });

      setLoading(false);
      setEmail('');
      setPassword('');
      alert('Login successful! (Simulated)');
    }, 1500);
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
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <div className="password-wrapper">
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
              />
              <button
                type="button"
                className="toggle-btn"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? 'Hide' : 'Show'}
              </button>
            </div>
          </div>

          <button type="submit" disabled={loading}>
            {loading ? 'Logging in...' : 'Login'}
          </button>

          <div className="login-footer">
            <p>
              Don’t have an account? <a href="#">Sign up</a>
            </p>
          </div>
        </form>
      </header>
    </div>
  );
}

export default App;

