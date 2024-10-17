function processUserDataAndSendEmail(user: User) {
  // Обработка данных пользователяъ
  if(!user){
    console.log('Юзера нет')
    return
  }
  processUserData();

  // Отправка электронной почты
  if (user.email) {
    sendEmailToUser(user.email);
  } else {
    console.warn('Юзер не ввел email');
  }
}

function processUserData(user: User) {
  user.processData();
}

function sendEmailToUser(email: string) {
  emailService.sendEmail(email, 'Данные обработаны успешно');
}

/*Что было плохо:
1) Функция processUserDataAndSendEmail выполняет сразу две задачи — обрабатывает данные пользователя и отправляет письмо
Если нужно будет изменить процесс обработки данных или логику отправки письма, потребуется редактировать одну и ту же функцию
2) Отсутствие проверки user.email перед отправкой письма
*/

/*Что стало лучше:
1) Разделение на отдельные функции
2) Проверка наличия email перед отправкой
*/