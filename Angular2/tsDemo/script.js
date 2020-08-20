//number
var x = 6;
console.log(x);
//x = true;
//boolean, string
var y = false;
var z = 'abc';
//array
var hobbies = ["cooking", "sport"];
//tuples
var myTuples = ['a', 1];
//enum
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var myColor = Color.Green;
console.log(myColor);
function addNum(a, b) {
    return a + b;
}
