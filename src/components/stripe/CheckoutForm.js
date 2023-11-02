import React, { useState } from 'react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import axios from 'axios'; // Make sure to install axios

const CheckoutForm = () => {
  const [amount, setAmount] = useState(0);
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async event => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);

    // Call your backend to create the PaymentIntent
    let clientSecret;
    try {
      const response = await axios.post(process.env.SERVER_URL, { amount });
      clientSecret = response.data.clientSecret;
    } catch (error) {
      console.error('Error creating payment intent', error);
      return;
    }

    const {
      error: confirmError,
      paymentIntent: confirmedPaymentIntent,
    } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: cardElement,
      },
    });

    if (confirmError) {
      console.log('[error]', confirmError);
    } else if (confirmedPaymentIntent.status === 'succeeded') {
      console.log('Money transfer successful!');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="number"
        placeholder="Enter amount"
        value={amount}
        onChange={e => setAmount(e.target.value)}
      />
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
      <button type="submit" disabled={!stripe}>
        Pay
      </button>
    </form>
  );
};

export default CheckoutForm;
