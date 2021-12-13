const express = require("express"); 
const app = express();

// const rootCall = (req, res) =>{
//     res.send("thank u very much")
// }

app.get("/", (req, res) =>{
    res.send("hello world")
})

app.listen(3000, () => console.log("i'm listing 30000"));