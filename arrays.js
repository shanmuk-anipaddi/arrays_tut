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
var biggest = secondBiggest =  numbers[0];
//Finding largest array
for (i = 0; i <= numberCount; i++) {
  if (numbers[i] > biggest) {
    biggest = numbers[i];
  }
}

//Finding second largest

for(j=0;j<=numberCount;j++){

    if(numbers[j] > secondBiggest && numbers[j] < biggest){
        secondBiggest = numbers[j];
    }

}
console.log(biggest);
console.log(secondBiggest);
