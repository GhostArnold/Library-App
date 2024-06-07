// Импортируем функцию configureStore из библиотеки @reduxjs/toolkit
import { configureStore } from '@reduxjs/toolkit';
// Импорт reducer из slice
import filterReducer from './slices/filterSlice';
import booksReducer from './Books/reducer';
// configureStore - это функция, которая используется в библиотеке Redux для создания и конфигурации хранилища данных (store)
const store = configureStore({
  reducer: {
    books: booksReducer,
    filter: filterReducer,
  },
});

export default store;
