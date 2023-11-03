import React from 'react';
import { Card, CardBody, CardTitle } from 'reactstrap';
import MyCheckoutForm from './CheckoutForm';

const StripePayment = () => {
  return (
    <div className="row justify-content-center mt-lg-5">
      <div className="col-4 center mt-5">
        <Card>
          <CardBody>
            <CardTitle tag="h5">Card title</CardTitle>
            <CardBody>
              <MyCheckoutForm
                clientSecret={
                  'pi_3O86enETAJmI65im0lt0J2f9_secret_hlRPPb6SIhSPeN9dnWekgE47i'
                }
              />
            </CardBody>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default StripePayment;
