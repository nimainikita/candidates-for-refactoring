class Car {
  private make: string;
  private model: string;
  private year: number;
  private color: string;
  private price!: number;
  private mileage: number;

  constructor(make: string, model: string, year: number, color: string, price: number, mileage: number) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
    this.setPrice(price)
    this.mileage = mileage;
  }

  public getMake(): string {
    return this.make;
  }

  public getModel(): string {
    return this.model;
  }

  public getYear(): number {
    return this.year;
  }

  public getColor(): string {
    return this.color;
  }

  public getPrice(): number {
    return this.price;
  }

  public setPrice(price: number): void {
    if (price < 0) {
      throw new Error("Price cannot be negative.");
    }
    this.price = price;
  }

  public getMileage(): number {
    return this.mileage;
  }

  public setMileage(mileage: number): void {
    if (mileage < 0) {
      throw new Error("Mileage cannot be negative.");
    }
    this.mileage = mileage;
  }

}


/*Что было плохо:
1) Отсутствие методов доступа к свойствам класса и конструктора ограничивало взаимодействие с объектами Car, 
затрудняя их использование и не обеспечивая корректную проверку значений. Это нарушало инкапсуляцию и безопасность.
*/

/*Что стало лучше:
1) Добавление методов доступа и конструктора, теперь пользователи класса могут безопасно взаимодействовать с его свойствами, 
проверка в сеттерах предотвращает установку некорректных значений
*/