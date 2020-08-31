export default {};

//let and const
let variable: any = "test";

const maxLevels = 100;

console.log(maxLevels);

//arrow function. keep 'this' binding
const addNumbers = (n1: number, n2:number) => n1 + n2;

//default parameters
const countdown = (start: number = 10): void =>{
    while(start > 0) start--;
    console.log("done!")
}
countdown();

//Rest and Spread operators.
const numArr = [1, 10, 99, -5, 3,4,5,6];
console.log(Math.max(...numArr));

function makeArray(name: string, ...args:number[]){
    //arguments.
    console.log(args);
}
//Destructing
const myHobbies = ["cooking", "sport"];
//const hobby1 = myHobbies[0];
//const hobby2 = myHobbies[1];
const[hobby1, hobby2] = myHobbies;
//console.log(myHobbies);
const myUserData = {
    myUsername: 'Bob',
    myUserAge: 22
}
const {myUsername: anotherName, myUserAge} = myUserData;

const name = 'Alice';
const greet = `Hello, ${name}`;
console.log(greet);

//optional parameters
function getFullName(firstName: string, lastName?: string){
    return firstName + lastName;
}
const fullName = getFullName("bob");
console.log(fullName);