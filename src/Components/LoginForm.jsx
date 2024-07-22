import React, { useState, useEffect } from 'react';

const styles = {
  formContainer: {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#fff',
    padding: '90px',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    zIndex: 1000,
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
    backgroundColor: '#28a745',
    color: '#fff',
    cursor: 'pointer',
    width: '100%',
  },
};

const applyStyles = (element, style) => {
  Object.assign(element.style, style);
};

const LoginForm = ({ closeLoginForm }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  useEffect(() => {
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
          <div className="forgot">
            <section>
              <input type="checkbox" />
              <label>Запомнить меня</label>
            </section>
            <section>
              <a href="#">Не помню пароль</a>
            </section>
          </div>
          <button type="submit" className="loginButton">Login</button>
        </form>
      </div>
    </>
  );
};

export default LoginForm;
