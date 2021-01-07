//Create a function that takes two numbers as arguments and return their sum.

function sum(num1, num2) {
  let sum = num1 + num2;
  return sum;
}

console.log(sum(5, 6));

//Create a function that takes a number as an argument, increments the number by +1 and returns the result.

function plusOne(num) {
  let addOne = num + 1;
  return addOne;
}

console.log(plusOne(30));

// Write a function that takes the base and height of a triangle and return its area.

function triangleArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

console.log(triangleArea(10, 5));

// Write a function that takes an integer minutes and converts it to seconds.

function convertMinutes(minutes) {
  let seconds = minutes * 60;
  return seconds;
}

console.log(convertMinutes(30));

// Create a function that takes the age and return the age in days.

function convertAge(age) {
  let ageToDays = age * 365;
  return ageToDays;
}

console.log(convertAge(29));

// Create a function that takes voltage and current and returns the calculated power.

function power(voltage, current) {
  let totalPower = voltage * current;
  return totalPower;
}

console.log(power(120, 30));

// Create a function that takes an array containing only numbers and return the first element.

function firstNumArray(arr) {
  let firstNum = arr[0];
  return firstNum;
}

console.log(firstNumArray([12, 1, 3]));

// Create a function that finds the maximum range of a triangle's third edge, where the side lengths are all integers.

function nextEdge(side1, side2) {
  let thirdEdge = side1 + side2 - 1;
  return thirdEdge;
}

console.log(nextEdge(8, 3));
