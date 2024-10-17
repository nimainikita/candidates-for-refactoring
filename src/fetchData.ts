const DEFAULT_TIMEOUT = 5000;

function fetchData(url: string, timeout: number = DEFAULT_TIMEOUT) {
  // Используем значение по умолчанию для таймаута
  fetch(url, { timeout })
    .then((response) => console.log(response))
    .catch((error) => console.error(error));
}


/*Что было плохо:
1) Hard coded значение DEFAULT_TIMEOUT делало код менее гибким и сложным,
DEFAULT_TIMEOUT использовалась без возможности изменения в конкретном вызове функции fetchData
*/

/*Что стало лучше:
1) Добавление параметра timeout в функцию fetchData улучшило гибкость и позволило использовать различные значения таймаута для разных случаев
DEFAULT_TIMEOUT остается жестко заданной константой, но теперь его можно переопределить при вызове функции
*/