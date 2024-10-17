enum DiveReason {
  OK = 'ok',
  NOT_OK = 'not_ok'
}


class MoogDiver {
  gradient: Gradient;
  splines: List<Spline>;

  public dive(reason: DiveReason) {
    this.prepareForDive();
    this.diveForMoog(reason);
  }

  private prepareForDive() {
    this.saturateGradient();
    this.reticulateSplines();
  }

  private diveForMoog(reason: DiveReason) {
    switch (reason) {
      case DiveReason.OK:
        this.splines.doOk();
        break;
      case DiveReason.NOT_OK:
        this.splines.doNotOk();
        break;
      default:
        throw new Error('Неизвестный параметр reason');
    }
  }

  private saturateGradient() {
    this.gradient = // some logic
  }

  private reticulateSplines() {
    // some logic
    this.splines = this.gradient.getSplines();
  }

}

/*Что было плохо:
1) Метод dive выполняет несколько действий, которые относятся к разным аспектам поведения класса
*/

/*Что стало лучше:
1) Теперь метод dive является точкой входа и описывает шаги процесса, делегируя выполнение конкретных действий другим методам
Вместо строкового сравнения добавлен enum
*/