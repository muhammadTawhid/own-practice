const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { MongoClient } = require("mongodb");
const { getAuth } = require('firebase-admin/auth');
var admin = require("firebase-admin");
var serviceAccount = require("./config/burj-al-arab02-firebase-adminsdk-nf383-f435c4c77a.json");
require("dotenv").config();

console.log(process.env.DB_PASS);
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASS;
const fireDb = process.env.FIRE_DB


const uri =
  `mongodb+srv://${dbUser}:${dbPassword}@cluster0.pp5w4.mongodb.net/47burjAlArab?retryWrites=true&w=majority`;
    
const app = express();

app.use(cors());
app.use(bodyParser.json());


admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: fireDb,
  });



const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
client.connect((err) => {
  const bookings = client.db("47burjAlArab").collection("bookings");

  app.post("/addBookings", (req, res) => {
    const newBooking = req.body;
    bookings.insertOne(newBooking).then((result) => {
      console.log(result);
    });
  });

  app.get("/bookings", (req, res) => {
    // console.log(req.headers.authorization);
    const idToken = req.headers.authorization;
    console.log(idToken);

    if (idToken && idToken.startsWith("Berar")) {
      const newToken = idToken.split(" ")[1];
      console.log({ newToken }, "ids");

        getAuth().verifyIdToken(newToken)
        .then((decodedToken) => {
          const tokenEmail = decodedToken.email;
          console.log(tokenEmail, req.query.email);
          if(tokenEmail === req.query.email){
                bookings.find({email: req.query.email })
                .toArray((err, documents) =>{
                    res.send(documents)
                })
          }
          else{
            res.status(401).send("un-authorized access")
          }

        })
        .catch((error) => {
          res.status(401).send("un-authorized access")
          console.log(error, "server err");
        });
    }

    else{
      res.status(401).send("un-authorized access")
    }

    //   bookings.find({email: req.query.email })
    //   .toArray((err, documents) =>{
    //       res.send(documents)
    //   })
  });
});

app.listen(5000);
