//Given a string, create a function to reverse the case. All lower-cased letters should be upper-cased, and vice versa.

//pseudo
//go through each letter of the phrase
//if letter is uppercase then change to lowercase
//if letter is lowercase then change to uppercase

function reverseCase(phrase) {
  var result = "";
  var i;
  for (i = 0; i < phrase.length; i++) {
    let letter = phrase.charAt(i);
    if (letter === letter.toUpperCase()) {
      result = result.concat(letter.toLowerCase());
    } else {
      result = result.concat(letter.toUpperCase());
    }
    console.log(phrase[i]);
  }

  return result;
}

console.log(reverseCase("HAppY"));

//Create a function that prints 1 to a limit and the number should be divisible by 5.

//create a variable to return the number
//go through each number from 1 to a limit
//if the number is divisible by 5 then save to the variable
//if the number is not divisible by 5 then do not save to the variable

//assert expected == actuals
//assert [] === divisibleFive(1)
//assert [5] === divisibleFive(5)
//assert [5, 10] === divisibleFive(10)

function divisibleFive(limit) {
  var number = [];
  for (var i = 1; i <= limit; i++) {
    if (i % 5 == 0) {
      number.push(i);
    } else {
    }
  }

  return number;
}

console.log(divisibleFive(50));

//Create a function that prints out 10 numbers that are multiple of 6.

//start at 6
//output is a list of 10 numbers separated by commas

function multipleSix() {
  var result = "";
  for (var i = 1; i <= 10; i++) {
    if (i != 10) {
      result = result.concat(i * 6, ",");
    } else {
      result = result.concat(i * 6);
    }
  }

  return result;
}

console.log(multipleSix());

//Create a function that computes the hamming distance between two strings.

//input character limit for each parameter is 6 random alphabets
//go through each character in each parameter parallel to each other
//if the letter in parameter 1 does not match parameter 2 in the same position then increase the character difference count by 1
//if the letter in parameter 1 matches parameter 2 in the same position then do not increase the character difference count

function hammingDistance(string1, string2) {
  var result = 0;
  for (var i = 0; i < string1.length; i++) {
    let characters1 = string1.charAt(i);
    let characters2 = string2.charAt(i);
    if (characters1 === characters2) {
      result;
    } else {
      result = result + 1;
    }
  }
  return result;
}

console.log(hammingDistance("a", "d"));
console.log(hammingDistance("d", "d"));
console.log(hammingDistance("sdsdwf", "ewreff"));

//Create a function that takes an array of numbers. Return the largest number in the array.

function numbers(arr) {
  var result = 0;
  for (var i = 0; i < arr.length; i++) {
    let largeNum = arr[i];
    if (largeNum > result) {
      result = largeNum;
    } else {
      result;
    }
  }
  return result;
}

let arr = [2, 6, 8, 3];
console.log(numbers(arr));

//Create a function that finds the index of a given item. e.g. search([1, 5, 3], 5) returns index 1

//choose a number in the array
//output is the position of the chosen number in the array

function numIndex(arrList, arrNum) {
  var result = 0;
  for (var i = 0; i < arrList.length; i++) {
    let array = arrList[i];
    let number = arrNum;
    if (number == array) {
      result = i;
    } else {
    }
  }

  //(or this works too) ==> result = arr.indexOf(arrNum);

  return result;
}

let arrList = [3, 16, 10, 20, 50];
let arrNum = 20;
console.log(numIndex(arrList, arrNum));

//Create a function that returns a number, based on the string provided.

function word(num) {
  if (num == "zero") {
    return 0;
  } else if (num == "one") {
    return 1;
  } else if (num == "two") {
    return 2;
  } else if (num == "three") {
    return 3;
  } else if (num == "four") {
    return 4;
  } else if (num == "five") {
    return 5;
  }
}

console.log(word("three"));

//Create a function that takes a string and returns the number (count) of vowels contained within it.

//go through each character in a given string
//if the character is a vowel (a,e,i,o,u) then add it to the number count
//if the character is not a vowel then do no add it to the vowel count

function vowelCount(string) {
  var vowelSum = 0;
  for (var i = 0; i < string.length; i++) {
    if (string[i].match(/[aeiou]/g)) {
      vowelSum = vowelSum + 1;
    }
  }
  return vowelSum;
}

console.log(vowelCount("happy times"));

//Create a function that returns the index of the first vowel in a string.

//go through each character of a given string
//if the character is the first vowel of the string then return the index position
//if the character is not a vowel or the first vowel of the string then do not return the index position

function firstVowel(string) {
  var result = 0;
  for (var i = 0; i < string.length; i++) {
    if (string[i].match(/[aeiou]/g)) {
      result = i;
      break;
    } else {
      result = "no vowels";
    }
  }
  return result;
}
console.log(firstVowel("fried chicken"));

//this works too
// function vowel(string) {
//   return string.match(/[aeiou]/).index;
// }

//Create a function that takes an array of non-negative integers and strings and return a new array without the strings.

//create a variable to return the new array
//go through the array and if the item is an integer, add it to the new array
//if item is a string, do not add it to the new array

function onlyIntegers(items) {
  var newArray = [];
  for (i = 0; i < items.length; i++) {
    if (typeof items[i] === "number") {
      newArray.push(items[i]);
    } else {
    }
  }
  return newArray;
}

let items = [5, "friday", "saturday", 3];
console.log(onlyIntegers(items));

//Create a function that takes in an array of numbers and returns the sum of its cubes.

//create a variable returning sum of cube numbers
//loop through the array and times each number in the array to itself 3 times
//add all the numbers together and return the sum in the variable

function cubeSum(numbers) {
  var sum = 0;
  for (i = 0; i < numbers.length; i++) {
    var cubeValue = Math.pow(numbers[i], 3);
    console.log(cubeValue);
    sum = sum + cubeValue;
  }
  return sum;
}

let numbersList = [2, 3, 6];
console.log(cubeSum(numbersList));

//Given two strings, repeatedly cycle through all of the letters in the first string until it is the same length as the second string.

//create a variable returning first string that matches second string length
//go through the first string until it matches the length of the second string
//if the first string length matches the second string length then stop
//if the first string length did not reach the the second string length, keep going

function sameLength(stringOne, stringTwo) {
  var result = "";
  for (i = 0; i < stringTwo.length; i++) {
    result = result + stringOne[i % 3];
  }

  return result;
}

let stringOne = "sun";
let stringTwo = "philantropist";

console.log(sameLength(stringOne, stringTwo));

//or written this way

// function sameLength(stringOne, stringTwo) {
//   var result = "";
//   while (result.length <= stringTwo.length) {
//     result += stringOne;
//   }
//   return result.substring(0, stringTwo.length);
// }

// let stringOne = "sun";
// let stringTwo = "philantropist";

// console.log(sameLength(stringOne, stringTwo));

//A word is on the loose and now has tried to hide amongst a crowd of tall letters! Help write a function to detect what the word is, knowing the following rules:
//The wanted word is in lowercase.
//The crowd of letters is all in uppercase.
//Note that the word will be spread out amongst the random letters, but their letters remain in the same order.

function hiddenWord(collection) {
  var result = "";
  for (i = 0; i <= collection.length; i++) {
    let letter = collection.charAt(i);
    if (letter === letter.toLowerCase()) {
      result = result.concat(letter);
    } else {
      result = result;
    }
  }
  return result;
}

let collection = "YEvNaMFGcUISIaDtJKDiOoOnEs";
console.log(hiddenWord(collection));

//Create a function that takes a number (step) as an argument and returns the number of matchsticks in that step.
//Think of the input (step) as the total number of houses that have been connected together.

//create a "total" variable that equals 0
//step 0 will return 0 matchsticks
//if the step is not 0 then multiply the step by 5 to get total number of matchsticks and replace previous "total" value
//add 1 to the "total" value returned

function matchsticks(step) {
  var total = 0;
  if (step == 0) {
    return total;
  } else {
    total = step * 5;
    return total + 1;
  }
}

console.log(matchsticks(50));

//Create a function to return the amount of "potatoes" there are in a string.

//create a variable called potatoNumber
//loop through a string that contains the word potatoes where each increment is 8 characters
//return the number of potatoes in the string

function potatoes(string) {
  var potatoNumber = 1;
  for (i = 1; i < string.length; i++) {
    if (string.charAt(i) == "p") {
      potatoNumber = potatoNumber + 1;
    } else {
      potatoNumber = potatoNumber;
    }
  }
  return potatoNumber;
}

console.log(
  potatoes("potatoespotatoespotatoespotatoespotatoespotatoespotatoespotatoes")
);

//Create a function that takes two arguments. Both arguments are integers, a and b. Return true if one of them is 10 or if their sum is 10.
//if integer a or b is 10 then return a boolean of true
//if integer a and integer b adds up to 10 then return a boolean of true
//if integer a and integer b do not add up to 10 then return a boolean of false

function makesTen(a, b) {
  if (a === 10 || b === 10) {
    return true;
  } else if (a + b === 10) {
    return true;
  } else {
    return false;
  }
}

console.log(makesTen(10, 8));
console.log(makesTen(8, 8));
console.log(makesTen(2, 8));

//You are counting points for a basketball game, given the amount of 2-pointers scored and 3-pointers scored, find the final points for the team and return that value.
//points start at 0
//points in first argument are worth 2 times the points
//points in second argument are worth 3 times the points
//add total points in first argument and total points in second argument to get the grand total
//return grand total

function points(twoPoints, threePoints) {
  var totalPoints = 0;
  totalPoints = twoPoints * 2 + threePoints * 3;
  return totalPoints;
}

console.log(points(10, 3));

//Write a function that checks whether a person can watch an MA15+ rated movie. One of the following two conditions is required for admittance:

//The person is at least 15 years old.
//They have parental supervision.
//The function accepts two parameters, age and isSupervised. Return a boolean.

function acceptedIntoMovie(age, isSupervised) {
  if (age >= 15 || isSupervised == "yes") {
    return true;
  } else {
    return false;
  }
}

console.log(acceptedIntoMovie(25, "no"));
console.log(acceptedIntoMovie(10, "yes"));
console.log(acceptedIntoMovie(13, "no"));
console.log(acceptedIntoMovie(15, "yes"));

//Write a function that takes a two-digit number and determines if it's the largest of two possible digit swaps.

function largestSwap(numOne, numTwo) {
  number = "";
  number = number.concat(numOne) + number.concat(numTwo);
  if (numOne > numTwo) {
    return true;
  } else if (numOne == numTwo) {
    return true;
  } else {
    return false;
  }
}

console.log(largestSwap(5, 9));

//You have two arrays. One shows the names of the people names, while the other shows their occupation jobs. Your task is to create an object displaying each person to their respective occupation.

const names = ["Ally", "Zoe", "Sam", "Chloe", "Carter"];
const jobs = ["Accountant", "Engineer", "Architect", "Doctor", "Nurse"];

function assignJob(names, jobs) {
  var nameAndJob = [];
  for (i = 0; i < names.length; i++) {
    nameAndJob.push(names[i] + ": " + jobs[i]);
  }
  return nameAndJob;
}

console.log(assignJob(names, jobs));

//Create a function that takes a number x and a character y ("m" for male, "f" for female), and returns the name of an ancestor (m/f) or descendant (m/f).

//If the number is negative, return the related ancestor.
//If positive, return the related descendant.
//You are generation 0. In the case of 0 (male or female), return "me!".

//Create a function that takes a number as an argument and returns the appropriate error message. You should do this without using the switch or if statements.

//The input error will be 1 to 5:

//1 >> "Check the fan"
//2 >> "Emergency stop"
//3 >> "Pump Error"
//4 >> "c"
//5 >> "Temperature Sensor Error"
