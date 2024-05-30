import { useState } from 'react';
// В реакте для dispatch используется хук
import { useDispatch } from 'react-redux';
// Импорт действия
import { addBook } from '../../redux/Books/actionCreators';
import './BookForm.css';
const BookForm = () => {
  // Название книги
  const [title, setTitle] = useState('');
  //   Автор книги
  const [author, setAuthor] = useState('');
  // Резултат вызова useDispatch
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    // Чтобы браузер не выполнял действие по умолчанию (не перезагружал страницу)
    e.preventDefault();
    if (title && author) {
      // Объект для payload
      const book = {
        title,
        author,
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
      </form>
    </div>
  );
};

export default BookForm;
