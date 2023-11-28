import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import {
  CardElement,
  Elements,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';

const PUBLIC_KEY =
  'pk_test_51M1us8ETAJmI65imSZeBJJ7CHjl6MD29Eprr4WFOgF5J3hBxlafK4iMlcZSYcm6q5TJlMscqnddBy5HQUTYB7tyF00fc7ks8SN';
const stripePromise = loadStripe(PUBLIC_KEY);

export const CheckoutForm = ({ clientSecret }: any) => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);

    const { error, paymentIntent } = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card: cardElement,
        },
      }
    );

    if (error) {
      setError(error.message);
    } else if (paymentIntent.status === 'succeeded') {
      console.log('paymentIntent :::: ', paymentIntent);
      console.log('Payment succeeded!');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <br/>
      <br/>
      <button type="submit" disabled={!stripe}>
        Submit Payment
      </button>
      {error && <div>{error}</div>}
    </form>
  );
};

export const StripePaymentForm = ({ clientSecret }: any) => {
  return (
    <div style={{marginLeft: 'auto 0'}}>
        <Elements stripe={stripePromise}>
            <CheckoutForm clientSecret={clientSecret} />
        </Elements>
    </div>
  );
};
