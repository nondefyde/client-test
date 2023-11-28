import { Card, CardBody, CardTitle } from 'reactstrap';
import {StripePaymentForm} from './CheckoutForm.js';

export const StripePayment = () => {
  return (
    <div style={{marginLeft: 'auto 0'}} className="row justify-content-center mt-lg-5">
      <h1>Stripe Payment</h1>
      <div className="col-4 center mt-5">
        <Card>
          <CardBody>
            <CardTitle tag="h5">Card title</CardTitle>
            <CardBody>
              <StripePaymentForm
                clientSecret={
                  'pi_3ODUzYETAJmI65im1OSlOMMS_secret_0fdGSy40furde9q7cFwHfiEp6'
                }
              />
            </CardBody>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};
