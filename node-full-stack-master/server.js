import express from 'express';
import bodyParser from 'body-parser';
import mongoose, {Schema} from 'mongoose';
import {getProducts} from "./controllers/product.controller";
import Products from "./models/product.model";
import cors from 'cors';

var url = "mongodb://lk:Lk971024@cluster0-shard-00-00.micbd.mongodb.net:27017,cluster0-shard-00-01.micbd.mongodb.net:27017,cluster0-shard-00-02.micbd.mongodb.net:27017/CCGG-DB?ssl=true&replicaSet=atlas-nhj6tk-shard-0&authSource=admin&retryWrites=true&w=majority";
// connect to Mongodb
mongoose.Promise = global.Promise;
const promise = mongoose.connect(url, {
    useMongoClient: true
});

const SECRET = process.env.SECRET || 'ccgg';
promise.then(function() {
    console.log("Mongodb connected!");
});

// route
const app = express();

const allowedOrigins = ['http://localhost:4200'];

//set cors for frontend app
app.use(cors({
    credential: true,
    origin: function(origin, callback){
        if(!origin) return callback(null, true);
        if(allowedOrigins.indexOf(origin) === -1){
            var msg = 'Does not allow access';
            return callback(new Error(msg), false);
        }
        return callback(null, true);
    }
}));

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.get('/products', getProducts);

app.use(bodyParser.urlencoded({extended: false})) //Post Body Parser
app.use(bodyParser.json());
app.post('/products/add', function(req, res){
    const item = new Products({
        name: "xxx",
        brand: "xxx",
        price: "xxx",
        stock: "xxx",
        image: "xxx"

    })
    item.save().then(item => {
             res.send("item saved");
         }).catch(err => {
             res.status(400).send("unable to save");
         });

});

app.delete("/:productId", (req, res, next) => {
    const id = req.params.productId;
    Products.remove({ _id: id})
        .exec()
        .then(result => {
            console.log("Deleted!");
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
})

app.listen(process.env.port || 3000);
console.log("server started!");
