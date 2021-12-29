const express = require("express");
const { MongoClient, ObjectId } = require('mongodb');
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();

const app = express();
app.use(cors())
app.use(bodyParser.json())


const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.pp5w4.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const eventCollection = client.db(process.env.DB_NAME).collection("48-5events");

  app.post("/addEvents", (req, res) =>{
      const newEvent = req.body
      eventCollection.insertOne(newEvent)
      .then(result => console.log(result))
  })

  app.get("/events", (req, res) =>{
      eventCollection.find()
      .toArray((err, events) => {
          res.send(events)
      })
  })

  app.delete("/delete/:id", (req, res) =>{
      const id = ObjectId(req.params.id)
      eventCollection.findOneAndDelete({_id: id})
      .then(document => console.log("delete")) 
  })

});

app.get("/", (req, res) =>{
    res.send("hellos");
})

app.listen(process.env.PORT || 5000)