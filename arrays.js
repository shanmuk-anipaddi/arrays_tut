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
// let arrayFilter = array.filter((ele) => {
//     if(ele > 5){
//         return ele;
//     }
// })

// console.log(arrayFilter)
//Filter  End///////////////////////////////

//entries  Start///////////////////////////////
// console.log(array.entries());
// for (let num of array.entries()){
//     console.log(num);
// }

//Outputs array with
/*index[ 0, 1 ]
[ 1, 2 ]
[ 2, 3 ]
[ 3, 4 ]
[ 4, 5 ]
[ 5, 10 ]*/
//Entries  end///////////////////////////////

//Every  start///////////////////////////////
//find the even number
// const even_every = array.every((element)=>{
//     return element/2 == 0;
// })

//find the odd number
// const even_every = array.every((element)=>{
//     return element%2 == 1;
// })

// console.log(even_every);
//Of we will get values
// for(let num of array.values()){
//     console.log(num);
// }

// //In we wil get keys
// for(let num in array){
//     console.log(num);
// }

//Reduce Start////////////////////////////////
// const reduceSum = array.reduce((total,element)=>{
//     return total+=element
// })
// console.log(reduceSum)
//Reduce End////////////////////////////////

// const call = (a) => {
//     return (b) => {
//     return (c) => {
//     return a * b * c;
//     };
//     };
//     };
//     console.log("output with arrow function", call(2)(4)(6));

// for (let i = 0; i < 5; i++) {
//   setTimeout(function () {
//     console.log(i);
//   }, i * 1000);
// }

// for (var i = 0; i < 5; i++) {
//   setTimeout(function () {
//     console.log(i);
//   }, i * 1000);
// }

// const addMul = (a,b)=>{
//     let answer = a;
//     for(let i=0;i<b-1;i++){
//         answer += a;
//     }
//     return answer;
// }

// console.log(addMul(5,3));

///Sorting array with new array start
        // const arr = [13, 10, 5, 15, 1, 20];
        // console.log("Before array : ", arr);
        // for (let i = 0; i < arr.length; i++) {
        // for (j = i + 1; j < arr.length; j++) {
        //     //if(arr[i] < arr[j]){ // descending
        //     if (arr[i] > arr[j]) {
        //     // descending
        //     let tempVar = arr[i];
        //     arr[i] = arr[j];
        //     arr[j] = tempVar;
        //     }
        // }
        // }
        // console.log("Sorted array : ", arr);
///Sorting array with new array end

let num = 4;
function outer() {
  let num = 2;
  function inner() {
    num++; 
    let num = 3;
    console.log("num", num);
  }
  inner();
}
outer();
function sayHi() {
  return (() => 0)();
}
