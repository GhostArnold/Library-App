import { createSlice } from '@reduxjs/toolkit';

// Начальное состояние вашего slice
const initialState = {
  title: '',
  author: '',
};

// Создание слайса с помощью функции createSlice
const filterSlice = createSlice({
  name: 'filter', // Имя вашего slice (используется в типах экшенов - type)
  initialState, // Начальное состояние вашего slice
  reducers: {
    // Описание редьюсера, который будет обновлять состояние
    setTitleFilter: (state, action) => {
      // Благодаря библиотеки immer
      state.title = action.payload;
    },
    setAuthorFilter: (state, action) => {
      state.author = action.payload;
    },
    resetFilters: (state) => {
      // Возвращаем пустой массив
      return initialState;
    },
  },
});

export const { setTitleFilter, setAuthorFilter, resetFilters } =
  filterSlice.actions;
export const selectTitleFilter = (state) => state.filter.title;
export const selectAuthorFilter = (state) => state.filter.author;
export default filterSlice.reducer;
