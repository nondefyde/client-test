import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import MyCheckoutForm from './CheckoutForm';
import { Card, CardBody, CardTitle } from 'reactstrap';

const stripePromise = loadStripe('pk_test_rLISRLKb9rBULy8011hG6Ssp00Ho1q9sYK');

const StripePayment = () => {
  return (
    <div className='row justify-content-center mt-lg-5'>
      <div className='col-4 center mt-5'>
        <Card>
          <CardBody>
            <CardTitle tag="h5">Card title</CardTitle>
            <CardBody>
              <Elements stripe={stripePromise}>
                <MyCheckoutForm/>
              </Elements>
            </CardBody>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default StripePayment;
