import React from 'react';
import StripePayment from '../components/stripe/StripPayment';
import PayStackButton from '../components/paystack/PayStackButton';
import PayStackHooks from '../components/paystack/PayStackHook';

const App = () => {
  return (
    <StripePayment />
    // <PayStackHooks/>
  );
};

export default App;
