const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser")
const { MongoClient } = require('mongodb');
require("dotenv").config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.pp5w4.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db(process.env.DB_NAME).collection("products");
  const ordersCollection = client.db(process.env.DB_NAME).collection("orders");
    
    //   inserted all products
  app.post("/addProduct", (req, res) =>{
      const newProduct = req.body;
      console.log(newProduct)
      collection.insertOne(newProduct)
      .then(result => {
          console.log(result)
      })
  })

    //   get all products
  app.get("/products", (req, res) =>{
      collection.find({})
      .toArray((err, document) => {
          res.send(document)
      })
  })

    //   for product details
  app.get("/product/:key", (req, res) =>{
      const productKey = req.params.key
      collection.find({key: productKey})
      .toArray((err, document) =>{
          res.send(document)
      })
  })

    // get all products in cart
    app.post("/productsByKeys", (req, res) => {
        console.log(req.body)
        collection.find({key: {$in: req.body}})
        .toArray((err, document) => {
            res.send(document)
        })
    })

    // add order 
    app.post("/addOrder", (req, res) =>{
        const order = req.body;
        console.log(order)
        ordersCollection.insertOne(order)
        .then(result => {
            console.log(result)
        })
    })
});

app.get("/", (req, res) =>{
    res.send("helodo")
})

app.listen(process.env.PORT || 5000)