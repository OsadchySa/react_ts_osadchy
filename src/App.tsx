import React from 'react';

import './App.css';
import UsersComponent from "./Components/usersComponent";

const App=()=>{
  return (
    <div>
      <UsersComponent/>
    </div>
  );
}

export default App;
/*Виконуємо класовими компонентами
https://dummyjson.com/docs/users
 1 отримати та вивести інфу по всіх юзерах. Для запитів використовуємо axios та розносимо логіку в сервіси
  Структура компонентів : App - Users- User
 3 в компоненті User зробити кнопку при натсиканні на яку відбувається стейт ліфтінг ід користувача в батьківську компоненту.
  В батьківській компоненті вивести всі пости обраного юзера (https://dummyjson.com/docs/posts  Get all posts by user id)*/