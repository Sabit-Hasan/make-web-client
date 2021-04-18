import React from 'react';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import {CardElement} from '@stripe/react-stripe-js';

const stripePromise = loadStripe('pk_test_51IhAwUJkuUkbbLJQL356RigzTeiaBJrh8mn6F5MynezBLeWtUtoOP3IPmwY7Yhc8YwseO14TTIvdd85gyGshR3iM00R0DRE7Ey');

const ProcessPayment = () => {
    return (
        <div>
            <Elements stripe={stripePromise}>
                <span>Card Information:</span>
                <CardElement className="border border-secondary rounded "
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
            </Elements>
        </div>
    );
};

export default ProcessPayment;