const createPayment = (isToken: boolean) => {
  try {
    if (isToken) {
      handleTokenPayment();
    } else {
      handleCardPayment();
    }
  } catch (error) {
    console.log("failed:", error);
  }
};

const handleTokenPayment = () => {
  const token = getUrl();
  system.createTransaction(token).setTransaction();
};

const handleCardPayment = () => {
  const cardNumber = account.getCardNumber();
  userAccount.createCardPayment(cardNumber).postTransactionToServer();
};

/*Что было плохо:
1)  Отсутствие обработки ошибок ( возможные сбои в процессе обработки платежей не учитывались, что могло привести к потере данных ), 
трудночитаемость, все в одном месте 
*/

/*Что стало лучше:
1) Разделению логики, обработка ошибок прибавила надежности
*/