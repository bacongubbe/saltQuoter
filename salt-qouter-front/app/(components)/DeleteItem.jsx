'use client'
import { useRouter } from 'next/navigation';
import React from 'react'

const DeleteItem = ({ id, type }) => {

    const URL_type = type === 'person' ? 'people' : 'quotes';
    const router = useRouter();

    const handleClick = e => {
        e.preventDefault();
        fetch(`http://localhost:8080/saltquoter/${URL_type}/${id}`, {
            method: 'DELETE'
        }).then(() => {
            router.refresh();
            router.back()
        });

    }

    return (
        <button className='button--delete button' onClick={handleClick}>Delete {type}</button>
    )
}

export default DeleteItem