import React, { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';

const CheckoutForm = () => {
    const [processing, setProcessing] = useState(false);
    const [error, setError] = useState("");
    const [clientSecret, setClientSecret] = useState("");
    const stripe = useStripe();
    const elements = useElements();

    useEffect(() =>{
        fetch("http://localhost:5000/create-payment-intent", {
            method:"POST",
            headers:{
              "content-type":"application/json"
            },
            body:JSON.stringify("price")
        })
        .then(res => res.json())
        .then(data => setClientSecret(data.clientSecret))
    })

    const handleSubmit = async(e) =>{
        e.preventDefault();
        if(!stripe || !elements){
            return;
        }

        const card = elements.getElement(CardElement)
        if(card === null){
            return;
        }
        processing(true)
        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type:"card", card,
        })

        if(error){
            console.log(error);
            setError(error.message)
        }
        else{
            console.log(paymentMethod);
            setError('')
        }

        //payment intent
        const {paymentIntent, error: IntentError} = await stripe.confirmCardPayment(
            clientSecret,
            {
              payment_method: {
                card: card,
                billing_details: {
                  name: 'name',
                  email: "email",
                },
              },
            },
          );

          if(IntentError){
              setError(IntentError.message)
          }
          else{
              setError("")
                 setProcessing(false)
              console.log(paymentIntent);
          }
    }
    return (
        <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />
        {processing ? <button className='disabled' type="submit" disabled={!stripe}>
          Pay
        </button> :<button type="submit" disabled={!stripe}>
          Pay
        </button>}
        {error && <p style={{color:"red"}}>{error}</p>}
      </form>
    );
};

export default CheckoutForm;