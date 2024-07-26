import React, { useEffect, useContext } from 'react'; // Импортируем необходимые хуки из React
import TaskItem from './TaskItem'; // Импортируем компонент TaskItem
import { TaskContext } from '../context/TaskContext'; // Импортируем контекст задач

// Определяем стили для контейнера списка задач
const styles = {
  taskListContainer: {
    width: '100%', // Установим ширину на 100% для лучшего выравнивания
    marginTop: '20px', // Добавляем отступ сверху
    display: 'flex',
    flexDirection: 'column', // Располагаем элементы по колонке
  },
};

// Функция для применения стилей к элементу
const applyStyles = (element, style) => {
  Object.assign(element.style, style); // Применяем переданные стили к указанному элементу
};

const TaskList = () => {
  // Получаем данные и функции из контекста задач
  const { filteredTasks, toggleTaskCompletion, deleteTask } = useContext(TaskContext);

  // Применяем стили к контейнеру списка задач после монтирования компонента
  useEffect(() => {
    applyStyles(document.querySelector('.task-list-container'), styles.taskListContainer);
  }, []);

  return (
    <div className="task-list-container">
      {filteredTasks.map(task => (
        <TaskItem
          key={task.id} // Устанавливаем уникальный ключ для каждого элемента списка
          task={task} // Передаем задачу в компонент TaskItem
          toggleTaskCompletion={toggleTaskCompletion} // Передаем функцию для переключения состояния выполнения задачи
          deleteTask={deleteTask} // Передаем функцию для удаления задачи
        />
      ))}
    </div>
  );
};

export default TaskList; // Экспортируем компонент TaskList по умолчанию
