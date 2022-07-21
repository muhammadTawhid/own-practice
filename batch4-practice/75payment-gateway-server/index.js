
const express = require('express')
const bodyParser =require("body-parser")
const cors = require('cors')
require('dotenv').config()
const stripe = require('stripe')(process.env.STRIPE_SECRET)
const app = express()
app.use(bodyParser.json())
app.use(cors())
const port = 5000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post("/create-payment-intent", async (req, res) =>{
    const paymentInfo = req.body;
    const amount = paymentInfo.price * 100;
    const paymentIntent = await stripe.paymentIntents.create({
        currency: "usd",
        amount:amount,
        payment_method_type:{
            enabled:true
        }
    })
    res.json({clientSecret:paymentIntent.client_secret})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
