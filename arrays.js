////////////////////
//      Array     //
///////////////////

let numbers = [1,2,3,4,5,6,7,8,9,10,11,12,12];
let numberCount = numbers.length;
///////Find the smallest number 

// const min = Math.min(...numbers);
// console.log(min);

//Finding the smallest numbers
var smallest = numbers[0];
for(i=0;i<= numberCount;i++){
    if(numbers[i] < smallest){
        smallest = numbers[i];
    }
}
console.log(smallest);
