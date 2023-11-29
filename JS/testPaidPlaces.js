

const imitatePrizePoolInTournament = (quantityPlayers, guarantee, buyIn ) => {
//  турнир стартует от 100 человек
if (quantityPlayers < 100){
    console.log("Турнир не состоялся из-за малого количества игроков");
    // все средства должны быть возвращены игрокам
return
}

//разделение комиссии и призового фонда
let rake = buyIn * 9.0909 / 100
rake = Number(rake.toFixed())

console.log(rake);

const buyInWithoutRake = buyIn - rake
console.log(buyInWithoutRake);

//реальная гарантия
const actualGuarantee = buyInWithoutRake * quantityPlayers
console.log(actualGuarantee);



//Призовая зона
const prizePool = quantityPlayers * 10 / 100
console.log(prizePool);

//PLACES
let first
let second
let third
let fourth
let fifth
let sixth
let seventh
let eighth
let nineth
let ten
let sinceElevenToTwenty
let twentyOneToThirty
let thirtyOneToForty
let fortyOneToFifty

let FiftyoneToOnehundred

let OneHundredoneToOneHundredFifty
let OneHundredFiftyoneToTwoHundred

let sinceTwoHundredOneToTwoHundredFifty


if (quantityPlayers >= 100 && quantityPlayers <= 500) {
    console.log("10 призовых");
   

    first = guarantee * 50 / 100
    console.log(first);

    second = guarantee * 15 / 100
    console.log(second);

    third = guarantee * 10 / 100
    console.log(third);
    
    fourth = guarantee * 7 / 100
    console.log(fourth);
   
    fifth = guarantee * 5 / 100
    console.log(fifth);

    sixth = guarantee * 4 / 100
    console.log(sixth);
    
    seventh = guarantee * 3 / 100
    console.log(seventh);
   
    eighth = guarantee * 2.5 / 100
    console.log(eighth);
    
    nineth = guarantee * 2 / 100
    console.log(nineth);
    
    ten = guarantee * 1.5 / 100
    console.log(ten);
   

} else if (quantityPlayers > 500 && quantityPlayers <= 1000) {
    console.log("50 призовых");
    //МИНИМАЛЬНАЯ ВЫПЛАТА 2000 = 0.1 %
    
// получается что мы снимаем по 1 проценту с 3-10 го и 2 процента со второго! = 10% на следующие 40 мест
first = guarantee * 50 / 100
    console.log(first);

    second = guarantee * 13 / 100
    console.log(second);

    third = guarantee * 9 / 100
    console.log(third);
    
    fourth = guarantee * 6 / 100
    console.log(fourth);
   
    fifth = guarantee * 4 / 100
    console.log(fifth);

    sixth = guarantee * 3 / 100
    console.log(sixth);
    
    seventh = guarantee * 2 / 100
    console.log(seventh);
   
    eighth = guarantee * 1.5 / 100
    console.log(eighth);
    
    nineth = guarantee * 1 / 100
    console.log(nineth);
    
    ten = guarantee * 0.5 / 100
    console.log(ten);

    sinceElevenToTwenty = guarantee * 0.4 / 100
    console.log(sinceElevenToTwenty);
    
    twentyOneToThirty = guarantee * 0.3 / 100
    console.log(twentyOneToThirty);

    thirtyOneToForty = guarantee * 0.2 / 100
    console.log(thirtyOneToForty);

    fortyOneToFifty = guarantee * 0.1 / 100
    console.log(fortyOneToFifty);
 

} else if (quantityPlayers > 1000 && quantityPlayers <= 1500){
    console.log("100 призовых");
      //МИНИМАЛЬНАЯ ВЫПЛАТА 2000 = 0.1 %
      
// нужно 5% и еще 0.5 прибавить для 41-50 --- режем по 0.1 у 9-7х, по 0.3 у 6го, по 0.4 у 5го, по 0.5 у 4го, 1.5 у 3го и 2.5 у 2го

first = guarantee * 50 / 100
    console.log(first);

    second = guarantee * 10.5 / 100
    console.log(second);

    third = guarantee * 7.5 / 100
    console.log(third);
    
    fourth = guarantee * 5.5 / 100
    console.log(fourth);
   
    fifth = guarantee * 3.6 / 100
    console.log(fifth);

    sixth = guarantee * 2.7 / 100
    console.log(sixth);
    
    seventh = guarantee * 1.9 / 100
    console.log(seventh);
   
    eighth = guarantee * 1.4 / 100
    console.log(eighth);
    
    nineth = guarantee * 0.9 / 100
    console.log(nineth);
    
    ten = guarantee * 0.5 / 100
    console.log(ten);

    sinceElevenToTwenty = guarantee * 0.4 / 100
    console.log(sinceElevenToTwenty);
    
    twentyOneToThirty = guarantee * 0.3 / 100
    console.log(twentyOneToThirty);

    thirtyOneToForty = guarantee * 0.2 / 100
    console.log(thirtyOneToForty);

    fortyOneToFifty = guarantee * 0.15 / 100
    console.log(fortyOneToFifty);

    FiftyoneToOnehundred = guarantee * 0.1 / 100
    console.log(FiftyoneToOnehundred);
    
} else if (quantityPlayers > 1500 && quantityPlayers <= 2000) {
    console.log("200 призовых");
      //МИНИМАЛЬНАЯ ВЫПЛАТА 2000 = 0.1 %
// 5 % для 200-150, 5.5 % для 150-100. + 1.5% для 100-50,  === 12 %
// режем 0.5% для 30-21, -1% для 21-11 ,,,, у 10го 0.1 , у 9го 0.3, у 8го 0.4, у 7го 0.4, у 6го 0.5, у 5го 0.6 у 4го 1.5, у 3го 2.5 у 2го 4.2
first = guarantee * 50 / 100
    console.log(first);

    second = guarantee * 6.3 / 100
    console.log(second);

    third = guarantee * 5 / 100
    console.log(third);
    
    fourth = guarantee * 4 / 100
    console.log(fourth);
   
    fifth = guarantee * 3 / 100
    console.log(fifth);

    sixth = guarantee * 2.2 / 100
    console.log(sixth);
    
    seventh = guarantee * 1.5 / 100
    console.log(seventh);
   
    eighth = guarantee * 1 / 100
    console.log(eighth);
    
    nineth = guarantee * 0.6 / 100
    console.log(nineth);
    
    ten = guarantee * 0.4 / 100
    console.log(ten);

    sinceElevenToTwenty = guarantee * 0.3 / 100
    console.log(sinceElevenToTwenty);
    
    twentyOneToThirty = guarantee * 0.25 / 100
    console.log(twentyOneToThirty);

    thirtyOneToForty = guarantee * 0.2 / 100
    console.log(thirtyOneToForty);

    fortyOneToFifty = guarantee * 0.15 / 100
    console.log(fortyOneToFifty);

    FiftyoneToOnehundred = guarantee * 0.13 / 100
    console.log(FiftyoneToOnehundred);

    OneHundredoneToOneHundredFifty = guarantee * 0.11 / 100
    console.log(OneHundredoneToOneHundredFifty);

    OneHundredFiftyoneToTwoHundred = guarantee * 0.1 / 100
    console.log(OneHundredFiftyoneToTwoHundred);
    
    
} else if (quantityPlayers > 2000 && quantityPlayers <= 2500){
    console.log("200 призовых, но с увеличеной гарантией");
    first = guarantee * 50 / 100
    console.log(first);

    second = actualGuarantee * 6.3 / 100
    console.log(second);

    third = actualGuarantee * 5 / 100
    console.log(third);
    
    fourth = actualGuarantee * 4 / 100
    console.log(fourth);
   
    fifth = actualGuarantee * 3 / 100
    console.log(fifth);

    sixth = actualGuarantee * 2.2 / 100
    console.log(sixth);
    
    seventh = actualGuarantee * 1.5 / 100
    console.log(seventh);
   
    eighth = actualGuarantee * 1 / 100
    console.log(eighth);
    
    nineth = actualGuarantee * 0.6 / 100
    console.log(nineth);
    
    ten = actualGuarantee * 0.4 / 100
    console.log(ten);

    sinceElevenToTwenty = actualGuarantee * 0.3 / 100
    console.log(sinceElevenToTwenty);
    
    twentyOneToThirty = actualGuarantee * 0.25 / 100
    console.log(twentyOneToThirty);

    thirtyOneToForty = actualGuarantee * 0.2 / 100
    console.log(thirtyOneToForty);

    fortyOneToFifty = actualGuarantee * 0.15 / 100
    console.log(fortyOneToFifty);

    FiftyoneToOnehundred = actualGuarantee * 0.13 / 100
    console.log(FiftyoneToOnehundred);

    OneHundredoneToOneHundredFifty = actualGuarantee * 0.11 / 100
    console.log(OneHundredoneToOneHundredFifty);

    OneHundredFiftyoneToTwoHundred = actualGuarantee * 0.1 / 100
    console.log(OneHundredFiftyoneToTwoHundred);
    
}




// Подсчет призов при перебитой гарнтии и нет
if(actualGuarantee <= guarantee) {
    //то будет схема №1 по выплатам
    console.log('Гарантия НЕ перебита');
}
else {
    // 2я схема
    console.log('ПЕРЕБИЛИ Гарантию');
}

}



imitatePrizePoolInTournament(2500, 2000000, 1100.00)

//передаем:
// 1-количсетво игроков , 2- гарантия, 3-деньги(вход), 

// 1:
// 10% в призах (кратное 100)
// от количества игроков зависит количество мест: 

// 100 - 199 игроков = 10 мест // (1st -50%, 2nd -15%, 3rd -10%, 4rd -7%, 5th -5%, 6th - 4%, 7th - 3%, 8th - 2,5%, 9th - 2%, 10th - 1,5%)
// 200-299 игроков = 20 мест (2 место минус 1 % и остальные минус 0.5 и 10-20 места по 0.5)
// ...
// 1400 -1499 = 140 призов
// 1500 = 1599 = 150 призов 

// кратность в 100 КАК высчитывать и прибавлять места ?????? КАКОЙ АЛГОРИТМ ? ??  !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// а полсе перебития - плавный рост !! !!!!!!



// 2:
// - если входы не покрывают гарантию - 1е мест 50% , остальные както пропорционально разбить нужно подумать или скопировать %
// - если покрывают - 1е место остается 50% от стартовой гарантии, оставльные пропорционально растут
//    (т.е. они уже как 100% того что сверху)

// КАК оставлять милилон после перебитии гарантии ????? ??? !!!!!!!!!!!!!!!

// 3: 
// 1000 в призы , 100 комиссия
