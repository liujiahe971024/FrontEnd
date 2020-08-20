var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var router = express.Router();

app.use(express.static(__dirname));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

router.get("/ave/:x/:y", function(req, res){
	var x = +req.params.x;
	var y = +req.params.y;
	setTimeout(function(){
		res.send("" + ((x + y) / 2));
	}, 1000);
});

app.use("/", router);

app.use(function(req, res, next){
	res.end("404 - Request can't be hanlded.");
});

app.listen(3000);
console.log("server started!");