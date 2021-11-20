import React from 'react';
import { PaystackButton } from 'react-paystack';

const PayStackButton = () => {
  // you can call this function anything
  const handlePaystackSuccessAction = (reference) => {
    // Implementation for whatever you want to do with reference and after success call.
    console.log(reference);
  };
  
  // you can call this function anything
  const handlePaystackCloseAction = () => {
    // implementation for  whatever you want to do when the Paystack dialog closed.
    console.log('closed');
  };
  
  const componentProps = {
    reference: (new Date()).getTime(),
    email: 'yser@gmail.com',
    amount: 20000,
    publicKey: 'pk_test_c6ad7c77a734fdbb17d16f5a2e9ff32b094d30fa',
    text: 'Pay Now',
    onSuccess: (reference) => handlePaystackSuccessAction(reference),
    onClose: handlePaystackCloseAction,
  };
  
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Paystack Button
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <PaystackButton {...componentProps} />
    </div>
  );
};

export default PayStackButton;
