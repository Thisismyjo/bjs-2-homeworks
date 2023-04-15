"use strict"

function solveEquation(a, b, c) {
  let arr = [];

  let disc = Math.pow(b, 2) - 4 * a * c;
  if (disc < 0){
    arr.push();
  } else if (disc === 0){
    let calRoot = -b/(2*a);
    arr.push(calRoot);
  } else if (disc > 0){
    let calRootPlus = (-b + Math.sqrt(disc) )/(2*a);
    let calRootMines = (-b - Math.sqrt(disc) )/(2*a);
    arr.push(calRootPlus, calRootMines);
  }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let precentageRate = percent/100;
  let percentMonth = precentageRate/12;
  let bodyAmount = amount - contribution;
  
  let payMent = bodyAmount * (percentMonth + (percentMonth / ((Math.pow((1 + percentMonth), countMonths)) - 1)));
  let entireAmount = payMent * countMonths;
  return +entireAmount.toFixed(2);
}

solveEquation(50, 50, 150);
calculateTotalMortgage(10, 1000, 50000, 12);