import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import store from './redux/store';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // Provider из библиотеки react-redux делает Redux store доступным для всего дерева компонентов вашего приложения React. Это необходимо, чтобы компоненты могли подписываться на изменения в хранилище и отправлять действия для изменения состояния
  <Provider store={store}>
    <App />
  </Provider>
);
