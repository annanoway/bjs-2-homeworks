"use strict"

function solveEquation(a, b, c) {
  let arr = [];
  let d;
  let k1;
  let k2;
  let k0;

  d = b ** 2 - 4 * a * c;
  if (d > 0) {
    k1 = (- b + Math.sqrt(d)) / (2 * a);
    arr.push(k1);
    k2 = (- b - Math.sqrt(d)) / (2 * a);
    arr.push(k2);
   }
  
   else 
    if(d === 0) {
      k0 = - b / (2 * a);
      arr.push(k0);
    }

  return arr; // array
}

function calculateTotalMortgage(percent, contribution, amount, date) {

 if (typeof percent === 'string') {
   percent = parseInt(percent)
 } 
  if (typeof contribution === 'string') {
    contribution = parseInt(contribution)
  } 
  if (typeof amount === 'string') {
    amount = parseInt(amount)
  } 

  if (isNaN(percent) || percent <= 0) {
    return console.log(`Параметр \'Процентная ставка\' содержит неправильное значение "${percent}"`)
  } else
  if (isNaN(contribution) || contribution < 0) {
    return console.log(`Параметр "Начальный взнос" содержит неправильное значение "${contribution}"`)
  } else
  if (isNaN(amount) || amount <= 0) {
    return console.log(`Параметр \'Общая сумма\' содержит неправильное значение "${amount}"`)
  }

  let creditBody = amount - contribution

  let todayDate = new Date();
  let years = date.getFullYear() - todayDate.getFullYear() 
  let months = date.getMonth() - todayDate.getMonth();
  let creditTerms = years * 12 + months

  let p = percent / (100 * 12)

  let monthPayment = creditBody * (p + (p / (Math.pow((1 + p), creditTerms) - 1)))
  
  let totalAmount = Math.round(creditTerms * monthPayment * 100) / 100 

  console.log(totalAmount)
  return totalAmount;
}