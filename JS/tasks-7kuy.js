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
