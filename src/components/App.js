import React from 'react';
import PayStackHooks from '../components/paystack/PayStackHook';
// import StripePayment from "./stripe/StripPayment";
import Plaid from "./plaid/Plaid";

const App = () => {
    return (
        // <StripePayment/>
        <div>
            Payment Integrations
            <Plaid/>
        </div>
    );
};

export default App;
