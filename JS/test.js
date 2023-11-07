// // function findLongestWord(string) {

// //     let allWord = string.split(' ');
// //     let bigWord = allWord[0];

// //     for (let i = 0; i < allWord.length; i += 1) {
// //         if (allWord[i].length > bigWord.length) {
// //             bigWord = allWord[i];

// //         }

// //     }
// //     return bigWord;
// // }
// // console.log(findLongestWord("Lucy stacy csilla "));
// // console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
// // console.log(findLongestWord("Google do a roll"));
// // console.table(findLongestWord("May the force be with you"));

// function printContactsInfo(names = "", phones = "") {
//   const arrayOfNames = names.split(",");
//   const arrayOfPhones = phones.split(",");
//   console.log("arrayOfNames", arrayOfNames);
//   console.log("arrayOfPhones", arrayOfPhones);

//   for (let i = 0; i < arrayOfNames.length; i += 1) {
//     const aName = arrayOfNames[i];
//     const aPhones = arrayOfPhones[i];
//     console.log(`name: ${aName}; phones: ${aPhones}`);
//   }
// }

// printContactsInfo(
//   "Jacob,William,Solomon,Nicolas",
//   "89001234567,89001112233,890055566377,890055566300"
// );

// // const book = {
// //     title: "The Last Kingdom",
// //     author: "Bernard Cornwell",
// //     genres: ["historical prose", "adventure"],
// //     isPublic: true,
// //     rating: 8.38,
// // };

// // book.rating = 9;
// // book.isPublic = false;
// // book.genres.push("драма");

// // console.log(book.rating); // 9
// // console.log(book.isPublic); // false
// // console.log(book.genres); // ['historical prose', 'adventures', 'драма']

// // const a = { x: 2, y: 10, z: 35 };
// // const b = { x: 5, y: 4, z: 17, t: 80, q: 55 };

// // const c = { ...a, x: 1, ...b, z: 6, name: 'mango', color: 'green' };

// // console.log(c)

// // const name = "Repair Droid";
// // const price = 2500;
// // const image = "https://via.placeholder.com/640x480";
// // const tags = ["on sale", "trending", "best buy"];

// // const product = {
// //     name,
// //     price,
// //     image,
// //     tags,
// //     // Change code below this line
// //     // Change code above this line
// // };
// // console.log(product);

// // const emailInputName = "email";
// // const passwordInputName = "password";

// // const credentials = {
// //     // Change code below this line
// //     [emailInputName]: "henry.carter@aptmail.com",
// //     [passwordInputName]: "jqueryismyjam",

// //     // Change code above this line
// // };
// // console.log(credentials);

// // const products = [
// //     { name: "Radar", price: 1300, quantity: 4 },
// //     { name: "Scanner", price: 2700, quantity: 3 },
// //     { name: "Droid", price: 400, quantity: 7 },
// //     { name: "Grip", price: 1200, quantity: 9 },
// // ];

// // console.table(products);

// // function getProductPrice(productName) {
// //     // Change code below this line
// //     for (const product of products) {
// //         if (product.name === productName) {
// //             return (product.price);
// //         }
// //     }

// //     return null;
// //     // Change code above this line
// // }
// // console.log(getProductPrice("Radar"));

// // const products = [
// //     { name: "Radar", price: 1300, quantity: 4 },
// //     { name: "Scanner", price: 2700, quantity: 3 },
// //     { name: "Droid", price: 400, quantity: 7 },
// //     { name: "Grip", price: 1200, quantity: 9 },
// // ];

// // function getAllPropValues(propName) {
// //     // Change code below this line
// //     const emptyMassive = [];

// //     for (const product of products) {
// //         if (Object.keys(product).includes(propName)) {
// //             emptyMassive.push(product[propName]);
// //         }
// //     }
// //     return emptyMassive;

// //     // Change code above this line
// // }
// // console.log(getAllPropValues('price'));

// // автопроверка 3 модуль 41 задача
// // const atTheOldToad = {
// //     potions: [
// //         { name: "Speed potion", price: 460 },
// //         { name: "Dragon breath", price: 780 },
// //         { name: "Stone skin", price: 520 },
// //     ],
// //     getPotions() {
// //         return this.potions;
// //     },
// // addPotion(newPotion) {
// //     for (potion of this.potions) {
// //         if (potion.name === newPotion.name) {
// //             return `Error! Potion ${newPotion.name} is already in your inventory!`;
// //         }
// //     }
// //     this.potions.push(newPotion);
// // },
// //     removePotion(potionName) {
// //         for (let potion of this.potions) {

// //             if (potion.name === potionName) {
// //                 const indexPotion = this.potions.indexOf(potion);

// //                 if (indexPotion === -1) {
// //                     return `Potion ${potionName} is not in inventory!`;
// //                 };
// //                 this.potions.splice(indexPotion, 1);
// //             }
// //         }
// //     },
// //     updatePotionName(oldName, newName) {
// //         for (let potion of this.potions) {
// //             if (potion.name === oldName) {
// //                 potion.name = newName;
// //             }
// //         }
// //         // Change code above this line
// //     }
// // }

// // callback - пример 1
// // const fna = function (message, callback) {
// //     console.log(message);
// //     console.log(callback);
// //     callback(100, 888);
// // }

// // const fnb = function (number, total) {
// //     console.log("вызов fnb", number, total);
// // }
// // fna('fuck monkey', fnb);

// // callback - пример 2 + инлайн функция + строчная
// const fnA = function (a, b, callback) {
//   const result = callback(a, b);
//   console.log("result", result);
// };

// const fnB = function (x, y) {
//   return x + y;
// };

// const fnC = function (x, y) {
//   return x - y;
// };

// fnA(2, 3, fnB);

// fnA(10, 8, function (x, y) {
//   return x - y;
// });

// fnA(11, 8, (x, y) => x * y);

// // const navEl = document.querySelector('.list');
// // const navLiEl = navEl.firstElementChild;
// // console.log(navLiEl);
// // const navAllChild = navLiEl.firstElementChild;
// // console.log(navAllChild);
// // navEl.classList.add('fuck');
// // navLiEl.classList.toggle('in-open');

// // navAllChild.textContent = 'Влажный язык'
// // console.log(navAllChild);
// // const imgForEl = document.createElement('img');
// // imgForEl.alt = 'бабочка'
// // navLiEl.appendChild(imgForEl);
// // console.log(navLiEl);

// // const min = 6;
// // const max = 21;
// // let total = 0;

// // for (let i = min; i <= max; i += 1) {

// //     if (i % 2 !== 0) {
// //         continue;
// //     }
// //     total += i;
// // };
// // console.log(total)

// // const string = "javascript";

// // for (const character of string) {
// //     console.log(character);
// // }

// const tratata = [];
// console.log(tratata);

// const fmdlkb = ["a", "b", "c", "d", "e", 2, 7];
// fmdlkb.pop();
// console.log(fmdlkb);
// fmdlkb.shift();
// console.log(fmdlkb);
// fmdlkb.unshift("Z");
// console.log(fmdlkb);
// fmdlkb.splice(2, 2, "Q");
// console.log(fmdlkb);
// //
// // console.log(fmdlkb.join(' '));

// const ewf = fmdlkb.join("");
// console.log(ewf);

// const rrr = [38, 90, 42, 17];
// // Math.min(...rrr);
// console.log(Math.max(...rrr));

// function find_average(array) {
//   let total = 0;
//   if (array.length === 0) {
//     return 0;
//   }

//   for (let arr of array) {
//     total += arr;
//   }
//   return total / array.length;
// }
// // const find_average = (array) => {
// //     return array.length === 0 ? 0 : array.reduce((acc, ind) => acc + ind, 0) / array.length
// // }
// // find_average([1, 2, 3]);

// // function find_average(array) {
// //     if (array.length == 0) return 0
// //     let result = 0;

// //     for (let num of array) {
// //         result += num;
// //     }
// //     return result / array.length;
// // }

// // function find_average(array) {
// //     return (Math.min(...array) + Math.max(...array)) / 2;
// // }

// console.log(find_average([1, 2, 3]));
// console.log(find_average([10, 30, 70]));
// console.log(find_average([]));

// function getGrade(s1, s2, s3) {
//   let total = (s1 + s2 + s3) / 3;
//   if (total <= 100 && total >= 90) {
//     return "A";
//   } else if (total <= 90 && total >= 80) {
//     return "B";
//   } else if (total <= 80 && total >= 70) {
//     return "C";
//   } else if (total <= 70 && total >= 60) {
//     return "D";
//   } else total <= 60 && total >= 0;
//   {
//     return "F";
//   }
// }

// console.log(getGrade(80, 70, 80));

// let fff = [5, 78, 24, 503, 300, 68];

// const newFff = [...fff];
// function compareNumbers(a, b) {
//   return a - b;
// }
// console.log(newFff.join());
// console.log(newFff.sort());
// console.log(newFff.sort(compareNumbers));

// const date = new Date();
// console.log(date.getTime());

// console.log("Date: ", date);

// // Возвращает день месяца от 1 до 31
// console.log("getUTCDate(): ", date.getUTCDate());

// // Возвращает день недели от 0 до 6
// console.log("getUTCDay(): ", date.getUTCDay());

// // Возвращает месяц от 0 до 11
// console.log("getUTCMonth(): ", date.getUTCMonth());

// // Возвращает год из 4 цифр
// console.log("getUTCFullYear(): ", date.getUTCFullYear());

// // Возвращает час
// console.log("getUTCHours(): ", date.getUTCHours());

// // Возвращает минуты
// console.log("getUTCMinutes(): ", date.getUTCMinutes());

// // Возвращает секунды
// console.log("getUTCSeconds(): ", date.getUTCSeconds());

// // Возвращает миллисекунды
// console.log("getUTCMilliseconds(): ", date.getUTCMilliseconds());

// // сеттаймаут тестил
// setTimeout(
//   (x) => {
//     console.log(x);
//     console.log("AAAAAAAAAAAAAA");
//   },
//   4000,
//   "fuck"
// );

// const pot = (x) => {
//   console.log(`now is ... ${x}`);
//   console.log("BUGAGA");
// };
// const timeoutId = setTimeout(pot, 2000, "FUUUUUCK");

// // clearTimeout(timeoutId);

// fetch("https://pokeapi.co/api/v2/pokemon/3")
//   .then((response) => {
//     // console.log(response.json())
//     return response.json();
//   })
//   .then((pokemon) => {
//     console.log(pokemon);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// // // закрепил колбеки (4й модуль)
// // const filterr = function (array, allCallback) {
// //     const AF = []
// //     for (let el of array) {
// //         let ourSettings = allCallback(el)
// //         if (ourSettings) {
// //             AF.push(el)
// //             console.log(el)
// //         }
// //     }

// //     return AF
// // }

// // const callback1 = function (value) {
// //     return value >= 3
// // }
// // const callback2 = function (value) {
// //     return value <= 7
// // }

// // const firstArray = filterr([1, 2, 3, 4, 5], callback1)
// // console.log(firstArray)
// // const secondArray = filterr([2, 4, 5, 6, 7, 9, 10], callback2)
// // console.log(secondArray)

// // повторяю this (5ймодуль)
// // чуток практики по this
// const opo = function () {
//   console.log("fuck this shit", this);
//   console.log("fuck this tag shit", this.tag);
// };

// const pop = {
//   tag: "Jojo",
// };

// pop.show = opo;
// console.log(pop);

// pop.show();

// // практикую прототипное наследование
// const objeD = {
//   D: "z",
// };

// const objeC = Object.create(objeD);

// objeC.C = "y";

// const objeB = Object.create(objeC);

// objeB.B = "x";

// const objeA = Object.create(objeB);

// console.log(objeA);
// console.log(objeB);
// console.log(objeC);
// console.log(objeD);

// // практикую функция конструктор

// const Main = function ({
//   paparoach,
//   threedaysgrace,
//   saintassonia,
//   numbertrack,
// }) {
//   this.paparoach = paparoach;
//   this.threedaysgrace = threedaysgrace;
//   this.saintassonia = saintassonia;
// };

// Main.prototype.method = function () {
//   console.log("FUCK THE SYSTEM");
// };

// Main.prototype.method = function (newsong) {
//   this.paparoach = newsong;
// };

// const lineA = new Main({
//   paparoach: "falling appart",
//   threedaysgrace: "its all over",
//   saintassonia: "the fallen",
// });
// const lineB = new Main({
//   paparoach: "last resort",
//   threedaysgrace: "never to late",
//   saintassonia: "so what",
// });
// const lineC = new Main({
//   paparoach: "help",
//   threedaysgrace: "get out alive",
//   saintassonia: "better late than never",
// });

// console.log(lineA);
// console.log(lineB);
// console.log(lineC);

// lineC.method();

const promise = new Promise((resolve, reject) => {
  const canFulfill = Math.random() > 0.5;

  setTimeout(() => {
    if (canFulfill) {
      resolve("эуспешно все !!!!");
    } else {
      reject("NAHOY )))");
    }
  }, 2000);
  console.log(canFulfill);
});
console.log(promise);

// 1я запись
// promise.then(
//   (result) => console.log(result),
//   (error) => console.log(error)
// );
// 2я запись (тоже самое)
promise.then(yes, no);

function yes(result) {
  console.log(result);
}
function no(error) {
  console.log(error);
}

// !!!!!
const eeee = {};
const wwww = "1,2,3,4";
const qqqqq = [1, 2, 3, 4];
let ssss = "JOHNNY";
eeee[wwww] = ssss;
console.log(eeee);
console.log(eeee[wwww]);
console.log(ssss);

//Задача из кодварс
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

console.dir(_);

// Тренируюсь по cracking.js
// Урок 1-2
// чтобы не мутировать первоначальные данные
// использовать  spread
// const person = (arg) => {
//   const newarg = {...arg}
// };

// или Object.assign;
// const param = { name: "Selena", profession: "slut" };
// const paramsecond = { price: "100$" };
// const paramthird = { price: "200$", age: 19 };
// const newObj = {};
// const newperson = Object.assign(newObj, param, paramsecond, paramthird);
// console.log(newObj);
// console.log(newObj === newperson);

// или lodash (_.clone)
// const obj = [{ a: 1 }, { b: 2 }, { c: 3 }];
// const newobj = _.clone(obj);
// console.log(newobj);
// console.log(newobj === obj);
// console.log(newobj[0] === obj[0]);

// урок 3
// const people = [
//   { name: "Bobby", age: 18, pro: "fharma" },
//   { name: "Max", age: 38, pro: "poker_pro" },
//   { name: "Vova", age: 38, pro: "medical" },
//   { name: "Arnold", age: 20, pro: "kach" },
//   { name: "Lucy", age: 19, pro: "porn_model" },
// ];

// const Bbbb = people.filter((person) => person.age > 35);
// console.log(Bbbb);

// const Cccc = people.map((person) => person.age > 35);
// console.log(Cccc);

// const ddd = people.map((person) => ({ ...person, name: "John" }));
// console.log(ddd);

// const oldest = people.reduce((prev, person) => {
//   // debugger;
//   if (prev < person.age) {
//     return person.age;
//   }
//   return prev;
// }, 17);
// console.log(oldest);

/////////
// const PO = "cat, dog, cow";
// const LO = "cat dog cow";

// const OL = LO.split(" ");
// const OP = PO.split(",");
// const OLL = OL.join(", ");
// const OPP = OP.join(" |");

// console.log(OL);
// console.log(OP);
// console.log(OLL);
// console.log(OPP);

// //изменение свойства одного из ключей
// const newName = people.map((person) =>
//   // debugger;
//   person.name === "Vova" ? (person.name = "Jamal") : person.name
// );
// console.log(newName);

// урок 4

const bob = { name: "Bob", age: 40, prof: "Builder" };
const bill = { name: "Bill", prof: "QA", yearsExp: 2 };
const lucy = { name: "Lucy", prof: "pornstar", startYear: 2000 };

const common = { ...bob, ...bill, hasHouse: true };
// const common = Object.assign(bob, bill, { hasHouse: true });

console.log(common);
console.log(bob.prof, bill.age, bob.hasHouse);
console.log(bob);

// Object.assign мутирует - поэтому в 642 строке hasHose есть - а при спреде - нет
////////////////

const animals = ["cow", "pig", "cat", "dog"];

// const example = animals.push("horse");
console.log(animals.push("horse"));
console.log(animals.pop());
// console.log(example);
console.log(animals);

// урок 4.1 - замыкание (пример Репеты)
const sheff = function (name) {
  const dish = function (dish) {
    console.log(`${name} приготовил ${dish}`);
  };
  return dish;
};

const result = sheff("Alex");

result("Cake");
console.dir(result);

// деструктуризация
const objfordestr = {
  name: "Bryan",
  age: 28,
  position: "teamLead",
};

const { name, age, position } = objfordestr;

console.log(name);
console.log(age);
console.log(position);

let [fistitem, seconditem, ...other] = "fuck this evil world".split(" ");

console.log(fistitem);
console.log(seconditem);
console.log(other);

// урок 4.2
// итератор (асинхронный перебор коллекции)

const array = [1, 2, "Max", 4, 5];
const iterator = array[Symbol.iterator]();
iterator.next();
console.log(iterator.next());
console.log(iterator.next());
//

const max = {
  name: "Max",
  age: "38",
  daughter: "Sofia",
};

const iterator2 = Object.entries(max)[Symbol.iterator]();
console.log(iterator2.next());
console.log(iterator2.next());
console.log(iterator2.next());
console.log(iterator2.next());

//this (по Репете 5.1)
// пример 1
const yourt = {
  name: "ryan",
  age: 28,

  getage() {
    console.log("age ryan", this);
  },
};

yourt.getage();

//пример 2
const testThis2 = function () {
  console.log("testThis2", this);
  console.log("testThis2", this.tag);
  console.log("testThis2", this.bug);
};

const ololo = {
  tag: "fuck",
  bug: "muck",
};

ololo.opa = testThis2;

console.log("ololo", ololo);

ololo.opa();

//
// call и apply (вызывают контекст здесь и сейчас), bind (копия ф-и с привязаным контекстом)---- привязка контекста
const changeColor = function (color) {
  console.log("changeColor ---->", this);
  this.color = color;
};

const hat = {
  color: "black",
};
// changeColor.call(hat, "orange");
// console.log(hat);

const sweater = {
  color: "green",
};

// changeColor.call(sweater, "orange");
// console.log(sweater);

// или bind
const changeHatColor = changeColor.bind(hat);
const changeSweaterColor = changeColor.bind(sweater);
changeSweaterColor();
changeHatColor();
console.log(hat);
console.log(sweater);

const ratata = (pop) => {
  const pop2 = [...pop];
  const pop3 = pop2.reduce((acc, cur) => acc + cur, 0);
  console.log(pop3);
};

ratata([1, 2, 3, 4, 5]);

//craking js 2.3
// const owner = {
//   name: "Freddy",
//   age: 21,
//   home: "Krakow",
// };

// const dog = {
//   name: "Petrovich",
//   age: 2,
//   breed: "French Buldog",
// };

// const map = new Map();

// map.set(owner, dog);
// console.log(owner);
// console.log(dog);
// console.log(map);

// const funrrr = () => {
//   console.log(map);
// };

// const trt = true;
// const map1 = new Map();

// map1.set(funrrr, trt);

// console.log(map1);

const qo = "1";
const qa = +"2" + 1;
console.log(qa);

const qz = 1 + "10";
console.log(qz);

const qs = "10" + 1;
console.log(qs);

const qx = 1 + +"10";
console.log(qx);

const qw = {};
const qe = String(qw);
console.log(qe);

function User(name, age, prof, gender, isAdmin) {
  this.name = name;
  this.age = age;
  this.prof = prof;
  this.gender = gender;
  this.isAdmin = isAdmin;
}
const zzz = new User("Lucy", 23, "slut", "female", false);
console.log(zzz);


// craking js 4.2 (sort, slice, flat)
// let fff = [1, 1000, 5, 78, 24, 503, 300, 68];

// const newFff = [...fff];
// function compareNumbers(a, b) {
//   return a - b;
// }

// function compareNumbersReverse(a, b) {
//   return b - a;
// }
// console.log(newFff.join());
// console.log(newFff.sort());
// console.log(newFff.sort(compareNumbers));
// console.log(newFff.sort(compareNumbersReverse));

let wpeokf = 'this is fucking good '
let hfsb = Array.from(wpeokf)
console.log(hfsb);
console.log(hfsb.slice(0,3));
console.log(hfsb.slice(1,4));
console.log(hfsb.slice(5,10));

let cbh = [1,2,3, [4,5,[6,7,[8,9]]]]
console.log(cbh.flat());
console.log(cbh.flat(2));
console.log(cbh.flat(3));


const animalsAgain = ['cat', 'dog', 'fish', 'bird']
const iteratorAnimals = animalsAgain.entries()
console.log(iteratorAnimals.next());
console.log(iteratorAnimals.next());
console.log(iteratorAnimals.next());
console.log(iteratorAnimals.next());
console.log(iteratorAnimals.next());



// задача для собеседования с сеттаймаутом - что сдесь не так ?
for(var i = 0; i < 10; i++) {
  setTimeout(() => console.log(i), 0)
}
// ответ: сеттайм аут выполняется вконце, когда значение i - уже 10 !!!

// Решение:
// Вариант 1 (заменить var (у которого функциональная область видимости - и он создается вне цикла for) на let (у которого блочная область видимости - и он создается внутри цикла for))
for (let i = 0; i < 10; i+= 1){
  //sync !!!!!
  setTimeout(
    //async !!!!!
    () => {
console.log(i);
  }, 0)
}
// Вариант 2 (таким образом на момент вызова колбека ему передастся актуальное значение i - на момент запуска сеттаймаута. a - это второй и до десятого аргумент)
// for(var i = 0; i < 10; i++) {
//   setTimeout((a) => console.log(a), 0, i)
// }

// Вариант 3
// for(var i = 0; i < 10; i++) {
//   const func = () => {
//     var value = i
//   setTimeout(() => console.log(value), 0)
// }
// func()
// }