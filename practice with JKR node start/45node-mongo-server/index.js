const express = require("express")
const app = express();

const cors = require("cors")
app.use(cors());

const bodyParser = require("body-parser")
app.use(bodyParser.json())

const users = ["abir", "sabir", "gabir", "sakib", "akib", "nakib" ]
const fruitList = ["banana", "mango", "pineapple", "apple", "lichi", "dove"]

// const rootCall = (req, res) =>{
//     res.send("thank u very much")
// }

// get
app.get("/", (req, res) =>{
    const fruit = {
        product: "banana",
         "price": 200
    }
    res.send(fruit)
})

app.get("/product/fruit", (req, res) =>{
    res.send({product:"mango", quantity: 100, price:1000})
})

app.get("/users/:id", (req, res) =>{
    const id = req.params.id;
    const name = users[id];
    res.send({id, name});
})

app.get("/fruits/:id", (req, res) =>{
    const id = req.params.id;
    const name = fruitList[id];
    res.send({id, name})
})

// post
app.post("/postUser", (req, res) =>{
    console.log(req.body)
    const user = req.body;
    user.id = 55;
    res.send(user);
})

app.listen(3000, () => console.log("i'm listing 30000"));