// #1
// Your start-up's BA has told marketing that your website has a large audience in Scandinavia and surrounding countries. Marketing thinks it would be great to welcome visitors to the site in their own language. Luckily you already use an API that detects the user's location, so this is an easy win.

// The Task
// Think of a way to store the languages as a database (eg an object). The languages are listed below so you can copy and paste!
// Write a 'welcome' function that takes a parameter 'language' (always a string), and returns a greeting - if you have it in your database. It should default to English if the language is not in the database, or in the event of an invalid input.
// The Database
// english: 'Welcome',
// czech: 'Vitejte',
// danish: 'Velkomst',
// dutch: 'Welkom',
// estonian: 'Tere tulemast',
// finnish: 'Tervetuloa',
// flemish: 'Welgekomen',
// french: 'Bienvenue',
// german: 'Willkommen',
// irish: 'Failte',
// italian: 'Benvenuto',
// latvian: 'Gaidits',
// lithuanian: 'Laukiamas',
// polish: 'Witamy',
// spanish: 'Bienvenido',
// swedish: 'Valkommen',
// welsh: 'Croeso'

function greet(language) {
  const out = {
    english: "Welcome",
    czech: "Vitejte",
    danish: "Velkomst",
    dutch: "Welkom",
    estonian: "Tere tulemast",
    finnish: "Tervetuloa",
    flemish: "Welgekomen",
    french: "Bienvenue",
    german: "Willkommen",
    irish: "Failte",
    italian: "Benvenuto",
    latvian: "Gaidits",
    lithuanian: "Laukiamas",
    polish: "Witamy",
    spanish: "Bienvenido",
    swedish: "Valkommen",
    welsh: "Croeso",
  };
  console.log(language);
  console.log(out[language]); // когда данные приходят динамически и мы не можем знать имя ключа.

  console.log(out.english);
  console.log(out["english"]);
  return out[language] || out.english; //-- или идентично out['english']
}

greet("spanish");

//#2
// Complete the function which returns the weekday according to the input number:

// 1 returns "Sunday"
// 2 returns "Monday"
// 3 returns "Tuesday"
// 4 returns "Wednesday"
// 5 returns "Thursday"
// 6 returns "Friday"
// 7 returns "Saturday"
// Otherwise returns "Wrong, please enter a number between 1 and 7"

function whatday(num) {
  switch (num) {
    case 1:
      return "Sunday";
    case 2:
      return "Monday";
    case 3:
      return "Tuesday";
    case 4:
      return "Wednesday";
    case 5:
      return "Thursday";
    case 6:
      return "Friday";
    case 7:
      return "Saturday";
    default:
      return "Wrong, please enter a number between 1 and 7";
  }
}
whatday(3);
console.log(whatday(6));

//#3
// Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.
// Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.
function lovefunc(flower1, flower2) {
  if (flower1 % 2 !== 0 && flower2 % 2 === 0) return true;
  else if (flower2 % 2 !== 0 && flower1 % 2 === 0) return true;
  else return false;
}
lovefunc(1, 2);
console.log(lovefunc(2, 2));

// вариант короче
function lovefunc(flower1, flower2) {
  return flower1 % 2 !== flower2 % 2;
}

//#4
//This function should test if the factor is a factor of base.
// Return true if it is a factor or false if it is not.
// About factors
// Factors are numbers you can multiply together to get another number.
// 2 and 3 are factors of 6 because: 2 * 3 = 6
// You can find a factor by dividing numbers. If the remainder is 0 then the number is a factor.
// You can use the mod operator (%) in most languages to check for a remainder
// For example 2 is not a factor of 7 because: 7 % 2 = 1

// Note: base is a non-negative number, factor is a positive number.

function checkForFactor(base, factor) {
  if (base % factor === 0) {
    return true;
  } else {
    return false;
  }
}

// or; checkForFactor = (base, factor) => base % factor == 0 ? true : false

function checkForFactor(base, factor) {
  if (Number.isInteger(base / factor)) {
    return true;
  } else {
    return false;
  }
}

// #5 cell/sperm/genetic
function chromosomeCheck(sperm) {
  if (sperm.includes("Y")) {
    return `Congratulations! You're going to have a son`;
  } else `Congratulations! You're going to have a daugter`;
}

// or

function chromosomeCheck(sperm) {
  return `Congratulations! You're going to have a ${
    sperm === "XY" ? "son" : "daughter"
  }.`;
}

// #6
// DESCRIPTION:
// If you can't sleep, just count sheep!!
// Task:
// Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.
const countSheep = function (num) {
  let result = "";
  for (let i = 1; i <= num; i += 1) {
    result += i.toString() + " sheep...";
  }
  return result;
};

//#7
// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).
// Examples:
// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false
function solution(str, ending) {
  return str.endsWith(ending);
}
// or
function solution(str, ending) {
  return str.slice(0 - ending.length) === ending;
}

// #8
// altERnaTIng cAsE <=> ALTerNAtiNG CaSe
// Define String.prototype.toAlternatingCase (or a similar function/method such as to_alternating_case/toAlternatingCase/ToAlternatingCase in your selected language; see the initial solution for details) such that each lowercase letter becomes uppercase and each uppercase letter becomes lowercase. For example:
// "hello world".toAlternatingCase() === "HELLO WORLD";
// "HELLO WORLD".toAlternatingCase() === "hello world";
// "hello WORLD".toAlternatingCase() === "HELLO world";
// "HeLLo WoRLD".toAlternatingCase() === "hEllO wOrld";
String.prototype.toAlternatingCase = function () {
  return this.split("")
    .map((el) =>
      el === el.toLowerCase() ? el.toUpperCase() : el.toLowerCase()
    )
    .join("");
};
