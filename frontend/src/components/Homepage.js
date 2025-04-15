
import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div style={styles.wrapper}>
      <div style={styles.container}>
        <h1 style={styles.title}>Welcome to My Platform</h1>
        <p style={styles.subtitle}>Crafting solutions, one idea at a time.</p>

        <div style={styles.buttonContainer}>
          <button style={styles.loginButton} onClick={() => navigate('/login')}>
            Login
          </button>
          <button style={styles.signupButton} onClick={() => navigate('/signup')}>
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

// const styles = {
//   wrapper: {
//     width: '100vw',
//     height: '100vh',
//     background: 'linear-gradient(to right, #667eea, #764ba2)', // Purple Gradient
//     backgroundColor: 'linear-gradient(135deg, #f5f7fa 0%, #e0f7fa 100%)',
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: '20px',
//     boxSizing: 'border-box',
//     overflow: 'hidden',
//   },
const styles = {
  wrapper: {
    width: '100vw',
    height: '100vh',
    background: 'linear-gradient(to right, #ff9a8b, #ff6a88)', // Sunset Glow
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
    boxSizing: 'border-box',
    overflow: 'hidden',
  },

  container: {
    maxWidth: '600px',
    width: '100%',
    padding: '50px 25px',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: '20px',
    textAlign: 'center',
    color: '#fff',
    backdropFilter: 'blur(15px)',
    boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
    transition: 'all 0.3s ease',
  },
  title: {
    fontSize: '3rem',
    fontWeight: '700',
    marginBottom: '15px',
    letterSpacing: '1px',
  },
  subtitle: {
    fontSize: '1.5rem',
    fontWeight: '400',
    marginBottom: '35px',
    opacity: 0.8,
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  loginButton: {
    padding: '14px',
    backgroundColor: '#fff',
    color: '#3b3b3b',
    border: 'none',
    borderRadius: '10px',
    fontSize: '18px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'transform 0.2s ease, background-color 0.3s ease',
  },
  signupButton: {
    padding: '14px',
    backgroundColor: 'transparent',
    color: '#fff',
    border: '2px solid #fff',
    borderRadius: '10px',
    fontSize: '18px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'transform 0.2s ease, background-color 0.3s ease',
  },
};

export default HomePage;
