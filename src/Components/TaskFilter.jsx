import React, { useEffect, useContext } from 'react'; // Импортируем необходимые хуки из React
import { TaskContext } from '../context/TaskContext'; // Импортируем контекст задач

// Определяем стили для компонентов
const styles = {
  filterContainer: {
    marginBottom: '20px', // Отступ снизу для контейнера фильтра
  },
  select: {
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ddd', // Стили для выпадающего списка
  },
};

// Функция для применения стилей к элементу
const applyStyles = (element, style) => {
  Object.assign(element.style, style); // Применяем переданные стили к указанному элементу
};

const TaskFilter = () => {
  const { filter, setFilter } = useContext(TaskContext); // Получаем фильтр и функцию для его установки из контекста задач

  // Применяем стили к элементам после монтирования компонента
  useEffect(() => {
    applyStyles(document.querySelector('.taskFilter'), styles.select); // Применяем стили к выпадающему списку
    applyStyles(document.querySelector('.filter-container'), styles.filterContainer); // Применяем стили к контейнеру фильтра
  }, []);

  return (
    <div className="filter-container">
      <select value={filter} onChange={(e) => setFilter(e.target.value)} className="taskFilter"> {/* Связываем значение фильтра с контекстом */}
        <option value="all">Все</option> {/* Опция для показа всех задач */}
        <option value="active">Активные</option> {/* Опция для показа активных задач */}
        <option value="completed">Выполненные</option> {/* Опция для показа выполненных задач */}
      </select>
    </div>
  );
};

export default TaskFilter; // Экспортируем компонент TaskFilter по умолчанию
