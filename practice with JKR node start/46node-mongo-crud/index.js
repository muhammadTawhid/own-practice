const express = require("express");
const bodyParser = require("body-parser");
const { MongoClient } = require("mongodb");
const ObjectId = require("mongodb").ObjectId;
// const e = require("express");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// const MongoClient = require('mongodb').MongoClient;

const uri =
  "mongodb+srv://46OrganicProduct:ZPT8gtZZ4tKYazy@cluster0.pp5w4.mongodb.net/46organicDb?retryWrites=true&w=majority";

const pass = "ZPT8gtZZ4tKYazy";

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
  console.log("html");
});

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
client.connect((err) => {
  const ProductCollection = client.db("46organicDb").collection("products");

  // get read
  app.get("/products", (req, res) => {
    ProductCollection.find({}).toArray((err, document) => {
      res.send(document);
    });
  });

  // get for update read
  app.get("/product/:id", (req, res) => {
    ProductCollection.find({ _id: ObjectId(req.params.id) }).toArray(
      (err, documents) => {
        res.send(documents[0]);
      }
    );
  });

  // post create
  app.post("/addProduct", (req, res) => {
    const product = req.body;
    console.log(product);
    // ProductCollection.insertOne()
    ProductCollection.insertOne(product).then((result) => {
      console.log("data added successfully");
      res.redirect("/");
    });
  });

  // delete
  app.delete("/delete/:id", (req, res) => {
    console.log(req.params.id);
    ProductCollection.deleteOne({ _id: ObjectId(req.params.id) }).then(
      (result) => {
        res.send(result.deletedCount > 0);
      }
    );
  });

  //update one patch method
  app.patch("/update/:id", (req, res) => {
    ProductCollection.updateOne(
      { _id: ObjectId(req.params.id) },
      {
        $set: { price: req.body.price, quantity: req.body.quantity },
      }
    ).then((result) => {
      res.send(result.modifiedCount > 0);
    });
  });
});

app.listen(3000);
