const express = require("express");
const fileUpload = require("express-fileupload");
const fs = require("fs-extra");
const { MongoClient } = require('mongodb');
const bodyParser = require("body-parser");
const cors = require("cors");
require('dotenv').config();

const app = express();
app.use(express.static("doctors"));
app.use(fileUpload());
app.use(bodyParser.json());
app.use(cors());
const port = process.env.PORT || 5000;


const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.pp5w4.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
    const appointmentCollection = client.db(process.env.DB_NAME).collection("appointments");
    const doctorsCollection = client.db(process.env.DB_NAME).collection("doctors");

    app.post("/addAppointment", (req, res) => {
        console.log(req.body);
        const appointment = req.body;
        appointmentCollection.insertOne(appointment)
            .then(result => {
                res.send(result)
            })
    })

    app.post("/appointmentByDate", (req, res) => {
        const date = req.body.justDate;

        appointmentCollection.find({ date: date })
            .toArray((err, doc) => {
                console.log(doc);
                console.log(err);
                res.send(doc)

                // // const email = req.body.email
                // //   console.log(email, "admin email");
                //   //matching admin doctor email on database doctor email
                // doctorsCollection.find({email: email})
                // .toArray((err, doctorDocs) =>{
                //     const filter = {date: date}
                //     if(doctorDocs.length === 0){
                //       filter.email = email;
                //     }
                //   })
            })

    })

    app.post("/addDoctor", (req, res) => {
        const email = req.body.email;
        const name = req.body.name;
        const file = req.files.file;
        // const filePath = `${__dirname}/doctors/${file.name}`

        // // store img on local folder
                // file.mv(filePath, err => {
                //     if (err) {
                //         console.log(err);
                //         return res.status(500).send("failed to upload")
                //     }

        //store img in folder then upload mongodb then remove from folder
                // const newImg = fs.readFileSync(filePath);
                // const encImg = newImg.toString("base64");

                // const image = {
                //     contentType: file.mimetype,
                //     size: file.size,
                //     img: Buffer(encImg, "base64")
                // }

                // doctorsCollection.insertOne({ name, email, image })
                //     .then(result => {
                //         fs.remove(filePath, err => {
                //             if (err) {
                //                 console.log(err);
                //             }
                //             console.log(result, "success img upload in mongodb");
                //         })
                //     })



        // store img direct to mongodb
        const newImg = file.data;
        const encImg = newImg.toString("base64");

        const image = {
            contentType: file.mimetype,
            size: file.size,
            img: Buffer.from(encImg, "base64")
        }

        doctorsCollection.insertOne({ name, email, image })
            .then(result => {
                console.log(result, "success img upload in mongodb");
            })
    })

    app.get("/doctors", (req, res) => {
        console.log(req);
        doctorsCollection.find({})
            .toArray((err, doc) => {
                res.send(doc)
                console.log(doc, err);
            })
    })

});


app.get("/", (req, res) => {
    res.send("helllooooooooooooo")
})

app.listen(port)