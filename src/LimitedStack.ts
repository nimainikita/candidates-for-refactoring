interface Stack<T> {
  pop(): T | null;
  push(item: T): void;
  percentFull(): number;
}

class UnlimitedStack<T> implements Stack<T> {
  percentFull(): number {
    return 0;
  }
}

/*Что было плохо:
1)
*/

/*Что стало лучше:
1)
*/