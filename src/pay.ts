const pay = () => {
  for (let e of employees) {
    if (e.isPayday()) {
      const pay = e.calculatePay();

      e.deliverPay(pay);
    }
  }
};


/*Что было плохо:
1)
*/

/*Что стало лучше:
1)
*/