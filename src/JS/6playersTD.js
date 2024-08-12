import Notiflix from "notiflix";
console.log(Notiflix);

const refs = {
  changeAction1: document.querySelector('button[data-action = "choose1"]'),
  //   valueNum: document.querySelector("#valueNumber"),
  //   valueName: document.querySelector("#valueName1"),

  //   changeAction2: document.querySelector('button[data-action = "choose2"]'),
  //   valueSecondName: document.querySelector("#valueName2"),

  //   changeAction3: document.querySelector('button[data-action = "choose3"]'),
  //   valueThirdName: document.querySelector("#valueName3"),

  changeAction4: document.querySelector('button[data-action = "choose4"]'),
  // valueFourthName: document.querySelector('#valueName4'),
  //   spanFourthName: document.querySelector("#valueName41"),
  //   spanSecFourthName: document.querySelector("#valueName42"),

  //   changeAction5: document.querySelector('button[data-action = "choose5"]'),
  // valueFifthName: document.querySelector('#valueName5'),
  //   spanFifthName: document.querySelector("#valueName51"),
  //   spanSecFifthName: document.querySelector("#valueName52"),
  // valueSixthName: document.querySelector('#valueName6'),
  //   spanSixthName: document.querySelector("#valueName61"),
  //   spanSecSixththName: document.querySelector("#valueName62"),

  //   changeAction7: document.querySelector('button[data-action = "choose7"]'),
  // valueSeventhName: document.querySelector('#valueName7'),
  //   spanSevenththName: document.querySelector("#valueName71"),
  //   spanSecSevensthName: document.querySelector("#valueName72"),
  //   spanEighthName: document.querySelector("#valueName81"),
  //   spanSecEighththName: document.querySelector("#valueName82"),

  firstTitleChoose: document.querySelector(
    '[data-active-color = "define-first-player"]'
  ),
  //   secondTitleChoose: document.querySelector(
  //     '[data-active-color = "define-second-player"]'
  //   ),
  //   thirdTitleChoose: document.querySelector(
  //     '[data-active-color = "define-third-player"]'
  //   ),
  firstTitlePS: document.querySelector(
    '[data-active-color = "define-first-PS"]'
  ),
  //   secondTitlePS: document.querySelector(
  //     '[data-active-color = "define-second-PS"]'
  //   ),
  //   fifthTitlePS: document.querySelector(
  //     '[data-active-color = "define-fifth-PS"]'
  //   ),
  schreludeList: document.querySelector(".schreludeList"),
  uniqueNumberList: document.querySelector(".uniqueNumberList"),
};

refs.changeAction1.addEventListener("click", chooseName, { once: true }); //третий параметр - снятие слушателя(очищение памяти)
// refs.changeAction2.addEventListener("click", chooseSecondName, { once: true });
// refs.changeAction3.addEventListener("click", chooseThirdName, { once: true });

refs.changeAction4.addEventListener("click", randomSchreludes, { once: true });
// refs.changeAction5.addEventListener("click", choosePSForSecAndThirdPlayers, {
//   once: true,
// });
// refs.changeAction7.addEventListener("click", chosePSForFouAndFifPlayers, {
//   once: true,
// });

//Future names of chosen players

// let firstRoundName = "";
// let secondRoundName = "";
// let thirdRoundName = "";

//Arrays with names of players
const names = ["Макс", "Вован", "Игорь", "Лёша", "Саня", "Роман"];
const newNames = [...names];
console.log(newNames);

// const chosenNames = [];

//Array of scheludes
const uniqueCompositions = [
  "1, 2, 3  и  4, 5, 6",
  "1, 2, 5  и  3, 4, 6",
  "1, 3, 4  и  2, 5, 6",
  "1, 5, 6  и  2, 3, 4",
  "1, 4, 6  и  2, 3, 5",
  "1, 2, 4  и  3, 5, 6",
  "1, 3, 5  и  2, 4, 6",
  "1, 3, 6  и  2, 4, 5",
  "1, 2, 6  и  3, 4, 5",
  "1, 4, 5  и  2, 3, 6",
];

const newUniqueCompositions = [...uniqueCompositions];

// названия для Алертов и Нотифлекса
let whoFirstPlayer = "Кто же и какой игровой номер получит?";

//ОСНОВЫНЕ ФУНКЦИИ
// 1- Жеребъевка игровых номеров

function chooseName() {
  console.log(newNames);
  alert(`${whoFirstPlayer}`);
  newNames.sort(makeRandomArr);
  console.log(newNames);

  refs.uniqueNumberList.insertAdjacentHTML(
    "beforeend",
    renderSchreludeOrNamesList(newNames)
  );

  console.log(this); // контекст в момент вызова
  console.log(refs.changeAction1);

  disabledButton(this);
  enableBtn(refs.changeAction4);

  inactiveTitleColor(refs.firstTitleChoose);
  activeTitleColor(refs.firstTitlePS);
}

//1.2 - второй участник
// function chooseSecondName() {
//   findAndDeleteNecessaryPlayer(newNames, firstRoundName);

//   chosenNames.push(firstRoundName);
//   console.log(chosenNames);

//   alert(`${firstRoundName}, кто же будет вашим первым соперником?`);
//   secondRoundName = randomNames(newNames);
//   console.log(secondRoundName);
//   refs.valueSecondName.textContent = secondRoundName;

//   addOtherClassForPlayerName(refs.valueSecondName);

//   disabledButton(this);
//   enableBtn(refs.changeAction3);

//   inactiveTitleColor(refs.secondTitleChoose);
//   activeTitleColor(refs.thirdTitleChoose);
// }

// //1.3 - третий участник
// function chooseThirdName() {
//   findAndDeleteNecessaryPlayer(newNames, secondRoundName);

//   chosenNames.push(secondRoundName);
//   console.log(chosenNames);

//   alert(
//     `${firstRoundName} и ${secondRoundName}, кто же составит вам компанию?`
//   );

//   thirdRoundName = randomNames(newNames);
//   console.log(thirdRoundName);
//   refs.valueThirdName.textContent = thirdRoundName;

//   addOtherClassForPlayerName(refs.valueThirdName);
//   disabledButton(this);
//   enableBtn(refs.changeAction4);

//   inactiveTitleColor(refs.thirdTitleChoose);
//   activeTitleColor(refs.firstTitlePS);

//   changeArrayNameBeforeNextStep();
// }

//2 - жеребъевка индивидуальных игр

function randomSchreludes() {
  console.log(newUniqueCompositions);
  alert("Готовы?");

  newUniqueCompositions.sort(makeRandomArr);
  console.log(newUniqueCompositions);

  refs.schreludeList.insertAdjacentHTML(
    "beforeend",
    renderSchreludeOrNamesList(newUniqueCompositions)
  );

  disabledButton(this);
  inactiveTitleColor(refs.firstTitlePS);
}

// ВСПОМОГАТЕЛЬНЫЕ ФУНКЦИИ
//#3 Генерация случайных чисел - ПО ФАКТУ НУЖНА ТОЛЬКО --- 3.4 !!!!!

// 3.3 - генерация случайных имен
// function randomNames(names) {
//   let random = Math.floor(Math.random() * (names.length - 1 + 1));
//   console.log(random);
//   const res = names.find((el, ind) => ind === random);
//   console.log(res);
//   return res;
// }

//3.4 - перемешиваю массив уникальных игр и\или участников
function makeRandomArr(a, b) {
  return Math.random() - 0.5;
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
// function addOtherClassForPlayerName(valueName) {
//   valueName.classList.add("js-actions");
// }
//4.4 убираем 3е имя из массива и добавляем его в другой для следующего шага - жеребъевки индивидуальных игр
// function changeArrayNameBeforeNextStep() {
//   findAndDeleteNecessaryPlayer(newNames, thirdRoundName);

//   chosenNames.push(thirdRoundName);
//   console.log(chosenNames);
// }
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
// function addAnotherClassForPlayerName(valueName) {
//   valueName.classList.add("js-actions2");
// }

//6 дополнительно к 1 и 2
//6.1 удаляем случайно выбранного игрока из нужного нам массива (для следующего рандомного выбора из оставшихся)
// function findAndDeleteNecessaryPlayer(necessaryArrayOfPlayers, playerName) {
//   const cutChosen = necessaryArrayOfPlayers.find((el) => el === playerName);
//   console.log(cutChosen);
//   const olala = necessaryArrayOfPlayers.findIndex((el) => el === playerName);
//   console.log(olala);
//   necessaryArrayOfPlayers.splice(olala, 1);
//   console.log(necessaryArrayOfPlayers);
// }

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

//8 - рендер масива уникальных игр и\или участников
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
