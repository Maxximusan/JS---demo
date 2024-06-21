const tablo = document.querySelector('[data-active = "tablo"]')
const button = document.querySelector('[data-button = "but"]')
const winer = document.querySelector('[data-active = "winner"]')
const progress = document.querySelector('[data-active = "progres"]')

button.addEventListener('click', onClick)

const horses = [
  'ava',
  'lucy',
 ' korola',
 'bambuka',
 'chad'
]

console.log(tablo );
let raceCounter = 0
function onClick() {
  raceCounter += 1
  const promises = horses.map(run)

  winer.textContent = ''
  progress.textContent = 'Заезд начался! Все ставки сделаны и не принимаются!'

  Promise.race(promises).then(({horse, time}) => {
    winer.textContent = ` Победил ${horse}, финишировал за ${time} времени`

    updateResultsTable({horse, time, raceCounter})
  })
  Promise.all(promises).then(() => {
    progress.textContent = 'Заезд окончен, делайте ваши ставки'
   
  })
}

function updateResultsTable ({horse, time, raceCounter}){
  const tr = `<tr><td>${raceCounter}</td><td>${horse}</td><td>${time}</td></tr>`
  tablo.insertAdjacentHTML('beforeend', tr)
}


function run(horse){
  return new Promise(resolve => {
    const time = getRandomtime(2000, 3500)

    setTimeout(() => {
      resolve({horse, time})
    }, time)
  })
}

function getRandomtime(min, max){
  return Math.floor(Math.random() * (max - min +1) + min)
}
// propise = new Promise((resolve, reject) => {
//   const canFulfill = Math.random() > 0.5;

//   setTimeout(() => {
//     if (canFulfill) {
//       resolve("Заезд начался! Все ставки сделаны!!!");
//     } else {
//       reject("NAHOY )))");
//     }
//   }, 5000);
//   console.log(canFulfill);
// });