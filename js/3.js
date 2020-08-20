var obj = {
	foo:function(){
		console.log(this.bar)},
		bar:1
}
var foo = obj.foo
var bar = 2
obj.foo()
foo()


console.log("------------------------------------------");

(function(){
	var order = {
		price: 100,
		calculate: function(){
			var that = this;
			return{
				name:"table",
				getTotalPrice: function(qty){
					return qty * that.price;  //传递作用域
				}
			}
		},
		calculate2: function(){
			price: 20
			return{
				name: "table",
				getTotalPrice: function(qty){
					return qty * this.price;
				}
			}
		}
	}
	var calc = order.calculate();
	console.log(calc);
	console.log(calc.name);
	console.log(calc.getTotalPrice(1));
	var calc2 = order.calculate2();
	console.log(calc2.getTotalPrice(3));
	console.log(calc2.getTotalPrice.call(order,1));
	console.log(calc2.getTotalPrice.apply(order, [1]));
	console.log(calc2.getTotalPrice.bind(order)(1))
})();

console.log("------------------------------------------");

function checkout(price,qty,member){
	var result = price * qty;
	switch(member){
		case "VIP":
			result *= 0.7;
			break;
		case "Premium":
			result *= 0.6;
			break;
		default:
			break;
	}
	return result;
}
console.log(checkout(100,5,"VIP"));
console.log(checkout(100,5,"Premium"));
console.log(checkout(100,5,"Regular"));

console.log("------------------------------------------");
/////////////////////////////////////////////////demo6.js

//JS prototype 原型链
function A(){
	this.value = 10;
	this.getValue = function(){
		return this.value;
	};
}
var a1 = new A();
var a2 = new A();
console.log(a1.getValue() == a2.getValue());
console.log(a1.getValue() === a2.getValue());
console.log(a1.getValue);
console.log(a2.getValue);
console.log(a1.getValue == a2.getValue);

function B(){
	this.value = 20;
}
B.prototype.getValue = function(){
	return this.value;
}
B.prototype.x = 20; 
var b1 = new B();
var b2 = new B();
console.log(b1.getValue === b2.getValue);
b1.x = 30;
console.log(b1.x);
console.log(b2.x);

// __proto__ , prototype

//B.prototype = new Object();
//c -> d -> B.prototype.__proto__ = Object.prototype -> null;

// prototype chain: b1 -> B.prototype(Object) -> Object.prototype -> null
console.log(Object.getPrototypeOf(b1) === B.prototype);
console.log(Object.getPrototypeOf(B.prototype) === Object.prototype);
console.log(Object.getPrototypeOf(Object.prototype) === null)
// prototype chain: B -> Function.prototype -> Object.prototype -> null
console.log(Object.getPrototypeOf(B) === Function.prototype);

console.log("------------------------------------------");

String.prototype.reverse = function(){
	return this.split('').reverse().join('');
}
console.log("abc".reverse());

console.log("------------------------------------------");

function Parent(){
	this.name = "Parent";
}
Parent.prototype.sayHello = function(){
	return "Hello, " + this.name
}
function Child(){

}
//p -> Parent.prototype -> Object.prototype -> null
var p = new Parent();
Child.prototype = p;
//c -> Child.prototype = p -> Parent.prototype -> Object.prototype -> null
var c = new Child();
console.log(c.name);
console.log(c.sayHello());

//new way
function Base(){
	this.name = "Base";
}
Base.prototype.value = 100;
function Sub(){
	Base.call(this);
}
Sub.prototype = Object.create(Base.prototype);

Sub.prototype.constructor = Sub;

var sub = new Sub();
console.log(sub.name);
console.log(sub.value);
var sub1 = new Sub();
console.log(Base.prototype.isPrototypeOf(sub));
console.log(sub instanceof Base);
console.log(sub instanceof Sub);

console.log("------------------------------------------");
/////////////////////////////////////////////////demo6.js
//Object 继承
//inheritance between objects
var a = {
	x: 100
}
var b = {}

b.__proto__ = a;
console.log(b.x);

//check if a is on the prototype chain of b
console.log(a.isPrototypeOf(b))

console.log("------------------------------------------");

function Shape(){
	this.x = 0;
	this.y = 0;
}

Shape.moveStatic = function(x, y){
	this.x = x;
	this.y = y;
}

Shape.prototype.move = function(x, y){
	this.x = x;
	this.y = y;
}

var s = new Shape();
s.move(1,2);

function Triangle(){
	Shape.call(this);
}
Triangle.prototype = Object.create(Shape.prototype);
Triangle.prototype.constructor = Triangle;

var t = new Triangle();
t.move(1,1);

function Point(){}
Point.prototype.move = function(x, y){
	Shape.prototype.move.call(this, x, y);
}
var p = new Point();
p.move(1, 1);
console.log(p);
