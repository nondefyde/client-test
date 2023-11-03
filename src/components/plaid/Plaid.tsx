import {Fragment, useEffect} from 'react'
import './App.css'
import {usePlaidLink} from "react-plaid-link";

function Plaid() {

    const { open, ready, error } = usePlaidLink({
        token: 'link-sandbox-e1520764-172e-4e19-bc0f-0b9367079e4a',
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
