// Модуль 1
function calculateTotalPrice(items) {
  return items.reduce((total, item) => total+= item.price, 0)
}

/*Что было плохо:
1) В calculateTotalPrice использовалась изменяемая переменная totalPrice в сочетании с forEach, 
что добавляет императивность и снижает читабельность кода. Код можно сделать проще и понятнее, используя reduce
*/

/*Что стало лучше:
1) В calculateTotalPrice теперь используется reduce, что делает код более декларативным и читабельным, 
можно не создавать отдельную переменную totalPrice
*/


// Модуль 2
function applyDiscount(totalPrice: number, discountPercentage: number) {
  if (totalPrice < 0) {
    throw new Error('Цена не может быть ниже нуля');
  }
  
  if (discountPercentage < 0 || discountPercentage > 100) {
    throw new Error('Скидка должна быть между 0 и 100');
  }

  return totalPrice * (1 - discountPercentage / 100);
}

/*Что было плохо:
1) Функция не проверяет входные значения ( что может привести к отрицательным ценам или скидкам > 100%)
2) Не были типизированны входные данные и выходные
*/

/*Что стало лучше:
1) Теперь функция проверяет допустимость значений 
2) Типизация
*/