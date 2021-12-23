const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { MongoClient } = require('mongodb');
var admin = require("firebase-admin");
const { getAuth } = require('firebase-admin/auth');
var serviceAccount = require("./configs/burj-al-arab02-firebase-adminsdk-nf383-81566d922e.json");
require('dotenv').config()

const app = express();
app.use(cors());
app.use(bodyParser.json());



admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://burj-al-arab02-default-rtdb.firebaseio.com"
});

const userName = process.env.DB_USER
const password = process.env.DB_PASS

const uri = `mongodb+srv://${userName}:${password}@cluster0.pp5w4.mongodb.net/burjAlArabPractice?retryWrites=true&w=majority`;

   
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {

  const collection = client.db("burjAlArabPractice").collection("bookings");

  app.post("/addBookings", (req, res) =>{
    const newBookings = req.body
    collection.insertOne(newBookings)
    .then(result => console.log(result))
  })

  app.get("/bookings", (req, res) =>{
    const idToken = req.headers.authorization;
    if(idToken){
      getAuth()
      .verifyIdToken(idToken)
      .then((decodedToken) => {
        const idEmail = decodedToken.email;
        if(idEmail === req.query.email){
          collection.find({email:req.query.email})
          .toArray((err, document) =>{
            res.send(document)
          })
        }
        else{
          res.status(401).send("un-authorized user")
        }
      })
      .catch((error) => {
      res.status(401).send("un-authorized user")
      console.log(error)
      });

    }
    else{
      res.status(401).send("un-authorized user")
    }
  })
});

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(4000)





// const express = require('express')
// const bodyParser = require("body-parser");
// const cors = require("cors")

// const app = express()
// app.use(cors());
// app.use(bodyParser.json());

// const port = 4000


// const { MongoClient } = require('mongodb');
// const uri = "mongodb+srv://burjAlArabPractice:burjAlArab@cluster0.pp5w4.mongodb.net/burjAlArabPractice?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
// client.connect(err => {
//   const collection = client.db("burjAlArabPractice").collection("bookings");
//   console.log("db conned")
//   app.post("/addBookings", (req, res) =>{
//     const newBooking = req.body;
//     collection.insertOne(newBooking)
//     .then(result => console.log(result, "data posted"))
//     console.log(newBooking)
//   })
// });

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// app.listen(port)