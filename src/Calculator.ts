class Calculator {
  public add(a: number, b: number): number {
    return a + b;
  }
  public subtract(a: number, b: number): number {
    return a - b;
  }
  public multiply(a: number, b: number): number {
    return a * b;
  }
  public divide(a: number, b: number): number {
    if (b === 0) {
      throw new Error("Нельзя делить на 0");
    }
    return a / b;
  }
}


/*Что было плохо:
1) Не было обработки деления на 0, т.к. на ноль делить нельзя ( могло привести к нежелательным результатам, таким как Infinity )
*/

/*Что стало лучше:
1) Появилась обработка деления на 0
*/