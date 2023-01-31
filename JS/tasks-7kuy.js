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

// #3
// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.
// Examples:
// Input: 42145 Output: 54421
// Input: 145263 Output: 654321
// Input: 123456789 Output: 987654321

function descendingOrder(n) {
  return parseInt(String(n).split("").sort().reverse().join(""));
}
// Целое число, к строке, разбив на масив строк, сортировка по unicode, реверс, объединение в строку

// #4
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
  const set = new Set(str.toUpperCase()).size;
  // console.log(str.length === set);
  if (str.length === set) {
    return true;
  } else {
    return false;
  }
}

isIsogram("qwerty");
