import React, { useState, useEffect } from 'react'; // Импортируем необходимые хуки из React

// Определяем стили для компонентов
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
    marginTop: '20px', // Дублирующаяся строка
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

// Функция для применения стилей к элементу
const applyStyles = (element, style) => {
  Object.assign(element.style, style); // Применяем переданные стили к указанному элементу
};

// Хук для применения стилей ко всем элементам при монтировании компонента
const useApplyStyles = () => {
  useEffect(() => {
    const styleMap = {
      '.formContainer': styles.formContainer,
      '.Enterence': styles.welcome,
      '.overlay': styles.overlay,
      '.inputLogin': styles.input,
      '.inputPassword': styles.input,
      '.forgot': styles.forgot,
      '.checkboxSection': styles.checkboxSection,
      '.loginCheckbox': styles.checkbox,
      '.forgotLink': styles.link,
      '.loginButton': styles.button,
    };

    Object.keys(styleMap).forEach(selector => {
      document.querySelectorAll(selector).forEach(element => {
        applyStyles(element, styleMap[selector]);
      });
    });
  }, []);
};

const LoginForm = ({ closeLoginForm }) => {
  const [username, setUsername] = useState(''); // Создаем состояние для имени пользователя
  const [password, setPassword] = useState(''); // Создаем состояние для пароля
  useApplyStyles(); // Применяем стили при монтировании компонента

  // Обработчик отправки формы
  const handleSubmit = (e) => {
    e.preventDefault(); // Предотвращаем стандартное поведение формы
    // Здесь должна быть логика авторизации
    console.log('Username:', username);
    console.log('Password:', password);
    closeLoginForm(); // Закрыть форму после отправки
  };

  return (
    <>
      <div className="overlay" onClick={closeLoginForm}></div>
      <div className="formContainer">
        <div className="Enterence">
          <h1>Вход в систему</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            value={username} // Связываем значение поля ввода с состоянием username
            onChange={(e) => setUsername(e.target.value)} // Обновляем состояние username при изменении ввода
            className="inputLogin" // Класс для поля ввода имени пользователя
          />
          <input
            type="password"
            placeholder="Password"
            value={password} // Связываем значение поля ввода с состоянием password
            onChange={(e) => setPassword(e.target.value)} // Обновляем состояние password при изменении ввода
            className="inputPassword" // Класс для поля ввода пароля
          />
          <div className="forgot">
            <section className="checkboxSection">
              <input type="checkbox" className="loginCheckbox" /> {/* Класс для чекбокса */}
              <label>Запомнить меня</label>
            </section>
            <section>
              <a 
                href="#" 
                className="forgotLink" 
                onMouseOver={(e) => applyStyles(e.target, styles.linkHover)} 
                onMouseOut={(e) => applyStyles(e.target, styles.link)}>Не помню пароль</a> {/* Ссылка для восстановления пароля */}
            </section>
          </div>
          <button type="submit" className="loginButton">Войти</button> {/* Кнопка для отправки формы */}
        </form>
      </div>
    </>
  );
};

export default LoginForm; // Экспортируем компонент LoginForm по умолчанию
