class FilmController {
  private popupOpened: boolean;
  private popup: Popup;

  constructor(popup: Popup) {
    this.popup = popup;
    this.popupOpened = false;
  }

  openDetails() {
    const popup = new Popup();
    this.popupOpened = true;
  }

  isPopupOpened() {
    return this.popupOpened;
  }
}

/*Что было плохо:
1) Поле popupOpened не инициализировано в конструкторе, что может привести к ошибкам ( undefined состояние )
2) Создание объекта Popup внутри метода openDetails привязывает контроллер к конкретной реализации попапа. 
Это делает тестирование и расширение класса сложнее, так как его поведение жёстко связано с классом Popup
*/

/*Что стало лучше:
1) Поле popupOpened инициализировано в конструкторе, что улучшает предсказуемость состояния
2) Popup передается через конструктор, что позволяет легче тестировать FilmController и придерживаться принципа инверсии зависимостей
*/