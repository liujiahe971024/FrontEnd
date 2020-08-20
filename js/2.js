//JS data type
var assert = require('assert')

//Datatypes: boolean, string, number, undefined, null, Symbol
console.log(typeof "abc" === "string");
var myBoolean = true;
console.log(typeof myBoolean);
console.log(typeof null);
console.log(typeof undefined);
console.log(typeof []);   //object
console.log(typeof function(){});  //function

console.log("----------------------");

var test = function(){
	console.log("test")
}
function testWarp(x){
	if(typeof x === "function"){
		x();
	}
}
testWarp(test);

console.log("----------------------");

var myobj = {};
myobj.name = "Bob";
console.log(myobj)
var myobj1 = new Object();
var x = Object(100);
console.log(x);
assert.equal(x,100);
assert.ok(!(x === 100));

var y = {name: "bob"};
var z = Object(y)
console.log(y == z)
console.log(y === z)
var t = {}

function isObject(obj){
	console.log(Object(obj))
	return obj === Object(obj)
	// null === Object(null)
}
console.log(isObject(null))

console.log("----------------------");

//////////////////////////////////////Demo3.js

var assert = require("assert")

var alice = {
	name: 'Alice',
	age : 20,
	hello: function(){
		return "Hello, " + this.name;
	}
}
var keys = Object.keys(alice)
var values = Object.values(alice)
console.log(keys)
console.log(values)

console.log("----------------------");

keys.forEach(function(key){
	console.log(key);
	if(typeof alice[key] === "function") 
		console.log(alice[key]())
	else
		console.log(alice[key])
})

console.log("----------------------");

//Difference between keys and getOwnPropertyNames
var props = Object.getOwnPropertyNames(alice);
console.log(props)

var arr = [1, "a", 3, {"name" : "bob"}, 5]
console.log("Keys ", Object.keys(arr))
console.log("getOwnPropertyNames ", Object.getOwnPropertyNames(arr))

console.log("----------------------");

//////////////////////////////////////Demo4.js
// A property has 3 attributes: enumerable, writable, configurable
var bob = {
	"name": "Bob"
}
bob.age = 30;
console.log(Object.keys(bob))
bob.age = 40

Object.defineProperty(bob, "salary",{
	value : 1000
})
console.log(Object.keys(bob))
bob.salary = 2000
console.log(bob.salary)

Object.defineProperty(bob, "address", {
	value : "Princeton",
	enumerable: true,
	configurable: true
})
console.log(Object.keys(bob))
delete bob.address
delete bob.age
console.log(Object.keys(bob))

Object.defineProperty(bob, "color", {
	configurable: true
})
bob.color = 100;
console.log(bob.color)

Object.defineProperty(bob, "color", {
	writable:true
})
bob.color = 100;
bob.color = "sss"
console.log(bob.color)

console.log("----------------------");

//Three status of an object: extensible, sealed, frozen
var obj = {
	x: "abc"
};
console.log('extensible: ', Object.isExtensible(obj));
Object.preventExtensions(obj);
console.log('extensible: ', Object.isExtensible(obj));
obj.y = 100;
console.log(obj.y);

//object is sealed means we can't delete(add) its property
console.log('sealed', Object.isSealed(obj));
Object.seal(obj);
console.log('sealed', Object.isSealed(obj));
delete obj.x;
console.log(obj);

//object is frozen means we can't update(add/delete) its property
console.log('frozen', Object.isFrozen(obj));
Object.freeze(obj);
console.log('frozen', Object.isFrozen(obj));
obj.x = "def";
delete obj.x;
console.log(obj);

console.log("----------------------");
//////////////////////////////////////Demo5.js

//JS: this

//constructor function
function Vehicle(){
	this.price = 1000;
	return 100
}
var v = new Vehicle();
console.log(v)
console.log("after new ", global.price);

Vehicle();
console.log("after function invoke ", global.price)

console.log("----------------------");

//safe constructor
function Person(name){
	if(!(this instanceof Person)){
		return new Person(name);
	}
	this.name = name;
}
console.log(Person('bob'));

name = "aaa"
var boob = {
	name: "Bob",
	hello: function(a,b){
		return "Hello " + this.name;
	}
}
console.log(boob.hello())

console.log("----------------------");
// Function: apply, call. bind
var myHello = boob.hello;
console.log(myHello(1,2));
console.log(myHello.apply(boob, [1,2]))
console.log(myHello.call(boob, 1, 2))
console.log(myHello.bind(boob)(1,2))