import { createSlice } from '@reduxjs/toolkit';

// Начальное состояние вашего slice
const initialState = {
  title: '',
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
  },
});

export const { setTitleFilter } = filterSlice.actions;
export const selectTitleFilter = (state) => state.filter.title;
export default filterSlice.reducer;
