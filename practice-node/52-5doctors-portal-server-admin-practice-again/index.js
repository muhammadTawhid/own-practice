const express = require("express")
const fileUpload = require("express-fileupload");
const { MongoClient } = require('mongodb');
const cors = require("cors");
const bodyParser = require("body-parser")
require("dotenv").config()

const port = process.env.PORT || 5000;

const app = express();
app.use(express.static("doctors"))
app.use(fileUpload())
app.use(cors())
app.use(bodyParser.json())


const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.pp5w4.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
    const doctorsCollection = client.db(process.env.DB_NAME).collection("doctors");

    app.get("/doctors", (req, res) => {
        doctorsCollection.find()
            .toArray((err, doc) => {
                res.send(doc);
                console.log(err);
            })
    })

    // store img on local folder and database
    app.post("/addDoctor", (req, res) => {
        const email = req.body.email;
        const name = req.body.name;
        const file = req.files.file;

        const filePath = `${__dirname}/doctors/${file.name}`
        //store img on local folder
        // file.mv(filePath, err=>{
        //     console.log(err);
        // })

        // store img on mongodb database      
        const imgData = file.data;
        const encImg = imgData.toString("base64")
        const image = {
            contentType: file.mimetype,
            size: file.size,
            img: Buffer.from(encImg, "base64")
        }
        doctorsCollection.insertOne({ name, email, image })
            .then(result => {
                console.log(result);
            })
    })
});

app.get("/", (req, res) => {
    res.send("hhell")
})

app.listen(port)