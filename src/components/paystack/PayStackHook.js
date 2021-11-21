import React from 'react';
import { usePaystackPayment } from 'react-paystack';

const PayStackHook = () => {
  // you can call this function anything
  const onSuccess = reference => {
    // Implementation for whatever you want to do with reference and after success call.
    console.log(reference);
  };

  // you can call this function anything
  const onClose = () => {
    // implementation for  whatever you want to do when the Paystack dialog closed.
    console.log('closed');
  };

  const PaystackHookExample = () => {
    const initializePayment = usePaystackPayment({
      // reference: (new Date()).getTime(),
      reference: '60bcfe31808445159bc581f0',
      // plan: 'PLN_ibaza8kb5fwm272',
      email: 'nondefyde@gmail.com',
      amount: 1000000,
      // publicKey: 'pk_test_6701d59b99aa7450a12b09b21649cc334174d36e',
      // publicKey: 'pk_test_6701d59b99aa7450a12b09b21649cc334174d36e',
      publicKey: 'pk_test_26615a8c76c04b88bb9d5cda4a8d8a0ebd02551b',
      // publicKey: 'pk_test_c6ad7c77a734fdbb17d16f5a2e9ff32b094d30fa',
    });
    console.log('initializePayment ::: ', initializePayment);
    return (
      <div>
        <button
          onClick={() => {
            initializePayment(onSuccess, onClose);
          }}
        >
          Paystack Hooks Implementation
        </button>
      </div>
    );
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Paystack Payment</h1>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <PaystackHookExample />
    </div>
  );
};

export default PayStackHook;
