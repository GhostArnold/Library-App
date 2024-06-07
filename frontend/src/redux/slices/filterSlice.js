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
      // Возвращаем обновленное состояние
      return {
        ...state,
        title: action.payload, // Обновляем поле title из payload экшена
      };
    },
  },
});

export const { setTitleFilter } = filterSlice.actions;

// console.log(filterSlice.actions);
// console.log(filterSlice.actions.setTitleFilter('type'));
// Экспортируем редьюсер для включения в store
export default filterSlice.reducer;
