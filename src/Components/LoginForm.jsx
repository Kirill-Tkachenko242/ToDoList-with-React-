import React, { useState, useEffect } from 'react';

const styles = {
  formContainer: {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'rgb(255, 255, 255)',
    padding: '90px',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    zIndex: 1000,
  },
  welcome: {
    width: '100%',
    padding: '10px',
    margin: '10px 30px',
  },
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 999,
  },
  input: {
    display: 'block',
    width: '100%',
    padding: '10px',
    margin: '10px 0',
    borderRadius: '4px',
    border: '1px solid #ddd',
  },
  button: {
    padding: '10px',
    border: 'none',
    borderRadius: '4px',
    backgroundColor: 'rgb(210, 36, 60)',
    color: '#fff',
    cursor: 'pointer',
    width: '100%',
    marginTop: '20px',
  },
  forgot: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '10px',
    marginTop: '20px',
  },
  checkboxSection: {
    display: 'flex',
    alignItems: 'center',
    marginRight: '25px',
  },
  checkbox: {
    marginRight: '5px',
  },
  link: {
    color: 'rgb(210, 35, 60)',
    textDecoration: 'none',
  },
  linkHover: {
    textDecoration: 'underline',
  },
};

const applyStyles = (element, style) => {
  Object.assign(element.style, style);
};

const LoginForm = ({ closeLoginForm }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  useEffect(() => {
    applyStyles(document.querySelector('.Enterence'), styles.welcome);
    applyStyles(document.querySelector('.overlay'), styles.overlay);
    applyStyles(document.querySelector('.inputLogin'), styles.input);
    applyStyles(document.querySelector('.inputPassword'), styles.input);
    applyStyles(document.querySelector('.loginButton'), styles.button);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Здесь должна быть логика авторизации
    console.log('Username:', username);
    console.log('Password:', password);
    closeLoginForm(); // Закрыть форму после отправки
  };

  return (
    <>
      <div className="overlay" onClick={closeLoginForm}></div>
      <div style={styles.formContainer}>
        <div className="Enterence">
          <h1>Вход в систему</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="inputLogin"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="inputPassword"
          />
          <div className="forgot" style={styles.forgot}>
            <section style={styles.checkboxSection}>
              <input type="checkbox" style={styles.checkbox} />
              <label>Запомнить меня</label>
            </section>
            <section>
              <a href="#" style={styles.link} onMouseOver={(e) => applyStyles(e.target, styles.linkHover)} onMouseOut={(e) => applyStyles(e.target, styles.link)}>Не помню пароль</a>
            </section>
          </div>
          <button type="submit" className="loginButton">Войти</button>
        </form>
      </div>
    </>
  );
};

export default LoginForm;
