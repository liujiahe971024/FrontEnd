var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var router = express.Router();

app.use(express.static(__dirname));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

var USERS = [
	{
		name: 'Bob',
		age: 21
	},
	{
		name: 'Jack',
		age: 25
	},
	{
		name: 'Alice',
		age: 22
	}
];
router.get("/users", function(req, res){
	res.send(USERS);
})
router.post("/users", function(req, res){
	var name = req.body.name;
	var age = req.body.age;
	if(name !== "" && age !== ""){
		USERS.push({
			name: name,
			age: age
		})
	}
	res.send(USERS);
});
router.put("/users", function(req, res){
	var index = req.body.index;
	var name = req.body.name;
	var age = req.body.age;
	USERS.splice(index,1);
	if(name !== "" && age !== ""){
		USERS.push({
			name: name,
			age: age
		})
	}
	res.send(USERS);
})
router.delete("/users", function(req, res){
	var index = req.body.index;
	USERS.splice(index,1);
	res.send(USERS);
})

router.get("/cal/add/:x/:y", function(req, res){
	var x = +req.params.x;
	var y = +req.params.y;
	setTimeout(function(){
		res.send("" + (x + y));
	}, 1000);
});

router.get("/cal/multiply/:x/:y", function(req, res){
	var x = +req.params.x;
	var y = +req.params.y;
	setTimeout(function(){
		res.send("" + (x * y));
	}, 1500);
});

router.post("/cal/add", function(req, res){
	var x = +req.body.x;
	var y = +req.body.y;
	setTimeout(function(){
		res.send("" + (x + y));
	}, 1000);
})

router.post("/cal/multiply", function(req, res){
	var x = +req.body.x;
	var y = +req.body.y;
	setTimeout(function(){
		res.send("" + (x * y));
	}, 1500);
})

app.use("/", router);

app.use(function(req, res, next){
	res.end("404 - Request can't be hanlded.");
});

app.listen(3000);
console.log("server started!");