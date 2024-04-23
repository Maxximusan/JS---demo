const changeAction1 = document.querySelector('button[data-action = "choose1"]')
const valueNum = document.querySelector('#valueNumber')
const valueName = document.querySelector('#valueName1')

const changeAction2 = document.querySelector('button[data-action = "choose2"]')
const valueSecondName = document.querySelector('#valueName2')

const changeAction3 = document.querySelector('button[data-action = "choose3"]')
const valueThirdName = document.querySelector('#valueName3')

const changeAction4 = document.querySelector('button[data-action = "choose4"]')
const valueFourthName = document.querySelector('#valueName4')
const spanFourthName = document.querySelector('#valueName41')
const spanSecFourthName = document.querySelector('#valueName42')

const changeAction5 = document.querySelector('button[data-action = "choose5"]')
// const valueFifthName = document.querySelector('#valueName5')
const spanFifthName = document.querySelector('#valueName51')
const spanSecFifthName = document.querySelector('#valueName52')
// const valueSixthName = document.querySelector('#valueName6')
const spanSixthName = document.querySelector('#valueName61')
const spanSecSixththName = document.querySelector('#valueName62')

const changeAction7 = document.querySelector('button[data-action = "choose7"]')
// const valueSeventhName = document.querySelector('#valueName7')
const spanSevenththName = document.querySelector('#valueName71')
const spanSecSevensthName = document.querySelector('#valueName72')
const spanEighthName = document.querySelector('#valueName81')
const spanSecEighththName = document.querySelector('#valueName82')


changeAction1.addEventListener('click', chooseName)
changeAction2.addEventListener('click', chooseSecondName)
changeAction3.addEventListener('click', chooseThirdName)

changeAction4.addEventListener('click', choosePersonalScheludeForFistPlayer)
changeAction5.addEventListener('click', choosePSForSecAndThirdPlayers)
changeAction7.addEventListener('click', chosePSForFouAndFifPlayers)

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

//2.1
function chooseName() {
    
//  const op = getRandomNumber(quantityPlayers)

firstRoundNumber = getRandomArbitrary(1,6)
 console.log(firstRoundNumber);
 valueNum.textContent = firstRoundNumber

alert('Кто же будет первым участником в первой игре турнира?')
  firstRoundName = randomNames(names)
 console.log(firstRoundName);
 valueName.textContent = firstRoundName
 addOtherClassForPlayerName(valueName)

   console.log(this);
   
   disabledButton(this)
   enableBtn(changeAction2)
   
}

//2.2
function chooseSecondName(){
    const cutChosen = newNames.find((el)=> el === firstRoundName)
    console.log(cutChosen);
    const olala = newNames.findIndex((el) => el === firstRoundName)
    console.log(olala);
    newNames.splice(olala, 1)
    chosenNames.push(firstRoundName)
    console.log(chosenNames);
   
    console.log(newNames);
    alert(`${firstRoundName}, кто же будет вашим первым соперником?`)
    secondRoundName = randomNames(newNames)
    console.log(secondRoundName );
    valueSecondName.textContent = secondRoundName 

    addOtherClassForPlayerName(valueSecondName)
   
    disabledButton(this)
    enableBtn(changeAction3)
}

//2.3
function chooseThirdName() {
    const cutChosen = newNames.find((el)=> el === secondRoundName)
    console.log(cutChosen);
    const olala = newNames.findIndex((el) => el === secondRoundName)
    console.log(olala);
    newNames.splice(olala, 1)
    chosenNames.push(secondRoundName)
    console.log(chosenNames);
    alert(`${firstRoundName} и ${secondRoundName}, кто же составит вам компанию?`)
    console.log(newNames);
    thirdRoundName = randomNames(newNames)
    console.log(thirdRoundName);
    valueThirdName.textContent = thirdRoundName

    addOtherClassForPlayerName(valueThirdName)
    disabledButton(this)
    enableBtn(changeAction4)
    
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
    const cutChosen = newNames.find((el)=> el === thirdRoundName)
    console.log(cutChosen);
    const olala = newNames.findIndex((el) => el === thirdRoundName)
    console.log(olala);
    newNames.splice(olala, 1)
    chosenNames.push(thirdRoundName)
    console.log(chosenNames);
    console.log(newNames);
}

///////////////////////////////////////////
//4. жеребъевка индивидуальных игр
function choosePersonalScheludeForFistPlayer(){
    alert("Готовы?")
    firstNameForPS = randomNames(chosenNames)
    spanFourthName.textContent = `${firstNameForPS}`
    spanSecFourthName.textContent = `${firstMPS}`
    

    const cutChosen = chosenNames.find((el)=> el === firstNameForPS)
    console.log(cutChosen);
    const olala = chosenNames.findIndex((el) => el === firstNameForPS)
    console.log(olala);
    chosenNames.splice(olala, 1)
    console.log(chosenNames);

    addAnotherClassForPlayerName(spanFourthName)
    addAnotherClassForPlayerName(spanSecFourthName)

    disabledButton(this)
   enableBtn(changeAction5)
}

function choosePSForSecAndThirdPlayers(){
    alert("Иииии )))")
    secondNameForPS = randomNames(chosenNames)
    spanFifthName.textContent = `${secondNameForPS}`
    spanSecFifthName.textContent = `${secondMPS}`
    


    const cutChosen = chosenNames.find((el)=> el === secondNameForPS)
    console.log(cutChosen);
    const olala = chosenNames.findIndex((el) => el === secondNameForPS)
    console.log(olala);
    chosenNames.splice(olala, 1)
    console.log(chosenNames);

    addAnotherClassForPlayerName(spanFifthName)
    addAnotherClassForPlayerName(spanSecFifthName)

    console.log(thirdNameForPS);
   
    thirdNameForPS = randomNames(chosenNames)
    console.log(thirdNameForPS);

    spanSixthName.textContent = `${thirdNameForPS}`
    spanSecSixththName.textContent = `${thirdMPS}`

    
    addAnotherClassForPlayerName(spanSixthName)
    addAnotherClassForPlayerName(spanSecSixththName)

    disabledButton(this)
    enableBtn(changeAction7)
}

function chosePSForFouAndFifPlayers(){
    alert("Иииии )))")
    fourthNameForPS = randomNames(newNames)
    spanSevenththName.textContent = `${fourthNameForPS}`
    spanSecSevensthName.textContent = `${fourthMPS}`
    


    const cutChosen = newNames.find((el)=> el === fourthNameForPS)
    console.log(cutChosen);
    const olala = newNames.findIndex((el) => el === fourthNameForPS)
    console.log(olala);
    newNames.splice(olala, 1)
    console.log(newNames);

    addAnotherClassForPlayerName(spanSevenththName)
    addAnotherClassForPlayerName(spanSecSevensthName)

    console.log(fourthNameForPS);
   
    fifthNameForPS = randomNames(newNames)
    console.log(fifthNameForPS);

    spanEighthName.textContent = `${fifthNameForPS}`
    spanSecEighththName.textContent = `${fifthMPS}`

    
    addAnotherClassForPlayerName(spanEighthName)
    addAnotherClassForPlayerName(spanSecEighththName)

    disabledButton(this)
}
//5 Дополгительно к пункту 4
//5.1 Доп класс
function addAnotherClassForPlayerName (valueName) {
    valueName.classList.add('js-actions2')
}
