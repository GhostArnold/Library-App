import { useState } from 'react';
// В реакте для dispatch используется хук
import { useDispatch } from 'react-redux';
// Для уникального id
import { v4 as uuidv4 } from 'uuid';
// Импорт действия
import { addBook } from '../../redux/Books/actionCreators';
// json книги
import booksData from '../../data/books.json';
import './BookForm.css';
const BookForm = () => {
  // Название книги
  const [title, setTitle] = useState('');
  //   Автор книги
  const [author, setAuthor] = useState('');
  // Резултат вызова useDispatch
  const dispatch = useDispatch();

  // Добавляем случайную книгу из json файла

  const handleAddRandomBook = () => {
    // Генерем случайный id от - до длинны json объекта (90)
    const randomIndex = Math.floor(Math.random() * booksData.length);
    // Создаём переменную с рандомным элементом объекта
    const randomBook = booksData[randomIndex];

    // Мы полностью инициализируем здесь элементы объекта
    const randomBookWithID = {
      ...randomBook,
      // Уникальный id
      id: uuidv4(),
    };

    dispatch(addBook(randomBookWithID));
  };
  const handleSubmit = (e) => {
    // Чтобы браузер не выполнял действие по умолчанию (не перезагружал страницу)
    e.preventDefault();
    if (title && author) {
      // Объект для payload
      const book = {
        title,
        author,
        id: uuidv4(),
      };
      // Отправляем изменения
      dispatch(addBook(book));
      //   Делаем, чтобы после субмита состояние обнулялось
      setTitle('');
      setAuthor('');
    }
  };
  return (
    <div className="app-block book-form">
      <h2>Add a New Book</h2>
      <form onSubmit={handleSubmit}>
        <div>
          {/* Название */}
          {/* Элемент label используется в HTML для связывания текста с элементом формы (например, текстовым поле ввода, чекбоксом или кнопкой) */}
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        {/* Автор */}
        <div>
          <label htmlFor="author">Author</label>
          <input
            type="text"
            id="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>
        <button type="submit">Add book</button>
        <button type="button" onClick={handleAddRandomBook}>
          Add Random
        </button>
      </form>
    </div>
  );
};

export default BookForm;
