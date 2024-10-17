class Classic1 {
  field1: number;
  field2: string;
  field3: boolean;
}

class Classic2 {
  field4: Date;
  field5: number;
  field6: number;
  field7: number;
}

class OverloadedClass {
  field8: number;
  field9: number;
  field10: number;
  // ... другие поля и методы
}

/*Что было плохо:
1) В одном классе слишком много полей, возможно, класс выполняет слишком много различных задач что может нарушать SPR ( единую ответственность )
2) Возможный "God Object"
*/

/*Что стало лучше:
1) Разделение на более мелкие классы
*/