import Notiflix from "notiflix";
console.log(Notiflix);

const refs = {
  changeAction1: document.querySelector('button[data-action = "choose1"]'),
  changeAction4: document.querySelector('button[data-action = "choose4"]'),
  firstTitleChoose: document.querySelector(
    '[data-active-color = "define-first-player"]'
  ),

  firstTitlePS: document.querySelector(
    '[data-active-color = "define-first-PS"]'
  ),

  schreludeList: document.querySelector(".schreludeList"),
  uniqueNumberList: document.querySelector(".uniqueNumberList"),
};

refs.changeAction1.addEventListener("click", chooseName, { once: true }); //третий параметр - снятие слушателя(очищение памяти)
refs.changeAction4.addEventListener("click", randomSchreludes, { once: true });

//Arrays with names of players
const names = ["Макс", "Вован", "Игорь", "Лёша", "Саня", "Роман"];
const newNames = [...names];
console.log(newNames);

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
let whatIsSchrelude = "Давайте же посмотрим на расписание игр!";
let noParameters = null;
//ОСНОВЫНЕ ФУНКЦИИ
// 1- Жеребъевка игровых номеров

// function chooseName() {
//   console.log(newNames);
//   alert(`${whoFirstPlayer}`);
//   newNames.sort(makeRandomArr);
//   console.log(newNames);

//   refs.uniqueNumberList.insertAdjacentHTML(
//     "beforeend",
//     renderSchreludeOrNamesList(newNames)
//   );

//   console.log(this); // контекст в момент вызова
//   console.log(refs.changeAction1);

//   disabledButton(this);
//   enableBtn(refs.changeAction4);

//   inactiveTitleColor(refs.firstTitleChoose);
//   activeTitleColor(refs.firstTitlePS);
// }

// 1.1 Alternative version with Notiflix without alert
function chooseName() {
  console.log(newNames);
  tryNotiflixStopScript(
    whoFirstPlayer,
    newNames,
    refs.uniqueNumberList,
    this,
    refs.changeAction4,
    refs.firstTitleChoose,
    refs.firstTitlePS
  );
}

//2 - жеребъевка индивидуальных игр
// function randomSchreludes() {
//   console.log(newUniqueCompositions);
//   alert("Готовы?");

//   newUniqueCompositions.sort(makeRandomArr);
//   console.log(newUniqueCompositions);

//   refs.schreludeList.insertAdjacentHTML(
//     "beforeend",
//     renderSchreludeOrNamesList(newUniqueCompositions)
//   );

//   disabledButton(this);
//   inactiveTitleColor(refs.firstTitlePS);
// }

// 2.1 Альтернативная версия с Нотифликс и без флерта
function randomSchreludes() {
  console.log(newUniqueCompositions);
  tryNotiflixStopScript(
    whatIsSchrelude,
    newUniqueCompositions,
    refs.schreludeList,
    this,
    noParameters,
    refs.firstTitlePS,
    noParameters
  );
}

// ВСПОМОГАТЕЛЬНЫЕ ФУНКЦИИ
//#3 Генерация случайных чисел - ПО ФАКТУ НУЖНА ТОЛЬКО --- 3.4 !!!!!

//3.4 - перемешиваю массив уникальных игр и\или участников (не является лучшим решением)
// function makeRandomArr(a, b) {
//   return Math.random() - 0.5;
// }

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
  //этот иф нужен для альтернативного варианта с Нотифлексом!
  if (uniqueBtn === null) {
    return;
  }
  uniqueBtn.disabled = false;
}

//4.5 активный цвет
function activeTitleColor(valueTitle) {
  //этот иф нужен для альтернативного варианта с Нотифлексом!
  if (valueTitle === null) {
    return;
  }
  valueTitle.classList.add("js-actions3");
}
//4.6 неактивный цвет
function inactiveTitleColor(valueTitle) {
  valueTitle.classList.add("js-actions4");
}

// //7 пробую нотифлекс вместо алертов

function tryNotiflixStopScript(
  value,
  necessaryArray,
  necessaryList,
  neccessaryThis,
  neccesaryChangeACtion,
  prevTitleColor,
  nextTitleCollor
) {
  Notiflix.Report.warning("ИТАК", `${value}`, "Смотрим", () => {
    nextStep(
      necessaryArray,
      necessaryList,
      neccessaryThis,
      neccesaryChangeACtion,
      prevTitleColor,
      nextTitleCollor
    );
  });
}
// 7.1 дополнительная функция внутри нотифликс для имитации остановки кскрипта как у Алерта!
function nextStep(
  necessaryArray,
  necessaryList,
  neccessaryThis,
  neccesaryChangeACtion,
  prevTitleColor,
  nextTitleCollor
) {
  shuffleArray(necessaryArray);
  console.log(necessaryArray);

  necessaryList.insertAdjacentHTML(
    "beforeend",
    renderSchreludeOrNamesList(necessaryArray)
  );

  disabledButton(neccessaryThis);
  enableBtn(neccesaryChangeACtion);

  inactiveTitleColor(prevTitleColor);
  activeTitleColor(nextTitleCollor);
}

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
