const match = rawHeaderLine.match(headerPattern);

if(match){
  const headerName = match[1].toLowerCase();
  const headerValue = match[2];
  headers.set(headerName, headerValue);
}


/*Что было плохо:
1) match может вернуть null, риск ошибки в рантайме
2) Использование индексов для доступа к элементам массива без пояснения снижает читаемость кода
Трудно понять, что именно содержится в match[1] и match[2]
*/

/*Что стало лучше:
1) Добавлена проверка результата match
2) Присвоили непонятные индексы в переменные с понятным названием
*/