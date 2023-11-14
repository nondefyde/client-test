import {Fragment, useEffect} from 'react'
import './App.css'
import {usePlaidLink} from "react-plaid-link";

function Plaid() {

    const { open, ready, error } = usePlaidLink({
        token: 'link-sandbox-bf7b9cdd-e309-4915-b24a-c739775e6bee',
        onSuccess: (public_token, metadata) => {
            console.log('metadata ::: ', metadata);
            console.log('public_token ::: ', public_token);
        },
    });

    useEffect(() => {
        console.log('error ::: ', error);
    }, [error])

    return (
        <Fragment>
            <h1>
                <button onClick={() => open()} disabled={!ready}>
                    Connect a bank account
                </button>
            </h1>
        </Fragment>
    )
}

export default Plaid
