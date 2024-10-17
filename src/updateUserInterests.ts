const authorize = (url, method, body) => {
  if (!isLoggedIn()) {
    toLoginPage();
    return;
  }

  const token = getToken();
  const headers = getHeaders(token);

  return fetch(url, {
    method,
    headers,
    body: JSON.stringify(body),
  });
};

const updateUserHandle = (handle) => {
  return authorize(`${domain}/v1/users/handle`, 'PUT', { handle });
};

const updateUserInterests = (interestUUIDs) => {
  return authorize(`${domain}/v1/users/interests`, 'PUT', { interestUUIDs });
};

/*Что было плохо:
1) Дублирование проверки что пользователь залогинен, получение токена и заголовков нарушение DRY
*/

/*Что стало лучше:
1) Теперь общая логика проверки авторизации и получения заголовков вынесена в отдельную функцию auth
Fункции более модульные и легко расширяемые. 
Добавление новых запросов с авторизацией требует минимального кода, и ошибки в логике авторизации проще обнаружить и исправить
*/