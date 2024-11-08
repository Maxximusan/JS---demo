import Notiflix from "notiflix";
console.log(Notiflix);

const refs = {
  changeAction1: document.querySelector('button[data-action = "choose1"]'),
  valueNum: document.querySelector("#valueNumber"),
  valueName: document.querySelector("#valueName1"),

  changeAction2: document.querySelector('button[data-action = "choose2"]'),
  valueSecondName: document.querySelector("#valueName2"),

  changeAction3: document.querySelector('button[data-action = "choose3"]'),
  valueThirdName: document.querySelector("#valueName3"),

  changeAction4: document.querySelector('button[data-action = "choose4"]'),
  // valueFourthName: document.querySelector('#valueName4'),
  spanFourthName: document.querySelector("#valueName41"),
  spanSecFourthName: document.querySelector("#valueName42"),

  changeAction5: document.querySelector('button[data-action = "choose5"]'),
  // valueFifthName: document.querySelector('#valueName5'),
  spanFifthName: document.querySelector("#valueName51"),
  spanSecFifthName: document.querySelector("#valueName52"),
  // valueSixthName: document.querySelector('#valueName6'),
  spanSixthName: document.querySelector("#valueName61"),
  spanSecSixththName: document.querySelector("#valueName62"),

  changeAction7: document.querySelector('button[data-action = "choose7"]'),
  // valueSeventhName: document.querySelector('#valueName7'),
  spanSevenththName: document.querySelector("#valueName71"),
  spanSecSevensthName: document.querySelector("#valueName72"),
  spanEighthName: document.querySelector("#valueName81"),
  spanSecEighththName: document.querySelector("#valueName82"),

  firstTitleChoose: document.querySelector(
    '[data-active-color = "define-first-player"]'
  ),
  secondTitleChoose: document.querySelector(
    '[data-active-color = "define-second-player"]'
  ),
  thirdTitleChoose: document.querySelector(
    '[data-active-color = "define-third-player"]'
  ),
  firstTitlePS: document.querySelector(
    '[data-active-color = "define-first-PS"]'
  ),
  secondTitlePS: document.querySelector(
    '[data-active-color = "define-second-PS"]'
  ),
  fifthTitlePS: document.querySelector(
    '[data-active-color = "define-fifth-PS"]'
  ),

  changeAction9: document.querySelector('button[data-action = "choose9"]'),
  schreludeList: document.querySelector(".schreludeList"),
  
  optionalDraw: document.querySelector('button[data-action = "show"]'),
  mainDraw: document.querySelector("#mainDraw"),
  showOptionalDraw: document.querySelector("#optionalDraw"),
};

refs.changeAction1.addEventListener("click", chooseName, { once: true }); //третий параметр - снятие слушателя(очищение памяти)
refs.changeAction2.addEventListener("click", chooseSecondName, { once: true });
refs.changeAction3.addEventListener("click", chooseThirdName, { once: true });

refs.changeAction4.addEventListener(
  "click",
  choosePersonalScheludeForFistPlayer,
  { once: true }
);
refs.changeAction5.addEventListener("click", choosePSForSecAndThirdPlayers, {
  once: true,
});
refs.changeAction7.addEventListener("click", chosePSForFouAndFifPlayers, {
  once: true,
});

refs.changeAction9.addEventListener("click", chooseGamesRandom, { once: true });
refs.optionalDraw.addEventListener("click", optionalDraw, {
  once: true,
});

//Future names of chosen players
let firstRoundNumber = 0;

let firstRoundName = "";
let secondRoundName = "";
let thirdRoundName = "";

//Arrays with names of players
const names = ["Макс", "Вован", "Игорь", "Лёша", "Саня"];
const newNames = [...names];
console.log(newNames);

const chosenNames = [];

//Main personal scheludes
const firstMPS = "1, 2, 4";
const secondMPS = "1, 3, 4";
const thirdMPS = "1, 3, 5";
const fourthMPS = "2, 3, 5";
const fifthMPS = "2, 4, 5";

//Alternative personal scheludes
const altFirstMPS = "1, 2, 3";
const altSecondMPS = "1, 2, 5";
const altThirdndMPS = "1, 4, 5";
const altFourthMPS = "2, 3, 4";
const altFifthMPS = "3, 4, 5";

//players for personal schelude
let firstNameForPS;
let secondNameForPS;
let thirdNameForPS;
let fourthNameForPS;
let fifthNameForPS;

// названия для Алертов и Нотифлекса
let whoFirstPlayer = "Кто же будет первым участником в первой игре турнира?";

// Массив всех игр - для выборки в randomArrayOfGames
const allVariantsForRandomArrayOfGames = [
  "Макс, Саня, Лёша",
  "Макс, Роман, Саня",
  "Макс, Лёша, Роман",
  "Макс, Вован, Лёша",
  "Макс, Вован, Саня",
  "Макс, Вован, Роман",
  "Саня, Вован, Лёша",
  "Роман, Саня, Вован",
  "Вован, Роман, Лёша",
  "Саня, Роман, Лёша",
];
const randomArrayOfGames = [
  
];

//ОСНОВЫНЕ ФУНКЦИИ
// 1- Жеребъевка участников первой игры
//1.1 - первый участник
function chooseName() {
  //  const op = getRandomNumber(quantityPlayers)

  firstRoundNumber = getRandomArbitrary(1, 6);
  console.log(firstRoundNumber);

  refs.valueNum.textContent = firstRoundNumber;

  alert(`${whoFirstPlayer}`);

  firstRoundName = randomNames(names);
  console.log(firstRoundName);

  //это фннкция для использовани Notiflix
  //  tryNotiflixStopScript(whoFirstPlayer, firstRoundName, this)

  refs.valueName.textContent = firstRoundName;
  addOtherClassForPlayerName(refs.valueName);

  console.log(this); // контекст в момент вызова
  console.log(refs.changeAction1);

  disabledButton(this);
  enableBtn(refs.changeAction2);

  inactiveTitleColor(refs.firstTitleChoose);
  activeTitleColor(refs.secondTitleChoose);
}

//1.2 - второй участник
function chooseSecondName() {
  findAndDeleteNecessaryPlayer(newNames, firstRoundName);

  chosenNames.push(firstRoundName);
  console.log(chosenNames);

  alert(`${firstRoundName}, кто же будет вашим первым соперником?`);
  secondRoundName = randomNames(newNames);
  console.log(secondRoundName);
  refs.valueSecondName.textContent = secondRoundName;

  addOtherClassForPlayerName(refs.valueSecondName);

  disabledButton(this);
  enableBtn(refs.changeAction3);

  inactiveTitleColor(refs.secondTitleChoose);
  activeTitleColor(refs.thirdTitleChoose);
}

//1.3 - третий участник
function chooseThirdName() {
  findAndDeleteNecessaryPlayer(newNames, secondRoundName);

  chosenNames.push(secondRoundName);
  console.log(chosenNames);

  alert(
    `${firstRoundName} и ${secondRoundName}, кто же составит вам компанию?`
  );

  thirdRoundName = randomNames(newNames);
  console.log(thirdRoundName);
  refs.valueThirdName.textContent = thirdRoundName;

  addOtherClassForPlayerName(refs.valueThirdName);
  disabledButton(this);
  enableBtn(refs.changeAction4);

  inactiveTitleColor(refs.thirdTitleChoose);
  activeTitleColor(refs.firstTitlePS);

  changeArrayNameBeforeNextStep();
}

//2 - жеребъевка индивидуальных игр
//2.1 - рандомно для одного из участников первой игры
function choosePersonalScheludeForFistPlayer() {
  alert("Готовы?");
  firstNameForPS = randomNames(chosenNames);
  refs.spanFourthName.textContent = `${firstNameForPS}`;

  //основное индивидуальное рассписание
  // refs.spanSecFourthName.textContent = `${firstMPS}`

  //альтернативное индивидуальное рассписание
  refs.spanSecFourthName.textContent = `${altFirstMPS}`;

  findAndDeleteNecessaryPlayer(chosenNames, firstNameForPS);

  addAnotherClassForPlayerName(refs.spanFourthName);
  addAnotherClassForPlayerName(refs.spanSecFourthName);

  disabledButton(this);
  enableBtn(refs.changeAction5);

  inactiveTitleColor(refs.firstTitlePS);
  activeTitleColor(refs.secondTitlePS);
}
//2.2 - рандомно для второго и третего  участников первой игры
function choosePSForSecAndThirdPlayers() {
  alert("Иииии )))");
  secondNameForPS = randomNames(chosenNames);
  refs.spanFifthName.textContent = `${secondNameForPS}`;

  //основное индивидуальное рассписание
  // refs.spanSecFifthName.textContent = `${secondMPS}`

  //альтернативное индивидуальное рассписание
  refs.spanSecFifthName.textContent = `${altSecondMPS}`;

  findAndDeleteNecessaryPlayer(chosenNames, secondNameForPS);

  addAnotherClassForPlayerName(refs.spanFifthName);
  addAnotherClassForPlayerName(refs.spanSecFifthName);

  console.log(thirdNameForPS);

  thirdNameForPS = randomNames(chosenNames);
  console.log(thirdNameForPS);

  refs.spanSixthName.textContent = `${thirdNameForPS}`;

  //основное индивидуальное рассписание
  // spanSecSixththName.textContent = `${thirdMPS}`

  //альтернативное индивидуальное рассписание
  refs.spanSecSixththName.textContent = `${altThirdndMPS}`;

  addAnotherClassForPlayerName(refs.spanSixthName);
  addAnotherClassForPlayerName(refs.spanSecSixththName);

  disabledButton(this);
  enableBtn(refs.changeAction7);

  inactiveTitleColor(refs.secondTitlePS);
  activeTitleColor(refs.fifthTitlePS);
}
//2.3 - рандомно для 4го и 5го участников турнира
function chosePSForFouAndFifPlayers() {
  alert("Иииии )))");
  fourthNameForPS = randomNames(newNames);
  refs.spanSevenththName.textContent = `${fourthNameForPS}`;

  //основное индивидуальное рассписание
  // refs.spanSecSevensthName.textContent = `${fourthMPS}`

  //альтернативное индивидуальное рассписание
  refs.spanSecSevensthName.textContent = `${altFourthMPS}`;

  findAndDeleteNecessaryPlayer(newNames, fourthNameForPS);

  addAnotherClassForPlayerName(refs.spanSevenththName);
  addAnotherClassForPlayerName(refs.spanSecSevensthName);

  console.log(fourthNameForPS);

  fifthNameForPS = randomNames(newNames);
  console.log(fifthNameForPS);

  refs.spanEighthName.textContent = `${fifthNameForPS}`;

  //основное индивидуальное рассписание
  // refs.spanSecEighththName.textContent = `${fifthMPS}`

  //альтернативное индивидуальное рассписание
  refs.spanSecEighththName.textContent = `${altFifthMPS}`;

  addAnotherClassForPlayerName(refs.spanEighthName);
  addAnotherClassForPlayerName(refs.spanSecEighththName);

  disabledButton(this);

  inactiveTitleColor(refs.fifthTitlePS);
}

//2.4 Опциональный вариант для договорной жеребъевки игр выборочно !!!!
function chooseGamesRandom() {
  shuffleArray(randomArrayOfGames);
  disabledButton(refs.changeAction9)
  refs.schreludeList.insertAdjacentHTML(
    "beforeend",
    renderSchreludeOrNamesList(randomArrayOfGames)
  );
}

//2.5 Показываем опциональную жеребъевку (пункт 2.4) и прячем основную жеребъевку всё до пункта 2.4
function optionalDraw() {
  showOptionalDraw(refs.showOptionalDraw)
  hideMainDraw(refs.mainDraw);
}

// ВСПОМОГАТЕЛЬНЫЕ ФУНКЦИИ
//#3 Генерация случайных чисел - ПО ФАКТУ НУЖНА ТОЛЬКО --- 3.3 !!!!!

//3.1
// let quantityPlayers = 5

//   Тут с нулём
// function getRandomNumber (value){
//     console.log(value);
// const result = Math.floor(Math.random() * value)
// console.log(result);
// return result
// }

//3.2 от (включительно) и до (НЕ включительно)
function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

// 3.3 - генерация случайных имен
function randomNames(names) {
  let random = Math.floor(Math.random() * (names.length - 1 + 1));
  console.log(random);
  const res = names.find((el, ind) => ind === random);
  console.log(res);
  return res;
}

// 3.5 - более качественная функция случайной сортировки чем 3.4 (использую ее в альтернативном варианте с Нотифликс)
function shuffleArray(array) {
  let currentIndex = array.length;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {
    // Pick a remaining element...
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
}

// 4 Дополнительно к пункту 1

// 4.1 Дисаблим кнопку
function disabledButton(uniqueThisBtn) {
  uniqueThisBtn.disabled = true;
}

//4.2 Открываем кнопку
function enableBtn(uniqueBtn) {
  uniqueBtn.disabled = false;
}

//4.3 Добавляем доп класс на имя игрока
function addOtherClassForPlayerName(valueName) {
  valueName.classList.add("js-actions");
}
//4.4 убираем 3е имя из массива и добавляем его в другой для следующего шага - жеребъевки индивидуальных игр
function changeArrayNameBeforeNextStep() {
  findAndDeleteNecessaryPlayer(newNames, thirdRoundName);

  chosenNames.push(thirdRoundName);
  console.log(chosenNames);
}
//4.5 активный цвет
function activeTitleColor(valueTitle) {
  valueTitle.classList.add("js-actions3");
}
//4.6 неактивный цвет
function inactiveTitleColor(valueTitle) {
  valueTitle.classList.add("js-actions4");
}

///////////////////////////////////////////

//5 Дополгительно к пункту 2
//5.1 Доп класс
function addAnotherClassForPlayerName(valueName) {
  valueName.classList.add("js-actions2");
}

//5.2 (дополнительно к 2.5) Класс Хидден
function hideMainDraw(valueName) {
  valueName.classList.add('hidden')
}

//5.3 -\\- удаляем класс хидден
function showOptionalDraw(valueName) {
  valueName.classList.remove('hidden')
}

//6 дополнительно к 1 и 2
//6.1 удаляем случайно выбранного игрока из нужного нам массива (для следующего рандомного выбора из оставшихся)
function findAndDeleteNecessaryPlayer(necessaryArrayOfPlayers, playerName) {
  const cutChosen = necessaryArrayOfPlayers.find((el) => el === playerName);
  console.log(cutChosen);
  const olala = necessaryArrayOfPlayers.findIndex((el) => el === playerName);
  console.log(olala);
  necessaryArrayOfPlayers.splice(olala, 1);
  console.log(necessaryArrayOfPlayers);
}

// //7 пробую нотифлекс вместо алертов (сделал только для этапа 1.1 - далее по этим примерам + ф-я 6.1)

//  function tryNotiflixStopScript (value, name, thisFromChooseName){
//     Notiflix.Report.warning(
//         'ИТАК',
//         `${value}`,
//          'Смотрим', () => {
//             nextStep(name, thisFromChooseName)
//          }
//         );

// }
// // 7.1
// function nextStep (name, thisFromChooseName) {
//     refs.valueName.textContent = name
//     addOtherClassForPlayerName(refs.valueName)

//    console.log(thisFromChooseName);

//    disabledButton(thisFromChooseName)
//    enableBtn(refs.changeAction2)

//    inactiveTitleColor(refs.firstTitleChoose)
//    activeTitleColor(refs.secondTitleChoose)
// }

/* Жеребьевка с 6го раунда ??????????????????
нужно написать ф-ю в которую параметрами передастся результат другой ??? 
где уже определены сыграные уникальные игры , соответственно выборка из оставшихся .
1. определяем случайно первого участника
2. определяем 2го участника случайно
2.1 если с ним уже 2жды встречался - 3й участник автоматически ясен! (нужна ли мне вообще тогда такая ф-я ?????)
или
2.2 если с ним пересекался 1 раз - тогда выборка 3го участника случайным образом из 2х варимантов*/

//8 - рендер разметки масива уникальных игр и\или участников
function renderSchreludeOrNamesList(necessaryArray) {
  return necessaryArray
    .map((item) => {
      console.log(item);
      return ` 
        <li class="schreludeItem"> <p class="itemColor">${item} </p></li>
        `;
    })
    .join("");
}
