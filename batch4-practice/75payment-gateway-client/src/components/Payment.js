import React from 'react';
import {loadStripe} from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';
import {Elements} from '@stripe/react-stripe-js';

const stripePromise = loadStripe('pk_test_51KJkbzGZnZcxVj2GaQt3OOY8u1zNQvzZaCXwfGedNlmQwu4JGg8MAkhXBKM5n2B2W9oU2f1GjNpWeACrzGtT76Wz006dex6mi4')
const Payment = () => {
    return (
        <div>
            <Elements stripe={stripePromise}>
                <CheckoutForm />
            </Elements>
        </div>
    );
};

export default Payment;