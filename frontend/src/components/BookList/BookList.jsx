import { useDispatch, useSelector } from 'react-redux'; // Импорт хука useSelector из библиотеки react-redux
// Иконки для избранного
import { BsBookmarkStarFill, BsBookmarkStar } from 'react-icons/bs';
import { deleteBook, toggleFovorite } from '../../redux/Books/actionCreators';
import { selectTitleFilter } from '../../redux/slices/filterSlice';
import './BookList.css'; // Импорт стилей компонента

const BookList = () => {
  // Использование хука useSelector для получения состояния книг из Redux
  const books = useSelector((state) => state.books);
  // Фильтрация. Скобки не пишем потому-что калбэк вызывается автоматически
  const titleFilter = useSelector(selectTitleFilter);
  const dispatch = useDispatch();
  const handleDeleteBook = (id) => {
    console.log(deleteBook(id));
    dispatch(deleteBook(id));
  };
  // Избранное
  const handleToggleFavorite = (id) => {
    dispatch(toggleFovorite(id));
  };

  const filteredBooks = books.filter((book) => {
    const matchesTitle = book.title
      // Приводим и название книги, и введённую строку к нижнему регистру, чтобы сравнение было нечувствительно к регистру
      .toLowerCase()
      // Проверяем, содержит ли название книги введённую строку (также в нижнем регистре)
      .includes(titleFilter.toLowerCase());
    console.log({ title: book.title, matchesTitle });
    return matchesTitle;
  });

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
                  {++i}. {book.title} by <strong>{book.author}</strong> -{' '}
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
