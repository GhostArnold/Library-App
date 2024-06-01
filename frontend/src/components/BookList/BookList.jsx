import { useDispatch, useSelector } from 'react-redux'; // Импорт хука useSelector из библиотеки react-redux
import { deleteBook } from '../../redux/Books/actionCreators';
import './BookList.css'; // Импорт стилей компонента

const BookList = () => {
  const books = useSelector((state) => state.books); // Использование хука useSelector для получения состояния книг из Redux
  const dispatch = useDispatch();
  const handleDeleteBook = (id) => {
    console.log(deleteBook(id));
    dispatch(deleteBook(id));
  };

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
              // Делаем уникальный ключ с помощью свойства из объекта books, свойство которого мы указываем в BookForm
              <li key={book.id}>
                {/* Уникальный ключ для каждой книги */}
                <div className="book-info">
                  {/* Вывод информации о книге: название и автор */}
                  {++i}. {book.title} by <strong>{book.author}</strong> -{' '}
                  {book.year}{' '}
                </div>
                <div className="book-actions">
                  <button onClick={() => handleDeleteBook(book.id)}>
                    Delete
                  </button>
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
