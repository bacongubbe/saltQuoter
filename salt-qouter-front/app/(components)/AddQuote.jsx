'use client';
import { useRouter } from 'next/navigation';
import { React, useRef, useState } from 'react'

const AddQuote = ({ id, name }) => {

    const [success, setSuccess] = useState(false);
    const router = useRouter();

    const quoteRef = useRef();
    const personIdRef = useRef();

    const handleSubmit = e => {
        e.preventDefault();
        if (!id) {
            fetch(`http://localhost:8080/saltquoter/people/${personIdRef.current.value}/quotes/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    'quote': quoteRef.current.value,
                    'favourite': false
                })
            }).then(res => {
                console.log(res);
                setSuccess(true);
                router.refresh();
                setTimeout(() => {
                    setSuccess(false);
                    router.refresh();
                }, 2000)
            })
            quoteRef.current.value = '';
            personIdRef.current.value = '';
            return;
        }
        fetch(`http://localhost:8080/saltquoter/people/${id}/quotes/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                'quote': quoteRef.current.value,
                'favourite': false
            })
        }).then(res => {
            console.log(res);
            setSuccess(true);
            router.refresh();
            setTimeout(() => {
                setSuccess(false);
                router.refresh();
            }, 2000)
        })
        quoteRef.current.value = '';
        return;

    }

    return (
        <>
            <form className='edit-quote-form' onSubmit={handleSubmit}>
                <legend>{name ? `add another one from ${name}` : 'add quote'}</legend>
                <input className='edit-quote-form__input' ref={quoteRef} type={'text'} placeholder={'Quote'} />
                {(!id) &&
                    <input className='edit-quote-form__input' ref={personIdRef} type={'text'} placeholder={'person id'} />}
                <button className='button' type='submit'> Submit </button>
            </form>
            <div className={success ? 'edit-person-form__success-message' : 'edit-person-form__success-message--disabled'} > Success! </div>
        </>
    )
}

export default AddQuote