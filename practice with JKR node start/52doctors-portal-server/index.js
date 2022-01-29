const express = require("express");
const fileUpload = require("express-fileupload");
const fs = require("fs-extra");
const cors = require("cors");
const bodyParser = require("body-parser");
const { MongoClient } = require('mongodb');
require('dotenv').config();

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(express.static("doctors"))
app.use(fileUpload())

const port = process.env.PORT || 5000;


const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.pp5w4.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const appointmentCollection = client.db(process.env.DB_NAME).collection("appointments");
  const doctorsCollection = client.db(process.env.DB_NAME).collection("doctors");
  
  app.post("/addAppointment", (req, res) =>{
      console.log(req.body);
      const appointment = req.body;
      appointmentCollection.insertOne(appointment)
      .then(result => {
          res.send(result)
      })
  })

  app.post("/appointmentByDate", (req, res) =>{
      const date = req.body.date;
      console.log(date);
      const email = req.body.email
        console.log(email, "admin email");

        //matching admin doctor email on database doctor email
      doctorsCollection.find({email: email})
      .toArray((err, doctorDocs) =>{
          const filter = {date: date}
          if(doctorDocs.length === 0){
            filter.email = email;
          }

          appointmentCollection.find(filter)
          .toArray((err, doc) =>{
          console.log(doc); 
          console.log(err);
          res.send(doc) 

        })
      })

      
  })

  app.post('/addDoctor', (req, res) => {
      const file = req.files.file;
      const name = req.body.name;
      const email = req.body.email;
      const filePath = `${__dirname}/doctors/${file.name}`;

      // store img file into local file
    //   file.mv(filePath, err =>{
    //       if(err){
    //           console.log(err);
    //           return res.status(500).send({msg: "faield to upload img"})
    //       }
    //       doctorsCollection.insertOne({name, email, img:file.name})
    //       .then(result =>{
    //           res.send(result)
    //           console.log(result, "doctor aed");
    //       })
    //     //   res.send({name: file.name, path:`/${file.name}`})
    //   })


        //store img file to the mongoDB as base60 file
       file.mv(filePath, err =>{
          if(err){
              console.log(err);
                res.status(500).send({msg: "faield to upload img"})
          }
          const newImg = fs.readFileSync(filePath);
          const encodedImg = newImg.toString("base64");

          const image ={
              contentType: req.files.file.mimetype,
              size: req.files.file.size,
              img: Buffer(encodedImg, "base64")
          }
          doctorsCollection.insertOne({name, email, image})
          .then(result =>{
              fs.remove(filePath, error =>{
                    if(error){
                        console.log(error)
                        res.status(500).send({msg: "faield to upload img"})
                    }
                    res.send(result)
              })
              console.log(result, "doced");
          })
        //   res.send({name: file.name, path:`/${file.name}`})
      })
  })

  app.get("/doctors", (req, res) =>{
      doctorsCollection.find()
      .toArray((err, doc) =>{
          res.send(doc)
          console.log(doc);
      })
  })

  app.post("/isDoctor", (req, res) =>{
      const email = req.body.email
      doctorsCollection.find({email:email})
      .toArray((err, doc) =>{
          res.send(doc.length > 0)
      })
  })
});

app.get("/", (req, res) =>{
    res.send("hso")
})

app.listen(port);