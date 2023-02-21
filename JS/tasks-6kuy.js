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
