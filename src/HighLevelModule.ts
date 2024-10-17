interface ILowLevelModule {
  doSomething(): void;
}

class LowLevelModule implements ILowLevelModule {
  doSomething() {
    // реализация
  }
}

class HighLevelModule {
  private lowLevelModule: ILowLevelModule;

  constructor(lowLevelModule: ILowLevelModule) {
    this.lowLevelModule = lowLevelModule; // передача зависимости
  }

  doSomethingElse() {
    this.lowLevelModule.doSomething(); // использование непосредственной зависимости
  }
}

/*Что было плохо:
1) HighLevelModule жестко зависел от конкретной реализации LowLevelModule, что усложняло тестирование и замену зависимости.
2) Сложности с тестированием класса т.к. он всегда использовал один и тот же экземпляр LowLevelModule
*/

/*Что стало лучше:
1) Теперь LowLevelModule передается через конструктор, что улучшает гибкость и тестируемость класса.
2) Передачей зависимостей через конструктор можно заменить LowLevelModule на другой класс, 
реализующий ту же логику, упрощает тестирование.
*/