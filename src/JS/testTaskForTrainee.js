let generateArray = []
for (let i = 0; i < 51; i += 1 ){
    generateArray.push(Math.round( Math.random() * 1000 ));

}
console.log(generateArray);

const testArrayEven = [332, 14, 974, 194, 613, 916, 998, 516, 905, 592, 679, 859, 682, 442, 708, 14, 273, 142, 670, 743, 847, 541, 173, 10, 607, 896, 364, 895, 27, 782, 209, 477, 68, 644, 609, 542, 70, 934, 479, 122, 22, 784, 613, 893, 234, 393, 541, 383, 744, 499]
const testArrayOdd = [954, 372, 62, 960, 840, 905, 904, 23, 954, 259, 759, 28, 825, 941, 532, 449, 412, 718, 565, 604, 858, 266, 20, 513, 320, 954, 348, 645, 690, 298, 623, 321, 806, 411, 210, 222, 770, 289, 303, 91, 385, 883, 193, 296, 111, 882, 975, 861, 464, 49, 552]


const olala = (testArray) => {
    console.log('Hi, i am start to doing test task');
    console.log(testArray);
    const maxNumber = Math.max(...testArray)
    const minNumber = Math.min(...testArray)
    console.log(maxNumber);
    console.log(minNumber);

    console.log(testArray.length);

// среднее арифметическое
    const spreadArray = [...testArray]
    console.log(spreadArray);
    const sumOfAllNumbers = spreadArray.reduce((total, current) => total + current , 0)
    console.log(sumOfAllNumbers);
    const averageNumber = sumOfAllNumbers / testArray.length
    console.log(averageNumber);

    // медиана
    const sortArray = [...testArray].sort((a,b) => a - b)
    console.log(sortArray);
    const arrayHalf = sortArray.length / 2;
    console.log(arrayHalf);

    const medianaEven = Math.floor(sortArray[arrayHalf])
    console.log(medianaEven);

   
}


olala(testArrayEven)



