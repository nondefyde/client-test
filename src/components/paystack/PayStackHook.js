import React from 'react';
import { usePaystackPayment } from 'react-paystack';

const PayStackHook = () => {
  // you can call this function anything
  const onSuccess = reference => {
    // Implementation for whatever you want to do with reference and after success call.
    console.log('OUTPUT :::: ', reference);
  };

  // you can call this function anything
  const onClose = () => {
    // implementation for  whatever you want to do when the Paystack dialog closed.
    console.log('closed');
  };

  const PaystackHookExample = () => {
    const initializePayment = usePaystackPayment({
      reference: 'ref_c5d80b3f-5053-4753-b45c-463b3abafdff',
      email: 'ekaruztest@gmail.com',
      amount: 2300,
      channels: ['card'],
      publicKey: 'pk_test_b323b565fcf54d27ba22516c7e46df2978836b9b',
    });
    console.log('OUTPUT initializePayment ::: ', initializePayment);
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
