
import Notiflix from 'notiflix';
console.log(Notiflix);


const refs = {
    changeAction1: document.querySelector('button[data-action = "choose1"]'),
    valueNum: document.querySelector('#valueNumber'),
    valueName: document.querySelector('#valueName1'),
    
    changeAction2: document.querySelector('button[data-action = "choose2"]'),
    valueSecondName: document.querySelector('#valueName2'),
    
    changeAction3: document.querySelector('button[data-action = "choose3"]'),
    valueThirdName: document.querySelector('#valueName3'),
    
    changeAction4: document.querySelector('button[data-action = "choose4"]'),
    // valueFourthName: document.querySelector('#valueName4'),
    spanFourthName: document.querySelector('#valueName41'),
    spanSecFourthName: document.querySelector('#valueName42'),
    
    changeAction5: document.querySelector('button[data-action = "choose5"]'),
    // valueFifthName: document.querySelector('#valueName5'),
    spanFifthName: document.querySelector('#valueName51'),
    spanSecFifthName: document.querySelector('#valueName52'),
    // valueSixthName: document.querySelector('#valueName6'),
    spanSixthName: document.querySelector('#valueName61'),
    spanSecSixththName: document.querySelector('#valueName62'),
    
    changeAction7: document.querySelector('button[data-action = "choose7"]'),
    // valueSeventhName: document.querySelector('#valueName7'),
    spanSevenththName: document.querySelector('#valueName71'),
    spanSecSevensthName: document.querySelector('#valueName72'),
    spanEighthName: document.querySelector('#valueName81'),
    spanSecEighththName: document.querySelector('#valueName82'),

    firstTitleChoose: document.querySelector('[data-active-color = "define-first-player"]'),
    secondTitleChoose: document.querySelector('[data-active-color = "define-second-player"]'),
    thirdTitleChoose: document.querySelector('[data-active-color = "define-third-player"]'),
    firstTitlePS: document.querySelector('[data-active-color = "define-first-PS"]'),
    secondTitlePS: document.querySelector('[data-active-color = "define-second-PS"]'),
    fifthTitlePS: document.querySelector('[data-active-color = "define-fifth-PS"]'),
}

refs.changeAction1.addEventListener('click', chooseName)
refs.changeAction2.addEventListener('click', chooseSecondName)
refs.changeAction3.addEventListener('click', chooseThirdName)

refs.changeAction4.addEventListener('click', choosePersonalScheludeForFistPlayer)
refs.changeAction5.addEventListener('click', choosePSForSecAndThirdPlayers)
refs.changeAction7.addEventListener('click', chosePSForFouAndFifPlayers)

//Future names of chosen players
let firstRoundNumber = 0;

let firstRoundName = '';
let secondRoundName = '';
let thirdRoundName = '';

//Arrays with names of players
const names = ['Макс', 'Вован', 'Игорь', 'Лёша', 'Саня']
const newNames = [...names]
  console.log(newNames);

const chosenNames = []

//Main personal scheludes
const firstMPS = '1, 2, 4'
const secondMPS = '1, 3, 4'
const thirdMPS = '1, 3, 5'
const fourthMPS = '2, 3, 5'
const fifthMPS = '2, 4, 5'

//Alternative personal scheludes
const altFirstMPS = '1, 2, 3'
const altSecondMPS = '1, 2, 5'
const altThirdndMPS = '1, 4, 5'
const altFourthMPS = '2, 3, 4'
const altFifthMPS = '3, 4, 5'

//players for personal schelude
let firstNameForPS
let secondNameForPS
let thirdNameForPS
let fourthNameForPS
let fifthNameForPS


// названия для Алертов и Нотифлекса
let whoFirstPlayer = 'Кто же будет первым участником в первой игре турнира?'


//2.1
 function chooseName() {
    
//  const op = getRandomNumber(quantityPlayers)

firstRoundNumber = getRandomArbitrary(1,6)
 console.log(firstRoundNumber);
 
 refs.valueNum.textContent = firstRoundNumber

   
  
alert(`${whoFirstPlayer}`)





  firstRoundName = randomNames(names)
 console.log(firstRoundName);

 //это фннкция для использовани Notiflix
//  tryNotiflixStopScript(whoFirstPlayer, firstRoundName, this)

refs.valueName.textContent = firstRoundName
 addOtherClassForPlayerName(refs.valueName)

   console.log(this);
   console.log(refs.changeAction1);
   
   disabledButton(this)
   enableBtn(refs.changeAction2)

   inactiveTitleColor(refs.firstTitleChoose)
   activeTitleColor(refs.secondTitleChoose)
   
}

//2.2
function chooseSecondName(){

    findAndDeleteNecessaryPlayer(newNames, firstRoundName)
    
    chosenNames.push(firstRoundName)
    console.log(chosenNames);
   
    
    alert(`${firstRoundName}, кто же будет вашим первым соперником?`)
    secondRoundName = randomNames(newNames)
    console.log(secondRoundName );
    refs.valueSecondName.textContent = secondRoundName 

    addOtherClassForPlayerName(refs.valueSecondName)
   
    disabledButton(this)
    enableBtn(refs.changeAction3)

    inactiveTitleColor(refs.secondTitleChoose)
    activeTitleColor(refs.thirdTitleChoose)
}

//2.3
function chooseThirdName() {

    findAndDeleteNecessaryPlayer(newNames, secondRoundName)
    
    chosenNames.push(secondRoundName)
    console.log(chosenNames);

    alert(`${firstRoundName} и ${secondRoundName}, кто же составит вам компанию?`)
    
    thirdRoundName = randomNames(newNames)
    console.log(thirdRoundName);
    refs.valueThirdName.textContent = thirdRoundName

    addOtherClassForPlayerName(refs.valueThirdName)
    disabledButton(this)
    enableBtn(refs.changeAction4)

    inactiveTitleColor(refs.thirdTitleChoose)
    activeTitleColor(refs.firstTitlePS)
    
    changeArrayNameBeforeNextStep()
}


//#1 Генерация случайных чисел

//1.1
// let quantityPlayers = 5

//   Тут с нулём
// function getRandomNumber (value){
//     console.log(value);
// const result = Math.floor(Math.random() * value)
// console.log(result);
// return result
// }


//1.2 от (включительно) и до (НЕ включительно)
function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
  }

  // 2 - генерация случайных имен
  function randomNames(names) { 
    let random = Math.floor(Math.random() * ((names.length - 1) + 1));
console.log(random);
const res = names.find((el, ind) => ind === random)
console.log(res);
return res
} 

// 3 Дополнительно к пункту 2

// 3.1 Дисаблим кнопку
function disabledButton (uniqueThisBtn) {
    uniqueThisBtn.disabled = true
}

//3.2 Открываем кнопку
function enableBtn (uniqueBtn) {
    uniqueBtn.disabled = false
}

//3.3 Добавляем доп класс на имя игрока
function addOtherClassForPlayerName (valueName) {
    valueName.classList.add('js-actions')
}
//3.4 убираем 3е имя из массива и добавляем его в другой для следующего шага - жеребъевки индивидуальных игр
function changeArrayNameBeforeNextStep(){

    findAndDeleteNecessaryPlayer(newNames, thirdRoundName)
    
    chosenNames.push(thirdRoundName)
    console.log(chosenNames);
   
}
//3.5 активный цвет 
function activeTitleColor(valueTitle){
    valueTitle.classList.add('js-actions3')
}

function inactiveTitleColor(valueTitle){
    valueTitle.classList.add('js-actions4')
}

///////////////////////////////////////////
//4. жеребъевка индивидуальных игр
function choosePersonalScheludeForFistPlayer(){
    alert("Готовы?")
    firstNameForPS = randomNames(chosenNames)
    refs.spanFourthName.textContent = `${firstNameForPS}`

    //основное индивидуальное рассписание
    // refs.spanSecFourthName.textContent = `${firstMPS}`

    //альтернативное индивидуальное рассписание
    refs.spanSecFourthName.textContent = `${altFirstMPS}`
   
    findAndDeleteNecessaryPlayer(chosenNames, firstNameForPS)
    
    addAnotherClassForPlayerName(refs.spanFourthName)
    addAnotherClassForPlayerName(refs.spanSecFourthName)

    disabledButton(this)
    enableBtn(refs.changeAction5)

    inactiveTitleColor(refs.firstTitlePS)
    activeTitleColor(refs.secondTitlePS)
}

function choosePSForSecAndThirdPlayers(){
    alert("Иииии )))")
    secondNameForPS = randomNames(chosenNames)
    refs.spanFifthName.textContent = `${secondNameForPS}`

    //основное индивидуальное рассписание
    // refs.spanSecFifthName.textContent = `${secondMPS}`
    
    //альтернативное индивидуальное рассписание
    refs.spanSecFifthName.textContent = `${altSecondMPS}`
    

    findAndDeleteNecessaryPlayer(chosenNames, secondNameForPS)
    
    addAnotherClassForPlayerName(refs.spanFifthName)
    addAnotherClassForPlayerName(refs.spanSecFifthName)

    console.log(thirdNameForPS);
   
    thirdNameForPS = randomNames(chosenNames)
    console.log(thirdNameForPS);

    refs.spanSixthName.textContent = `${thirdNameForPS}`

    //основное индивидуальное рассписание
    // spanSecSixththName.textContent = `${thirdMPS}`

    //альтернативное индивидуальное рассписание
    refs.spanSecSixththName.textContent = `${altThirdndMPS}`
    
    
    addAnotherClassForPlayerName(refs.spanSixthName)
    addAnotherClassForPlayerName(refs.spanSecSixththName)

    disabledButton(this)
    enableBtn(refs.changeAction7)

    inactiveTitleColor(refs.secondTitlePS)
    activeTitleColor(refs.fifthTitlePS)
    
}

function chosePSForFouAndFifPlayers(){
    alert("Иииии )))")
    fourthNameForPS = randomNames(newNames)
    refs.spanSevenththName.textContent = `${fourthNameForPS}`

    //основное индивидуальное рассписание
    // refs.spanSecSevensthName.textContent = `${fourthMPS}`
    
    //альтернативное индивидуальное рассписание
    refs.spanSecSevensthName.textContent = `${altFourthMPS}`
     
    findAndDeleteNecessaryPlayer(newNames, fourthNameForPS)
    
    addAnotherClassForPlayerName(refs.spanSevenththName)
    addAnotherClassForPlayerName(refs.spanSecSevensthName)

    console.log(fourthNameForPS);
   
    fifthNameForPS = randomNames(newNames)
    console.log(fifthNameForPS);

    refs.spanEighthName.textContent = `${fifthNameForPS}`

    //основное индивидуальное рассписание
    // refs.spanSecEighththName.textContent = `${fifthMPS}`

     //альтернативное индивидуальное рассписание
     refs.spanSecEighththName.textContent = `${altFifthMPS}`

    
    addAnotherClassForPlayerName(refs.spanEighthName)
    addAnotherClassForPlayerName(refs.spanSecEighththName)

    disabledButton(this)

    inactiveTitleColor(refs.fifthTitlePS)
}
//5 Дополгительно к пункту 4
//5.1 Доп класс
function addAnotherClassForPlayerName (valueName) {
    valueName.classList.add('js-actions2')
}

//6 дополнительно к 2 и 4
//6.1 удаляем случайно выбранного игрока из нужного нам массива (для следующего рандомного выбора из оставшихся)
function findAndDeleteNecessaryPlayer (necessaryArrayOfPlayers, playerName){

    const cutChosen = necessaryArrayOfPlayers.find((el)=> el === playerName)
    console.log(cutChosen);
    const olala = necessaryArrayOfPlayers.findIndex((el) => el === playerName)
    console.log(olala);
    necessaryArrayOfPlayers.splice(olala, 1)
    console.log(necessaryArrayOfPlayers);

}

// //7 пробую нотифлекс 
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
