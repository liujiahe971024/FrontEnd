var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var personController = require("./controllers/person");

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//route
var router = express.Router();

app.get("/persons", personController.getPersons);
app.get("/persons/:index", personController.getPerson);
app.post("/persons", personController.postPersons);

router.get("/cal/add/:x/:y", function(req,res){
    var x = +req.params.x;
    var y = +req.params.y;
    setTimeout(function(){
        res.send("" + (x + y));
    }, 1000);
});
router.get("/cal/multiply/:x/:y", function(req,res){
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

app.listen(3000);

console.log("server started!");