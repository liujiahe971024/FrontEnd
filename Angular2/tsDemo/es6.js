"use strict";
exports.__esModule = true;
exports["default"] = {};
//let and const
var variable = "test";
var maxLevels = 100;
console.log(maxLevels);
//arrow function. keep 'this' binding
var addNumbers = function (n1, n2) { return n1 + n2; };
//default parameters
var countdown = function (start) {
    if (start === void 0) { start = 10; }
    while (start > 0)
        start--;
    console.log("done!");
};
countdown();
//Rest and Spread operators.
var numArr = [1, 10, 99, -5, 3, 4, 5, 6];
console.log(Math.max.apply(Math, numArr));
function makeArray(name) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    //arguments.
    console.log(args);
}
//Destructing
var myHobbies = ["cooking", "sport"];
//const hobby1 = myHobbies[0];
//const hobby2 = myHobbies[1];
var hobby1 = myHobbies[0], hobby2 = myHobbies[1];
//console.log(myHobbies);
var myUserData = {
    myUsername: 'Bob',
    myUserAge: 22
};
var anotherName = myUserData.myUsername, myUserAge = myUserData.myUserAge;
var name = 'Alice';
var greet = "Hello, " + name;
console.log(greet);
//optional parameters
function getFullName(firstName, lastName) {
    return firstName + lastName;
}
var fullName = getFullName("bob");
console.log(fullName);
