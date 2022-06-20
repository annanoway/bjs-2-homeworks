'use strict'

function solveEquation(a, b, c) {
  let arr = [];
  let k1;
  let k2;
  let k0;
  
    let d = b**2 - 4*a*c

         if (d > 0) {
        k1 = (-b + Math.sqrt(d))/(2*a);
        arr.push(k1);
        k2 = (-b - Math.sqrt(d))/(2*a);
        arr.push(k2);
      } else 
           
      if (d === 0) {
          k0 = -b/(2*a);
          arr.push(k0)
        }
  
  return arr; // array
  }

function calculateTotalMortgage(percent, contribution, amount, date) {

  let percent = parseInt('percent');
  let contribution = parseInt('contribution');
  let amount = parseInt('amount');

  if (typeof(percent) !== 'number') {
    console.log(`Параметр \'percent\' содержит неправильное значение ${percent}`)
  }
  if (typeof(contribution) !== 'number') {
    console.log(`Параметр \'contribution\' содержит неправильное значение ${contribution}`)
  }
  if (typeof(amount) !== 'number') {
    console.log(`Параметр \'amount\' содержит неправильное значение ${amount}`)
  }

  
  let creditBody = amount - contribution;

  let todayDate = new Date();
  let years = date.getFullYear - todayDate.getFullYear
  let months = 12 - todayDate.getMonth + date.getMonth
  let creditTerms = years*12 + months

  let p = percent/12

  let monthPayment = creditBody * (p + (p / (((1 + p)*creditTerms) - 1)))
  
  let totalAmount = parseInt('(monthPayment*creditTerms).toFixed(2)'); 

  console.log(totalAmount)
  return totalAmount;
}