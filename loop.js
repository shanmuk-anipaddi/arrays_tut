// for loop

const person = {fname:"John", lname:"Doe", age:25};

let text = '';

for(let x in person){
    //console.log(x);
    console.log(x+' = '+person[x]);
}
