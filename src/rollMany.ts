const rollMany = (n: number, pins: number) => {
  const rolls = [];
  for (let rollCount = 0; rollCount < n; rollCount++) {
    rolls.push(pins);
  }
  return rolls;
};

/*Что было плохо:
1) Понять бы начальную задумку самой функции 
*/

/*Что стало лучше:
1) Теперь rollMany возвращает массив, содержащий значения pins для каждого из бросков, что делает её более универсальной для использования в дальнейшем
*/