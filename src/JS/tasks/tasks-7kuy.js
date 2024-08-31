// #1
// This time no story, no theory. The examples below show you how to write function accum:
// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
function accum(s) {
  return [...s]
    .map((char, index) => char.toUpperCase() + char.toLowerCase().repeat(index))
    .join("-");
}

// or

function accum(s) {
  const result = [];
  const lowerStr = s.toLowerCase();

  for (let i = 0; i < lowerStr.length; i++) {
    let str = lowerStr[i].toUpperCase();
    for (let j = 0; j < i; j++) {
      str += lowerStr[i];
    }
    result.push(str);
  }

  return result.join("-");
}

// #2
// In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.
// Example
// filter_list([1,2,'a','b']) == [1,2]
// filter_list([1,'a','b',0,15]) == [1,0,15]
// filter_list([1,2,'aasf','1','123',123]) == [1,2,123]
function filter_list(l) {
  return l.filter((el) => typeof el !== "string");
}
// or
// === 'number'
// or
function filter_list(l) {
  return l.filter((e) => Number.isInteger(e));
}

// #3 - возвращает числа в порядке убывания
// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.
// Examples:
// Input: 42145 Output: 54421
// Input: 145263 Output: 654321
// Input: 123456789 Output: 987654321

function descendingOrder(n) {
  return parseInt(String(n).split("").sort().reverse().join(""));
}
// Целое число, к строке, разбив на масив строк, сортировка по unicode, реверс, объединение в строку

// #4 - возвращает имена из 4х букв
// Make a program that filters a list of strings and returns a list with only your friends name in it.
// If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...
// Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]
function friend(friends) {
  const myFriends = friends.filter((friend) => friend.length === 4);
  return myFriends;
}

// #5
// Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.
// Examples:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"
// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"
function longest(s1, s2) {
  const ss = [...s1, ...s2].sort();
  const tt = Array.from(new Set(ss));
  const FF = tt.join("");
  return FF;
}
// or
const longest = (s1, s2) => [...new Set(s1 + s2)].sort().join("");

// #6
// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.
// Example: (Input --> Output)
// "Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)
// isIsogram "Dermatoglyphics" = true
// isIsogram "moose" = false
// isIsogram "aba" = false
function isIsogram(str) {
  //   Set.prototype.size
  // Возвращает количество значений в Set-объекте (по типу length).
  const set = new Set(str.toUpperCase()).size;
  // console.log(str.length === set);
  if (str.length === set) {
    return true;
  } else {
    return false;
  }
}

isIsogram("qwerty");

// #7 - сравнение предыдущего элемента с последующим и сортируем от мленького к большому.
// Bubblesort is an inefficient sorting algorithm that is simple to understand and therefore often taught in introductory computer science courses as an example how not to sort a list. Nevertheless, it is correct in the sense that it eventually produces a sorted version of the original list when executed to completion.
// At the heart of Bubblesort is what is known as a pass. Let's look at an example at how a pass works.
// Consider the following list:
// 9, 7, 5, 3, 1, 2, 4, 6, 8
// We initiate a pass by comparing the first two elements of the list. Is the first element greater than the second? If so, we swap the two elements. Since 9 is greater than 7 in this case, we swap them to give 7, 9. The list then becomes:
// 7, 9, 5, 3, 1, 2, 4, 6, 8
// We then continue the process for the 2nd and 3rd elements, 3rd and 4th elements ... all the way up to the last two elements. When the pass is complete, our list becomes:
// 7, 5, 3, 1, 2, 4, 6, 8, 9
// Notice that the largest value 9 "bubbled up" to the end of the list. This is precisely how Bubblesort got its name.
// Task
// Given an array of integers, your function bubblesortOnce/bubblesort_once/BubblesortOnce (or equivalent, depending on your language's naming conventions) should return a new array equivalent to performing exactly 1 complete pass on the original array. Your function should be pure, i.e. it should not mutate the input array.

function bubblesortOnce(a) {
  let A = [...a];
  const lastIndex = A.length - 1;
  for (let index = 0; index < lastIndex; index += 1) {
    if (A[index] > A[index + 1]) {
      [A[index], A[index + 1]] = [A[index + 1], A[index]];
    }
  }
  return A;
}
// or
function bubblesortOnce(a) {
  let newArr = [...a];
  newArr.forEach((ele, ind, arr) => {
    if (ele >= arr[ind + 1]) {
      newArr[ind] = arr[ind + 1];
      newArr[ind + 1] = ele;
    }
  });
  return newArr;
}
// or
function bubblesortOnce(a) {
  return [...a].map((e, i, arr) =>
    e > arr[i + 1] ? ((arr[i] = arr[i + 1]), (arr[i + 1] = e), arr[i]) : e
  );
}

// #8 - выбираем 2 самых маленьких числа из массива
// Sum of two lowest positive integers
// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.
// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.
// [10, 343445353, 3453445, 3453545353453] should return 3453455.

function sumTwoSmallestNumbers(numbers) {
  // оператор ...rest (остаточные параметры)
  var [lowest1, lowest2, ...others] = numbers.sort(
    (currentEl, nextEl) => currentEl - nextEl
  );
  return lowest1 + lowest2;
}

// or

function sumTwoSmallestNumbers(numbers) {
  numbers.sort((a, b) => a - b);
  return numbers[0] + numbers[1];
}

// #9
// Vowel Count
// Return the number (count) of vowels in the given string.
// We will consider a, e, i, o, u as vowels for this Kata (but not y).
// The input string will only consist of lower case letters and/or spaces.

function getCount(str) {
  let count = 0;
  const vowels = ["a", "e", "i", "o", "u"];
  const string = str.toLowerCase();
  for (let char of string) {
    if (vowels.includes(char)) {
      count += 1;
    }
  }
  return count;
}

// or

function getCount(str) {
  let count = 0;
  const vowels = ["a", "e", "i", "o", "u"];
  const string = str.toLowerCase().split("");
  count = string.reduce((total, item) => {
    if (vowels.includes(item)) total += 1;
    return total;
  }, 0);

  return count;
}

// №10 - приводим к бинарному числу
// Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.
// The binary number returned should be a string.
// Examples:(Input1, Input2 --> Output (explanation)))
// 1, 1 --> "10" (1 + 1 = 2 in decimal or 10 in binary)
// 5, 9 --> "1110" (5 + 9 = 14 in decimal or 1110 in binary)

function addBinary(a, b) {
  return (a + b).toString(2);
}

// #11 ищем Х и О
// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.
// Examples input/output:
// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

const test = "aehfbjgbldrhsgbr;bqui;dllbdmfjxxoo";
test2(test);
console.log(test2(test));

function test2(test) {
  const split = test.toLowerCase().split("");
  const X = "x";
  const O = "o";

  console.log(split);

  let countX = 0;
  let countO = 0;
  let char;
  for (char of split) {
    if (char === X) {
      countX += 1;
    } else if (char === O) {
      countO += 1;
    }
  }

  console.log(countX);
  console.log(countO);
  if (countX === countO) {
    return true;
  } else if (char !== X && char !== O) return true;
  else return false;
}

// or reduce

// function test2(test) {
//   const split = test.toLowerCase().split("");
//   console.log(split);

//   const X = split.reduce((total, item) => {
//     return total + (item === "x");
//   }, 0);
//   const O = split.reduce((total, item) => {
//     return total + (item === "o");
//   }, 0);
//   console.log(X);
//   console.log(O);
//   if (X === O) {
//     return true;
//   } else if (!X && !O) {
//     return true;
//   } else {
//     return false;
//   }
// }

// or for

// function XO(str) {
//   let x = 0;
//   let o = 0;
//   let arr = [...(str.toLowerCase() + "")].map(String);
//   for (let i = 0; i < str.length; i++) {
//     if (arr[i] === "x") {
//       x+=1;
//     } else if (arr[i] === "o") {
//       o+=1;
//     }
//   }
//   return x === o ? true : false;
// }

// #12
// Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.
// Write a function which takes a list of strings and returns each line prepended by the correct number.
// The numbering starts at 1. The format is n: string. Notice the colon and space in between.
//   Examples: (Input-- > Output)
// [] --> []
// ["a", "b", "c"] --> ["1: a", "2: b", "3: c"]
const number = function (array) {
  if (array.length === 0) {
    return [];
  } else {
    return array.map((el, ind) => ind + 1 + ": " + el); //хотя работает и просто с этой строкой без if\else
  }
};

// #13
// Categorize New Member
// The Western Suburbs Croquet Club has two categories of membership, Senior and Open. They would like your help with an application form that will tell prospective members which category they will be placed.
// To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.
// Input
// Input will consist of a list of pairs. Each pair contains information for a single potential member. Information consists of an integer for the person's age and an integer for the person's handicap.
// Output
// Output will consist of a list of string values (in Haskell and C: Open or Senior) stating whether the respective member is to be placed in the senior or open category.
// Example
// input =  [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]
// output = ["Open", "Open", "Senior", "Open", "Open", "Senior"]

function openOrSenior(data) {
  return data.map(([age, hand]) => (age >= 55 && hand > 7 ? "Senior" : "Open"));
}

// or

const openOrSenior = (data) => {
  let getOpenOrSenior = [];
  for (i = 0; i < data.length; i++) {
    if (data[i][0] >= 55 && data[i][1] > 7) {
      getOpenOrSenior.push("Senior");
    } else {
      getOpenOrSenior.push("Open");
    }
  }
  return getOpenOrSenior;
};

// #14
// A square of squares
// You like building blocks. You especially like building blocks that are squares. And what you even like more, is to arrange them into a square of square building blocks!
// However, sometimes, you can't arrange them into a square. Instead, you end up with an ordinary rectangle! Those blasted things! If you just had a way to know, whether you're currently working in vain… Wait! That's it! You just have to check if your number of building blocks is a perfect square.
// Task
// Given an integral number, determine if it's a square number:
// In mathematics, a square number or perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself.
// The tests will always use some integral number, so don't worry about that in dynamic typed languages.
// Examples
// -1  =>  false
//  0  =>  true
//  3  =>  false
//  4  =>  true
// 25  =>  true
// 26  =>  false

let isSquare = function (n) {
  if (Math.sqrt(n) % 1 === 0) {
    return true;
  }
  return false;
};

// #15
// Given the triangle of consecutive odd numbers:

//              1
//           3     5
//        7     9    11
//    13    15    17    19
// 21    23    25    27    29
// ...
// Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)

// 1 -->  1
// 2 --> 3 + 5 = 8

function rowSumOddNumbers(n) {
  return Math.pow(n, 3);

  // or
  // return n ** 3;
}
