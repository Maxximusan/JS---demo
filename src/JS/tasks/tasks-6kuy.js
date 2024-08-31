// #1
// You will be given a number and you will need to return it as a string in Expanded Form. For example:
// expandedForm(12); // Should return '10 + 2'
// expandedForm(42); // Should return '40 + 2'
// expandedForm(70304); // Should return '70000 + 300 + 4'
// NOTE: All numbers will be whole numbers greater than 0.

const expandedForm = (n) => {
  n.toString()
    .split("")
    .reverse()
    .map((a, i) => a * Math.pow(10, i))
    .filter((a) => a > 0)
    .reverse()
    .join(" + ");

  //   console.log(n.toString());
  //   console.log(n.toString().split(""));
  //   console.log(n.toString().split("").reverse());
  //   console.log(
  //     n
  //       .toString()
  //       .split("")
  //       .reverse()
  //       .map((a, i) => a * Math.pow(10, i))
  //   );
  //   console.log(
  //     n
  //       .toString()
  //       .split("")
  //       .reverse()
  //       .map((a, i) => a * Math.pow(10, i))
  //       .filter((a) => a > 0)
  //   );
  //   console.log(
  //     n
  //       .toString()
  //       .split("")
  //       .reverse()
  //       .map((a, i) => a * Math.pow(10, i))
  //       .filter((a) => a > 0)
  //       .reverse()
  //   );
  //   console.log(
  //     n
  //       .toString()
  //       .split("")
  //       .reverse()
  //       .map((a, i) => a * Math.pow(10, i))
  //       .filter((a) => a > 0)
  //       .reverse()
  //       .join(" + ")
  //   );
};

// console.log(Math.pow(10, 0)); любое число в нулевой степени равно 1-му
expandedForm(70305);

// #2
// Build Tower
// Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.
// For example, a tower with 3 floors looks like this:
// [
//   "  *  ",
//   " *** ",
//   "*****"
// ]

function towerBuilder(numberOfFloors) {
  let arrayTower = [];
  let space;
  let star;

  for (let i = 1; i <= numberOfFloors; i += 1) {
    space = " ".repeat(numberOfFloors - i);
    star = "*".repeat(2 * i - 1);
    arrayTower.push(`${space}${star}${space}`);
  }
  return arrayTower;
}
console.log(towerBuilder(10));

// #3
// There is a queue for the self-checkout tills at the supermarket. Your task is write a function to calculate the total time required for all the customers to check out!
// input
// customers: an array of positive integers representing the queue. Each integer represents a customer, and its value is the amount of time they require to check out.
// n: a positive integer, the number of checkout tills.
// output
// The function should return an integer, the total time required.
// Important
// Please look at the examples and clarifications below, to ensure you understand the task correctly :)
function queueTime(customers, n) {
  // creates an array of length n representing the tills
  // Each till is given a value of 0 to represent initial waitTime before the queue begins.
  const tills = new Array(n).fill(0);
  // goes through the queue of customer waitTimes
  for (let waitTime of customers) {
    // finds the till with the least wait time on it, adds the next customer's time to it
    const lowestWaitTill = tills.indexOf(Math.min(...tills));
    tills[lowestWaitTill] += waitTime;
  }
  // end result is that the waitTimes (load) on the tills are distributed optimally.
  // The waitTime of the till with the heaviest load represents the total time taken
  return Math.max(...tills);
}

// #4
// Напишите функцию sum, которая бы работала следующим образом:

// sum(1)(2) == 3; // 1 + 2
// sum(1)(2)(3) == 6; // 1 + 2 + 3
// sum(5)(-1)(2) == 6
// sum(6)(-1)(-2)(-3) == 0
// sum(0)(1)(2)(3)(4)(5) == 15
function sum(a) {
  let currentSum = a;

  function f(b) {
    currentSum += b;
    return f;
  }

  f.toString = function () {
    return currentSum;
  };

  return f;
}

// описание - тут --  https://learn.javascript.ru/task/sum-many-brackets
