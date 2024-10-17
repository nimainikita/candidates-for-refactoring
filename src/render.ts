const render = (size: number) => {
  const html = size > 0 ? `<hr size="${size + 1}">` : '<hr>';
  return html;
};

/*Что было плохо:
1) Строить строку с помощью методов append для такой простой задачи избыточно. Это делает код более нагроможденным и сложным для чтения
*/

/*Что стало лучше:
1) Замена StringBuffer на шаблонные строки делает код более компактным и читаемым
*/