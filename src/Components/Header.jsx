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
    width: '100%', // Делаем ширину на 100%
    position: 'fixed', // Фиксируем header вверху страницы
    boxSizing: 'border-box', // Учитываем отступы и границы в размере элемента
    top: 0, // Фиксируем header в самом верху
    left: 0, // Фиксируем header в левой части
    zIndex: '1000',
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
    fontWeight: 'bold',
  },
  loginButton: {
    backgroundColor: '#fff',
    color: 'rgb(210, 35, 60)',
    border: 'none',
    borderRadius: '4px',
    padding: '10px 20px',
    cursor: 'pointer',
    fontFamily: 'Futuris C, Arial, sans-serif',
    marginLeft: '10px',
  },
};

const Header = ({ onLoginClick }) => {
  return (
    <header style={styles.header}>
      <div style={styles.logoContainer}>
        <img 
          src="/LukoilWhiteLogo.png"
          alt="Logo" 
          style={styles.logo} 
        />
        <span style={styles.companyName}>ЛУКОЙЛ</span>
      </div>
      <button style={styles.loginButton} onClick={onLoginClick}>Войти</button>
    </header>
  );
};

export default Header; // Экспортируем компонент Header по умолчанию
