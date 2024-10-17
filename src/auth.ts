type TPayment = {
  amount: number;
  rcCode: number;
};

type TGatewayService = {
  sendAuth: (payment: TPayment) => number;
};

const auth = (payment: TPayment, gateway: TGatewayService) => {
  const rcCode = gateway.sendAuth(payment);

  return {
    ...payment,
    rcCode,
  };
};

/*Что было плохо:
1) Мутирование объекта payment внутри функции auth нарушало принцип иммутабельности и усложняло отслеживание изменений состояния
2) Функция не возвращала явного результата, что делало её использование неочевидным
*/

/*Что стало лучше:
1) Теперь функция auth возвращает новый объект payment с обновленным rcCode, что делает её чистой функцией
*/



