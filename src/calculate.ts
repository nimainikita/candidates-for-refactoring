const square = (number: number):number => number * number;



/*Что было плохо:
1) Имя функции calculate не отражает ее конкретное назначение
2) Не было явного возвращаемого значения
*/

/*Что стало лучше:
1) Укороченная и более понятная запись. Можно было использовать Дженерики, но тогда в теле функции пришлось бы проверять что number это число с помощью type guard
*/