import React, { useState } from "react";
import "./App.css";

function App() {
  const [email, setEmail] = useState("");

  const handleContinue = (e) => {
    e.preventDefault();
    alert(`Email entered: ${email}`);
  };

  return (
    <div>
      {/* Top Navigation Bar */}
      <nav className="navbar">
        <div className="nav-links">
          <a href="#">Server</a>
          <a href="#">Log in</a>
          <button className="get-started">Get started</button>
        </div>
      </nav>

      {/* Login Form Section */}
      <div className="form-container">
        <h2>Create your account</h2>
        <p>Enter your email address</p>

        <form onSubmit={handleContinue}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit" className="continue-btn">Continue</button>
        </form>
      </div>
    </div>
  );
}

export default App;
