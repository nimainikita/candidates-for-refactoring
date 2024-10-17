class Order {
  private customer: Customer;

  constructor(customer: Customer) {
    this.customer = customer;
  }

  getTotalPrice(): number {
    return this.customer.calculateTotalPrice();
  }
}

class Customer {
  private items: Item[];

  calculateTotalPrice(): number {
    // вычисление общей цены на основе items
  }
}

/*Что было плохо:
1) Жесткая зависимость между классами Order и Customer ( класс Order самостоятельно создает экземпляр Customer в своем конструкторе ), что мы уже встречали не раз
2) Класс Order отвечает не только за управление заказом, но и за создание клиента
*/

/*Что стало лучше:
1) Класс Order теперь принимает объект Customer в своем конструкторе. 
Это устраняет жесткую связь между ними и позволяет передавать в Order разные объекты Customer
2) Теперь Order не отвечает за создание Customer, а только использует переданный объект для вычисления общей цены
*/