import { useState } from 'react';
import './BookForm.css';
const BookForm = () => {
  // Название книги
  const [title, setTitle] = useState('');
  //   Автор книги
  const [author, setAuthor] = useState('');

  const handleSubmit = (e) => {
    // Чтобы браузер не выполнял действие по умолчанию (не перезагружал страницу)
    e.preventDefault();

    if (title && author) {
      // dispatch action
      console.log(title, author);
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
