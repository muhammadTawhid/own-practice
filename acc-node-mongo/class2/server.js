const express = require("express");

const app = express();
const port = 3000;


app.get("/", (req, res) =>{
    res.send("helloooooo world")
})

app.listen(port, () => {
    console.log("listing port 3000");
});