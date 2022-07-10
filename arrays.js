////////////////////
//      Array     //
///////////////////

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 12];
let numberCount = numbers.length;
///////Find the smallest number

// const min = Math.min(...numbers);
// console.log(min);

//Finding the smallest numbers
// var smallest = numbers[0];
// for(i=0;i<= numberCount;i++){
//     if(numbers[i] < smallest){
//         smallest = numbers[i];
//     }
// }
// console.log(smallest);

//Finding the Biggest numbers
// var biggest = numbers[0];
// for (i = 0; i <= numberCount; i++) {
//   if (numbers[i] > biggest) {
//     biggest = numbers[i];
//   }
// }
// console.log(biggest);

///////////////////////////////////
// Finding second biggest
///////////////////////////////////
// var biggest = secondBiggest =  numbers[0];
// //Finding largest array
// for (i = 0; i <= numberCount; i++) {
//   if (numbers[i] > biggest) {
//     biggest = numbers[i];
//   }
// }

// //Finding second largest

// for(j=0;j<=numberCount;j++){

//     if(numbers[j] > secondBiggest && numbers[j] < biggest){
//         secondBiggest = numbers[j];
//     }

// }
// console.log(biggest);
// console.log(secondBiggest);

/////////////////
//Sor the array
/////////////////

////////////

// var array = [1,2,3,4,5]
// console.log(array.length) // 5
// array.length = 3
// console.log(array.length) // 3
// console.log(array) //[1,2,3]
// delete array[0]
// console.log(array); //[undefined,2,3]
// console.log(array[0]); //undefined
// console.log(array.length) //3

//find method in array

var array = [1, 2, 3, 4, 5, 10, 20];

// const found = array.find((element) => {
//    // console.log(element)
//     if(element == 10){
//         //return index+"  :  "+element;
//         return element;
//     }

// });
// console.log(found);

//Find Index ///////////////////////////////

// let foundIndex = array.findIndex((element, index) => {
//   if (element == 10) {
//     return index;
//   }
// });

//console.log(foundIndex);
//Find Index  end///////////////////////////////


//Map  Start///////////////////////////////
    // let arrmap = array.map((ele) => {

    //     return ele*2;

    // });

    // console.log(arrmap)
//Map  End///////////////////////////////

//Filter  Start///////////////////////////////
let arrayFilter = array.filter((ele) => {
    if(ele > 5){
        return ele;
    }
})

console.log(arrayFilter)
//Filter  End///////////////////////////////
