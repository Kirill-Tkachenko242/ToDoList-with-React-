import React from 'react';

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'rgb(210, 35, 60)',
    padding: '10px 20px',
    fontFamily: 'Futuris C, Arial, sans-serif',
    color: '#fff',
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  logo: {
    width: '40px',
    height: '40px',
    marginRight: '10px',
  },
  companyName: {
    fontSize: '36px',
    width: '40px',
    height: '40px',
  },
  loginButton: {
    backgroundColor: '#fff',
    color: 'rgb(210, 35, 60)',
    border: 'none',
    borderRadius: '4px',
    padding: '10px 20px',
    cursor: 'pointer',
    fontFamily: 'Futuris C, Arial, sans-serif',
  },
};

const Header = ({ onLoginClick }) => {
  return (
    <header style={styles.header}>
      <div style={styles.logoContainer}>
        <img src="LukoilWhiteLogo.png" 
        alt="Logo" 
        style={styles.logo} />
        <span style={styles.companyName}>ЛУКОЙЛ</span>
      </div>
      <button style={styles.loginButton} onClick={onLoginClick}>Войти</button>
    </header>
  );
};

export default Header;
