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

// Two numbers are passed as parameters. The first parameter divided by the second parameter will have a remainder, possibly zero. Return that value.

function remainder(int1, int2) {
  let getRemainder = int1 % int2;
  return getRemainder;
}

console.log(remainder(-20, 100));

// Create a function that takes length and width and finds the perimeter of a rectangle.

function perimeter(length, width) {
  let getPerimeter = (length + width) * 2;
  return getPerimeter;
}

console.log(perimeter(30, 8));

// A student learning JavaScript was trying to make a function.
// His code should concatenate a passed string name with string "Coding" and stores it in a variable called result.

function nameString(name) {
  var string1 = name;
  var string2 = "Coding";
  var result = string1.concat(string2);
  return result;
}

console.log(nameString("Jessica"));

// Write a function that returns the string "something" joined with a space " " and the given argument a.

function giveMeSomething(a) {
  var string1 = "something";
  var string2 = a;
  var phrase = string1 + " " + string2;
  return phrase;
}

console.log(giveMeSomething("great is ahead"));

// Create a function that takes a number as its only argument and returns true if it's less than or equal to zero, otherwise return false.

function numberLessThanZero(num) {
  if (num <= 0) {
    result = true;
  } else {
    result = false;
  }
  return result;
}

console.log(numberLessThanZero(-18));

//You are counting points for a basketball game, given the amount of 2-pointers scored and 3-pointers scored, find the final points for the team and return that value.

function countPoints(points1, points2) {
  var score1 = points1 * 2;
  var score2 = points2 * 3;
  var finalPoints = score1 + score2;
  return finalPoints;
}

console.log(countPoints(36, 8));

// Given two numbers, return true if the sum of both numbers is less than 100. Otherwise return false.

function numberGreaterThan100(num1, num2) {
  if (num1 + num2 < 100) {
    result = true;
  } else {
    result = false;
  }
  return result;
}

console.log(numberGreaterThan100(88, 33));

// A farmer is asking you to tell him how many legs can be counted among all his animals. The farmer breeds three species:
// chickens = 2 legs
// cows = 4 legs
// pigs = 4 legs
// The farmer has counted his animals and he gives you a subtotal for each species.
// You have to implement a function that returns the total number of legs of all the animals.

function totalLegs(animal1, animal2, animal3) {
  var legs1 = animal1 * 2;
  var legs2 = animal2 * 4;
  var legs3 = animal3 * 4;
  var allLegs = legs1 + legs2 + legs3;
  return allLegs;
}

console.log(totalLegs(6, 10, 26));
