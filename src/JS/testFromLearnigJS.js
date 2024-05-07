// #1 alert, promt, confirm

alert( 'Ты' )
alert( 'Заебал' )

// let age = prompt('Сколько тебе лет?', 10);
// alert(`Тебе ${age} лет!`); 

// let isBoss = confirm("Ты здесь главный?");
// alert( isBoss ); // true, если нажата OK


//#2 коментарии
// ага

/* многострочный
 коментарий*/


// №3 Bigint
 const bigint = 1234567890123456789012345678901234567890n;
 const bigint2 = 1234567890123456789012345678901234567890;

 const sameBigint = BigInt("1234567890123456789012345678901234567890");
 
 const bigintFromNumber = BigInt(10); // то же самое, что и 10n

 console.log(bigint);
 console.log(bigint2);
 console.log(sameBigint);
 console.log(bigintFromNumber);


 //#4 typeof
 console.log(typeof 10n);
 console.log(typeof true);


/* В консоле будет - Object --- Это официально признанная ошибка в typeof, ведущая начало с времён создания JavaScript и сохранённая для совместимости. 
Конечно, null не является объектом. Это специальное значение с отдельным типом. */
console.log(typeof null);


//#5 преобразование типов
let nmnm = '35'
let klkl = 80
console.log(Number(nmnm));
console.log(Number(nmnm).toString());
console.log(String(klkl));
console.log(Number(true));
console.log(Number(false));
console.log(Boolean(1));
console.log(Boolean(0));
console.log(Boolean(2));
console.log(+'35'); // === +nmnm

//#6 остаток от деления и позведение в степень
const ostatok = 8 % 3
const stepen = 3 ** 3
console.log(ostatok);
console.log(stepen);


//#7 инкремент ++, декримент -- 
let counter = 0;
console.log(counter++);

let counter1 = 0;
console.log(++counter1);

counter = 1
console.log(2 * counter++); 
counter1 = 1
console.log(2 * ++counter1); // приоритет "префиксной формы" декремента выше чем у большинства арифметических операций


// #8
// Оператор логического присваивания ИЛИ ||= – это «синтаксический сахар», добавленный в язык в качестве более короткого варианта записи if-выражений с присваиванием.







// #90
// новый метод "перевертыш" - toReversed()

const hyh = [1,3,4,6,7]
const jik = ['Max','Pola', 'Lucy', 'Francess', 'Lu']

// новый метод создает новый массив не изменяя старый.
console.log(hyh.toReversed()); 
console.log(jik.toReversed());

// старый метод меняет оригинальный массив
console.log(hyh.reverse());
console.log(jik.reverse());


// #91
// новый метод  - toSpliced()

const months = ["Jan", "Feb", "Mar", "Apr"];
const spliced = months.toSpliced(0, 1);

// новый метод создает новый массив не изменяя старый.
console.log(spliced);
console.log(months);

// старый метод меняет оригинальный массив
console.log(months.splice(0, 1));
console.log(months);