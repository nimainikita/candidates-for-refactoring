function processUserData(user) {
  // Получаем данные пользователя
  const userData = getUserData(user);

  // Проверяем данные пользователя
  if (userData.age >= 18) {
    // Обрабатываем данные
    return processUser(user); //Возвращаем данные если надо
  } else {
    // Выводим ошибку
    console.error('User is under 18');
    return // Просто завершаем функцию 
  }
}

/*Что было плохо:
1) Не слишком понятно что нужно сделать, если функция должна что-то вернуть то тут пропустили момент когда она что-то возвращает
*/

/*Что стало лучше:
1)
*/