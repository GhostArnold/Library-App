import { useSelector } from 'react-redux'; // Импорт хука useSelector из библиотеки react-redux
import './BookList.css'; // Импорт стилей компонента

const BookList = () => {
  const books = useSelector((state) => state.books); // Использование хука useSelector для получения состояния книг из Redux

  return (
    <div className="app-block book-list">
      {' '}
      <h2>Book List</h2> {/* Заголовок списка книг */}
      {books.length === 0 ? ( // Проверка, есть ли книги в списке
        <p>No books available</p> // Вывод сообщения, если нет книг
      ) : (
        // Вывод списка книг, если они есть
        <ul>
          {books.map(
            (
              book,
              i // Итерация по массиву книг
            ) => (
              <li key={i}>
                {/* Уникальный ключ для каждой книги */}
                <div className="book-info">
                  {++i}. {book.title} by <strong>{book.author}</strong>{' '}
                  {/* Вывод информации о книге: название и автор */}
                </div>
              </li>
            )
          )}
        </ul>
      )}
    </div>
  );
};

export default BookList; // Экспорт компонента BookList
