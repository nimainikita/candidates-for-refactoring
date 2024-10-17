type TMutableList<T> = T[];

enum WarningType {
  LEGACY_CODE_DEPENDENCY,
}

type TWarning = {
  type: WarningType;
};

const Warning = (type: WarningType): TWarning => ({type});

const addError = (errors: TMutableList<TWarning>): TMutableList<TWarning> => {
  return [...errors, Warning(WarningType.LEGACY_CODE_DEPENDENCY)];;
};


/* Что было плохо и почему:
1) addError изменяла переданный массив errors напрямую, 
это нарушает принцип иммутабельности и может привести к ошибкам в более сложных ситуациях где надо отслеживать изменения состояний
2) Стрелочная функция Warning была не слишком читаема, заменена на более простой вид
*/

/*Что стало лучше:
1) Warning теперь использует более краткий синтаксис ( + к читаемости )
2) Теперь addError возвращает новый массив с добавленным элементом, вместо изменения исходного массива
Это делает функцию более предсказуемой и безопасной для использования в асинхронном коде
*/