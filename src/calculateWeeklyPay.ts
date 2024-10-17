const MAX_STRAIGHT_TIME = 400;
const OVERTIME_MULTIPLIER = 1.5;

function calculateWeeklyPay(overtime: boolean): number {
  const tenthRate: number = getTenthRate();
  const tenthsWorked: number = getTenthsWorked();

  if (tenthRate <= 0 || tenthsWorked < 0) {
    throw new Error("Невалидное значение");
  }

  const straightTime: number = Math.min(MAX_STRAIGHT_TIME, tenthsWorked);
  const overTime: number = Math.max(0, tenthsWorked - straightTime);
  const straightPay: number = straightTime * tenthRate;

  const overtimeRate: number = overtime ? OVERTIME_MULTIPLIER * tenthRate : tenthRate;
  const overtimePay: number = Math.round(overTime * overtimeRate);

  return straightPay + overtimePay;
}


/*Что было плохо:
1) Сложная логика и использование "магических чисел" затрудняли понимание кода, разработчик не мог понять что значит 400 или 1.5 посреди вычислений и т.д
2) Отсутствие обработки ошибок ( возвращаемые значения функций getTenthRate и getTenthsWorked имеют допустимые значения? )
*/

/*Что стало лучше:
1) Улучшение читаемости за счет явных имен констант и упрощение логики расчета и обработка ошибок
*/