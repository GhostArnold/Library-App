import * as actionTypes from './actionTypes'; // Импортируйте actionTypes из соответствующего файла

const initialState = [];

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_BOOK:
      return [...state, action.payload];

    case actionTypes.DELETE_BOOK:
      return state.filter((book) => book.id !== action.payload);

    case actionTypes.TOGGLE_FAVORITE:
      return state.map((book) =>
        // Проверяем, если идентификатор текущей книги совпадает с идентификатором, переданным в action.payload
        book.id === action.payload
          ? // Если книга найдена (идентификаторы совпадают), создаем новый объект книги с измененным статусом isFavorite
            {
              ...book, // Распаковываем все свойства текущей книги
              isFavorite: !book.isFavorite, // Меняем значение isFavorite на противоположное (если было true, станет false и наоборот)
            }
          : // Если идентификатор книги не совпадает с переданным, возвращаем книгу без изменений
            book
      );

    default:
      return state;
  }
};

export default booksReducer;
