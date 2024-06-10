import { useDispatch, useSelector } from 'react-redux'; // Импорт хука useSelector из библиотеки react-redux
// Иконки для избранного
import { BsBookmarkStarFill, BsBookmarkStar } from 'react-icons/bs';
import { deleteBook, toggleFovorite } from '../../redux/Books/actionCreators';
import {
  selectTitleFilter,
  selectAuthorFilter,
  selectOnlyFavoriteFilter,
} from '../../redux/slices/filterSlice';
import './BookList.css'; // Импорт стилей компонента

const BookList = () => {
  // Использование хука useSelector для получения состояния книг из Redux
  const books = useSelector((state) => state.books);
  // Фильтрация. Скобки не пишем потому-что калбэк вызывается автоматически
  const titleFilter = useSelector(selectTitleFilter);
  const authorFilter = useSelector(selectAuthorFilter);
  const onlyFavoriteFilter = useSelector(selectOnlyFavoriteFilter);
  const dispatch = useDispatch();
  const handleDeleteBook = (id) => {
    // console.log(deleteBook(id));
    dispatch(deleteBook(id));
  };
  // Избранное
  const handleToggleFavorite = (id) => {
    dispatch(toggleFovorite(id));
  };

  const filteredBooks = books.filter(
    (book) =>
      book.title.toLowerCase().includes(titleFilter.toLowerCase()) &&
      book.author.toLowerCase().includes(authorFilter.toLowerCase()) &&
      // Тернарный оператор обязательно в скобках
      (onlyFavoriteFilter ? book.isFavorite : true)
  );
  const highlightMatch = (text, filter) => {
    if (!filter) return text;
    const regex = new RegExp(`(${filter})`, 'gi');
    console.log(regex);
    return text.split(regex).map((substring, i) => {
      if (substring.toLowerCase() === filter.toLowerCase()) {
        return (
          <span key={i} className="highlight">
            {substring}
          </span>
        );
      }
      return substring;
    });
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
          {filteredBooks.map(
            (
              book,
              i // Итерация по массиву книг
            ) => (
              // Делаем уникальный ключ с помощью свойства из объекта books, свойство которого мы указываем в BookForm
              <li key={book.id}>
                {/* Уникальный ключ для каждой книги */}
                <div className="book-info">
                  {/* Вывод информации о книге: название и автор */}
                  {++i}. {highlightMatch(book.title, titleFilter)} by{' '}
                  <strong>{highlightMatch(book.author, authorFilter)}</strong> -{' '}
                  {book.year}{' '}
                </div>
                <div className="book-actions">
                  <span onClick={() => handleToggleFavorite(book.id)}>
                    {book.isFavorite ? (
                      <BsBookmarkStarFill className="star-icon" />
                    ) : (
                      <BsBookmarkStar className="star-icon" />
                    )}
                  </span>
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
