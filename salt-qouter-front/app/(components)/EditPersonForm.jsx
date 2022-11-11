'use client';
import { useRouter } from 'next/navigation';
import { React, useRef, useState } from 'react'

const EditPersonForm = ({ id, name }) => {

    const [success, setSuccess] = useState(false);
    const router = useRouter();

    const nameRef = useRef();
    const roleRef = useRef();
    const imageTopRef = useRef();
    const imageBottomRef = useRef();

    const handleSubmit = e => {
        e.preventDefault();
        if (!id) {
            fetch(`http://localhost:8080/saltquoter/people/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    'name': nameRef.current.value,
                    'role': roleRef.current.value,
                    'imageTop': imageTopRef.current.value,
                    'imageBottom': imageBottomRef.current.value
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
            nameRef.current.value = '';
            roleRef.current.value = '';
            imageTopRef.current.value = '';
            imageBottomRef.current.value = '';
            return;
        }
        fetch(`http://localhost:8080/saltquoter/people/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                'id': id,
                'name': nameRef.current.value,
                'role': roleRef.current.value,
                'imageTop': imageTopRef.current.value,
                'imageBottom': imageBottomRef.current.value
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
        nameRef.current.value = '';
        roleRef.current.value = '';
        imageTopRef.current.value = '';
        imageBottomRef.current.value = '';
    }

    return (
        <>
            <form className='edit-person-form' onSubmit={handleSubmit}>
                <legend>{id ? `edit ${name}` : 'Add a person'}</legend>
                <input className='edit-person-form__input' ref={nameRef} type={'text'} placeholder={'Name'} />
                <input className='edit-person-form__input' ref={roleRef} type={'text'} placeholder={'Role / Title'} />
                <input className='edit-person-form__input' ref={imageTopRef} type={'text'} placeholder={'Image - top half'} />
                <input className='edit-person-form__input' ref={imageBottomRef} type={'text'} placeholder={'Image - bottom half'} />
                <button className='edit-person-form__input' type='submit'> Submit </button>
            </form>
            <div className={success ? 'edit-person-form__success-message' : 'edit-person-form__success-message--disabled'} > Success! </div>
        </>
    )
}

export default EditPersonForm