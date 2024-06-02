// Импортируем функцию configureStore из библиотеки @reduxjs/toolkit
import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './Books/reducer';
// configureStore - это функция, которая используется в библиотеке Redux для создания и конфигурации хранилища данных (store)
const store = configureStore({
  reducer: {
    books: booksReducer,
  },
});

export default store;
