function calculateTotalPrice(quantity: number, price: number): number | null {
  if (typeof quantity !== 'number' || typeof price !== 'number') {
    console.log('Невалидные данные');
    return null;
  }
  return quantity * price;
}

function formatPhoneNumber(number: string): string | null {
  if (typeof number !== 'string' || number.length !== 11) {
    console.error('Невалидные данные');
    return null;
  }
  return `(${number.slice(0, 3)}) ${number.slice(3, 6)}-${number.slice(6)}`;
}

/*Что было плохо:
1) Оба метода не проверяют тип входных данных
*/

/*Что стало лучше:
1) Теперь проверяют, также обрабатывается длина номера телефона
*/