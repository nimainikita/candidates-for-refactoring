enum ShapeType {
  Circle,
  Square,
}

function calculateArea(shape: ShapeType, radiusOrSide: number): number {
  let area = 0;
  if (radiusOrSide < 0) {
    throw new Error("radiusOrSide должен быть > нуля");
  }
  switch (shape) {
    case ShapeType.Circle:
      area = Math.PI * Math.pow(radiusOrSide, 2);
      break;
    case ShapeType.Square:
      area = Math.pow(radiusOrSide, 2);
      break;
    default:
      throw new Error("Неизвестный тип");
  }

  return area;
}

console.log(calculateArea(ShapeType.Circle, 5)); // Output: 78.54

/*Что было плохо:
1) Нет обработки случаев, когда shape не соответствует ни одному из перечисленных типов ( circle или square )
Случай, когда radiusOrSide может быть отрицательным значением
*/

/*Что стало лучше:
1) Ввод дополнительной обработки ошибок для shape и radiusOrSide
*/