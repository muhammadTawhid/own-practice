const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { MongoClient } = require('mongodb');
require('dotenv').config()

const app = express();
app.use(cors());
app.use(bodyParser.json());
const port = process.env.PORT || 5000;

console.log(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS);

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.pp5w4.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const appointmentCollection = client.db(process.env.DB_NAME).collection("appointments");
  
  app.post("/addAppointment", (req, res) =>{
      console.log(req.body);
      const appointment = req.body;
      appointmentCollection.insertOne(appointment)
      .then(result => {
          res.send(result)
      })
  })

  app.post("/appointmentByDate", (req, res) =>{
      const date = req.body.justDate;
      console.log(date);
      appointmentCollection.find({date: date})
      .toArray((err, doc) =>{
          console.log(doc); 
          console.log(err);
          res.send(doc)
      })
  })
});

app.get("/", (req, res) =>{
    res.send("hso")
})

app.listen(port);