import { createSlice } from '@reduxjs/toolkit';

// Начальное состояние вашего slice
const initialState = {
  title: '',
  author: '',
  onlyFavorite: false,
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
    setOnlyFavoriteFilter: (state) => {
      state.onlyFavorite = !state.onlyFavorite;
    },
    resetFilters: () => {
      // Возвращаем пустой массив
      return initialState;
    },
  },
});

export const {
  setTitleFilter,
  setAuthorFilter,
  resetFilters,
  setOnlyFavoriteFilter,
} = filterSlice.actions;
export const selectTitleFilter = (state) => state.filter.title;
export const selectAuthorFilter = (state) => state.filter.author;
export const selectOnlyFavoriteFilter = (state) => state.filter.onlyFavorite;
export default filterSlice.reducer;
