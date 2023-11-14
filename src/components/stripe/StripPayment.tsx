import { Card, CardBody, CardTitle } from 'reactstrap';
import {StripePaymentForm} from './CheckoutForm.js';

export const StripePayment = () => {
  return (
    <div className="row justify-content-center mt-lg-5">
      <h1>Stripe Payment</h1>
      <div className="col-4 center mt-5">
        <Card>
          <CardBody>
            <CardTitle tag="h5">Card title</CardTitle>
            <CardBody>
              <StripePaymentForm
                clientSecret={
                  'pi_3OBLSCETAJmI65im0V9TaqaI_secret_rMkhWseHp7HvNrdhOpNYxaInI'
                }
              />
            </CardBody>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};
