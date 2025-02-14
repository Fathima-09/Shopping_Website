import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ({ onLogin }) => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [isFormValid, setIsFormValid] = useState(false); // New state for validation

  const handleLoginClick = () => {
    onLogin(); // Trigger login
  };

  // Validate username and password
  const validateForm = () => {
    if (!username || !password) {
      setError('Please fill in all fields');
      setSuccessMessage('');
      return false;
    }

    // Username validation: Minimum length 3 characters
    if (username.length < 3) {
      setError('Username must be at least 3 characters');
      setSuccessMessage('');
      return false;
    }

    // Password validation: Minimum length 6 characters and contains at least one number
    const passwordRegex = /^.{6,}$/;
    if (!passwordRegex.test(password)) {
      setError('Password must be at least 6 characters');
      setSuccessMessage('');
      return false;
    }

    setError(''); // Clear error if valid
    return true;
  };

  // Update form validation status when username or password changes
  const handleInputChange = (setter) => (e) => {
    setter(e.target.value);

    // Check validation
    const formValid = validateForm();
    setIsFormValid(formValid);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setSuccessMessage('You have logged in Successfully. Welcome to ShopEase!');
    console.log('Logged in:', { username, password });

    setTimeout(() => {
      navigate('/Homepage'); // Redirect to homepage after 2 seconds
    }, 2000);
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>Login to Shopease</h2>
      <h6>For a Quicker Checkout</h6>
      {error && <p style={styles.error}>{error}</p>}
      {successMessage && <p style={styles.success}>{successMessage}</p>}

      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.inputGroup}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={handleInputChange(setUsername)} // Updated handler
            placeholder="Enter your Username"
            style={styles.input}
          />
        </div>
        <div style={styles.inputGroup}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handleInputChange(setPassword)} // Updated handler
            placeholder="Enter your password"
            style={styles.input}
          />
        </div>

        {/* Disable the button if the form is invalid */}
        <button
          type="submit"
          style={{
            ...styles.button,
            backgroundColor: isFormValid ? '#007BFF' : '#ccc',
            cursor: isFormValid ? 'pointer' : 'not-allowed',
          }}
          onClick={handleLoginClick}
          disabled={!isFormValid} // Disable if form is invalid
        >
          Login
        </button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '400px',
    margin: '50px auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    backgroundColor: 'beige',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  header: {
    textAlign: 'center',
    marginBottom: '20px',
    color: '#333',
  },
  error: {
    color: 'red',
    fontSize: '14px',
    textAlign: 'center',
    marginBottom: '10px',
  },
  success: {
    color: 'green',
    fontSize: '14px',
    textAlign: 'center',
    marginBottom: '10px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  inputGroup: {
    marginBottom: '15px',
  },
  input: {
    width: '100%',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '4px',
  },
  button: {
    padding: '8px',
    border: 'none',
    borderRadius: '4px',
    color: '#fff',
  },
};

export default Login;