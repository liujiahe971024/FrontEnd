//JS Closure

/*
	JS closure is a function that is defined in another function.
	The inner function can access all the local variables of the outer function.
	If the inner function is returned, then local variables of the outer function
	is still alive after the outer function is executed.
	Disadvantage: Clousure may cause memory leak.	
*/
function outer(){
	var m = 10;
	return function(x){
		return x * m;
	}
}
var inner = outer();
console.log(inner(2));

function getCounter(){
	var count = 0;
	function x(){

	}
	return{
		getCount: function(){
			return count;
		},
		setCount: function(){
			count = c;
		},
		increase: function(){
			count++;
		}
	}
}
console.log(getCounter())

console.log("------------------------------------------");

function MyClass(){
	this.x = 100;
	var y = "abc"
	var getX = function(){
		console.log(this.x);
		console.log(y);
	}
	getX();
	this.getY = function(){
		console.log(this.x)
		console.log(y)
	}
}
var myClass = new MyClass();
console.log(myClass.x)
myClass.getY();

console.log("------------------------------------------");

// Singleton
var MySingle = (function(){
	var instance;
	return{
		getInstance: function(){
			if(!instance){
				instance = new Object()
			}
			return instance
		}
	}
})();
var ms1 = MySingle.getInstance();
var ms2 = MySingle.getInstance();
console.log(ms1 === ms2)

console.log("------------------------------------------");

var increase = (function(){
	var count = 1;
	return function(){
		return count++
	}
})()
console.log(increase());
console.log(increase());
console.log(increase());
/*
var myTimeout = setTimeout(function(){
	console.log("after 2 second");
}, 2000)
console.log("finish")
/*
clearTimeout(myTimeout);

for(var i = 1; i<=5; i++){
	setTimeout(handle(i), 1000)
}

function handle(index){
	//var index = 1
	return function(){
		console.log(index)
	}
}
*/

console.log("------------------------------------------");
//////////////////////////////////////Demo9.js

//JS Promise

//callback function
setTimeout(function(){
	console.log("This is a callback function")
}, 500)
console.log("After callback function")

function task1(){
	console.log("Excuting task1");
}
function task2(){
	console.log("Excuting task2");
}
function task3(){
	console.log("Excuting task3");
}
/*
setTimeout(function(){  // callback hell
	task1()
	setTimeout(function(){
		task2()
		setTimeout(function(){
			task3()
		}, 500)
	},500)
},500)*/

//////////////////////////////////////Demo10.js

function t1(){
	return new Promise(function(resolve, reject){
		setTimeout(function(){
			task1();
			resolve("Task1 is finished")
		}, 500)
	})
}

function t2(){
	return new Promise(function(resolve, reject){
		setTimeout(function(){
			task2();
			resolve("Task2 is finished")
		}, 700)
	})
}

function t3(){
	return new Promise(function(resolve, reject){
		setTimeout(function(){
			task3();
			resolve("Task3 is finished")
		}, 1000)
	})
}

// status : pending, resolved(fulfilled) , rejected

var promise = t1();
promise.then(function(resp){
	console.log(resp);
	return t2();
}, function(error){

}).then(function(resp){
	console.log(resp);
	return t3();
}).then(function(resp){
	console.log(resp)
}, function(error){
	console.log("error ", error);
})