'use client';

import { React, useRef, useState } from 'react'
import { useRouter } from 'next/navigation';

const UpdateQuote = ({ id, current, person }) => {

    const quoteRef = useRef();
    const [success, setSuccess] = useState(false);
    const router = useRouter();

    const handleSubmit = e => {
        e.preventDefault();
        fetch(`http://localhost:8080/saltquoter/quotes/${id}/${person}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                'quote': quoteRef.current.value,
            })
        }).then(res => {
            console.log(res);
            setSuccess(true);
            router.refresh;
            setTimeout(() => {
                setSuccess(false);
                router.refresh;
            }, 2000)
        })
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type='text' placeholder={current} ref={quoteRef} />
                <button className='button' type='submit'> update </button>
            </form>
            <div className={success ? 'edit-person-form__success-message' : 'edit-person-form__success-message--disabled'} > Success! </div>
        </>

    )
}

export default UpdateQuote