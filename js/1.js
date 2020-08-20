// js

var assert = require("assert");
assert.ok(true);

assert.ok(!false);
assert.ok(!undefined);
assert.ok(!0);
assert.ok(!null);
assert.ok(!'');
assert.ok(!NaN);
assert.ok(!('aaa' == NaN));

assert.ok(isNaN(NaN));

//console.log(global); //global是JS的运行环境 浏览器里

function localTest(){
	var a = 1;
	b = 2;
	console.log(a);
}
console.log("--------------------");
var globalTest = function(){

};

localTest();
globalTest();
console.log("global b: " + global.b);
console.log("--------------------");
// Self invoke function
(function(){
	console.log("Hello");  // 没有函数名 自动运行
})()

function avg(){
	console.log(arguments);
	var result = 0;
	for(var i = 0; i < arguments.length;i++){
		result += arguments[i];
	}
	return result / arguments.length;
}

console.log(avg(2,4,6,10,28,88));
console.log("--------------------");
//Hoisting 
(function(){
	//var i;
	var hello1;
	hello();
	//hello1();
	console.log(i);
	console.log(j);
	for(var i = 0; i < 5; i++){

	}
	console.log(i);
	var j = 1;
	function hello(){
		console.log("hello");
	}
	var hello1 = function(){
		console.log("hello1");
	}
})()
console.log("--------------------");

//Difference between == and ===
var s1 = 'abc'
var s2 = new String("abc")
assert.ok(s1 == s2);
console.log(typeof(s1))
console.log(typeof(s2))
assert.ok(!(s1 === s2))

var x1 = {name: 'Bob'}
var x2 = {name: 'Bob'}
assert.ok(!(x1 == x2))
assert.ok(!(x1 === x2))
console.log(x1.name)
console.log(x1["name"])

var x = {"first name" : "Bob"}
console.log(x["first name"])

console.log("--------------------");

p = 0
p1 = -0
assert.ok(p == p1)
assert.ok(p === p1)
console.log(Symbol(p))