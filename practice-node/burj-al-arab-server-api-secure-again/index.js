const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { MongoClient } = require('mongodb');
require('dotenv').config()
const admin = require("firebase-admin");
const {getAuth} = require('firebase-admin/auth');
var serviceAccount = require("./config/burj-al-arab02-firebase-adminsdk-nf383-19cee8a0e5.json");

const app = express();
app.use(cors());
app.use(bodyParser.json()); 



admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://burj-al-arab02-default-rtdb.firebaseio.com"
});

const username = process.env.DB_USER
const password = process.env.DB_PASS
console.log( password);

const uri = `mongodb+srv://${username}:${password}@cluster0.pp5w4.mongodb.net/burjAlArabPractice?retryWrites=true&w=majority`;

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("burjAlArabPractice").collection("bookings");

  app.post("/addBookings", (req, res) =>{
     console.log(req.body);
     collection.insertOne(req.body)
     .then(result => {
         console.log(result);
     })
  })

  app.get("/bookings", (req, res) =>{
      const idToken = req.headers.authorization;

        if(idToken){
            getAuth()
            .verifyIdToken(idToken)
            .then((decodedToken) => {
                const email = decodedToken.email;
                // console.log(req.params.email);

                if(email === req.query.email){
                    collection.find({email: req.query.email})
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
                console.log(error);
            });
        }
        else{
            res.status(401).send("un-authorized user")
        }
        


      console.log(idToken);
      
  })

});

app.get("/", (req, res) =>{
    res.send("worsd")
})

app.listen(5000)