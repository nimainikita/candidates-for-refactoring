class SomeClass {

  public someMethod() {
      try {
          this.doSomethingSafe();
      } catch (Exception e) {
          e.printStackTrace();
      }
  }

  private doSomethingSafe() {
     console.log('Safe operation')
  }
}

/*Что было плохо:
1) Метод neverUsedMethod не используется нигде в классе, что приводит к бесполезному хранению неиспользуемого кода
2) if(false) - типичный пример мертвого кода, никогда не исполнится и не имеет смысла
*/

/*Что стало лучше:
1) Убрали бессмысленные куски кода
*/